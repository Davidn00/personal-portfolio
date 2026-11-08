#!/usr/bin/env bash
# Despliegue manual: checks -> build -> S3 -> invalidación CloudFront -> smoke test
set -euo pipefail

BUCKET="personal-portfolio-adn-2026-935173128343-us-east-2-an"
REGION="us-east-2"
DISTRIBUTION_ID="EKSGB3AJZ8O3V"
SITE_URL="https://dov62esnlp0xr.cloudfront.net"
export AWS_DEFAULT_REGION="$REGION"

echo "==> Verificando sesión de AWS..."
aws sts get-caller-identity >/dev/null || {
  echo "Sesión no válida. Ejecuta: aws login"
  exit 1
}

if [ "${SKIP_CHECKS:-0}" != "1" ]; then
  echo "==> Controles de calidad..."
  npm run lint
  npm run format:check
  npm run typecheck
  npm run test:run
  npm run security:audit
fi

echo "==> Compilando para producción..."
VITE_SITE_URL="$SITE_URL" npm run build

echo "==> Verificando archivos generados..."
for f in dist/index.html dist/robots.txt dist/sitemap.xml \
         dist/documents/cv-es.pdf dist/documents/cv-en.pdf; do
  [ -f "$f" ] || { echo "Falta $f"; exit 1; }
done
if grep -qiE "localhost|example\.invalid|YOUR_DOMAIN" dist/robots.txt dist/sitemap.xml dist/index.html; then
  echo "dist contiene URLs de desarrollo. Abortando."
  exit 1
fi

echo "==> Subiendo assets versionados..."
aws s3 sync dist/assets/ "s3://$BUCKET/assets/" \
  --cache-control "public,max-age=31536000,immutable" \
  --only-show-errors

echo "==> Subiendo el resto de archivos estáticos..."
aws s3 sync dist/ "s3://$BUCKET/" \
  --delete \
  --exclude "index.html" \
  --exclude "assets/*" \
  --exclude "robots.txt" \
  --exclude "sitemap.xml" \
  --cache-control "public,max-age=86400" \
  --only-show-errors

echo "==> Subiendo robots.txt y sitemap.xml..."
aws s3 cp dist/robots.txt "s3://$BUCKET/robots.txt" \
  --content-type "text/plain; charset=utf-8" \
  --cache-control "public,max-age=300"
aws s3 cp dist/sitemap.xml "s3://$BUCKET/sitemap.xml" \
  --content-type "application/xml" \
  --cache-control "public,max-age=300"

echo "==> Subiendo index.html (al final)..."
aws s3 cp dist/index.html "s3://$BUCKET/index.html" \
  --content-type "text/html; charset=utf-8" \
  --cache-control "no-cache,max-age=0,must-revalidate"

echo "==> Invalidando caché de CloudFront..."
MSYS_NO_PATHCONV=1 aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/*" >/dev/null

echo "==> Smoke test de producción..."
for path in "/" "/projects/medlab-platform" "/documents/cv-es.pdf" "/robots.txt" "/sitemap.xml"; do
  curl --retry 10 --retry-all-errors --retry-delay 5 -fsS -o /dev/null "$SITE_URL$path"
  echo "OK  $path"
done

echo "Despliegue completado: $SITE_URL"
