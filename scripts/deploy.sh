#!/usr/bin/env bash

set -euo pipefail

BUCKET="personal-portfolio-adn-2026-935173128343-us-east-2-an"
REGION="us-east-2"
DISTRIBUTION_ID="EKSGB3AJZ8O3V"
SITE_URL="https://dov62esnlp0xr.cloudfront.net"

export AWS_DEFAULT_REGION="$REGION"
export VITE_SITE_URL="$SITE_URL"
export SITE_URL

echo ""
echo "======================================"
echo " PERSONAL PORTFOLIO - AWS DEPLOYMENT"
echo "======================================"

echo ""
echo "==> 1. Verificando sesión AWS..."

aws sts get-caller-identity >/dev/null || {
  echo "ERROR: AWS session is invalid."
  echo "Run: aws login"
  exit 1
}

echo "AWS authentication: OK"

if [ "${SKIP_CHECKS:-0}" != "1" ]; then

  echo ""
  echo "==> 2. Quality checks..."

  npm run lint
  npm run format:check
  npm run typecheck
  npm run test:run
  npm run security:audit

  echo ""
  echo "==> 3. End-to-end tests..."

  npm run test:e2e

else

  echo ""
  echo "WARNING: Quality checks skipped."

fi

echo ""
echo "==> 4. Production build..."

npm run build

echo ""
echo "==> 5. Release validation..."

npm run validate:release

echo ""
echo "==> 6. Checking required files..."

for file in \
  dist/index.html \
  dist/robots.txt \
  dist/sitemap.xml \
  dist/documents/cv-es.pdf \
  dist/documents/cv-en.pdf \
  dist/images/profile.webp
do

  if [ ! -f "$file" ]; then
    echo "ERROR: Missing file: $file"
    exit 1
  fi

done

echo "Required files: OK"

echo ""
echo "==> 7. Uploading versioned assets..."

aws s3 sync dist/assets/ "s3://$BUCKET/assets/" \
  --cache-control "public,max-age=31536000,immutable" \
  --only-show-errors

echo ""
echo "==> 8. Uploading static resources..."

aws s3 sync dist/ "s3://$BUCKET/" \
  --delete \
  --exclude "index.html" \
  --exclude "assets/*" \
  --exclude "robots.txt" \
  --exclude "sitemap.xml" \
  --cache-control "public,max-age=86400" \
  --only-show-errors

echo ""
echo "==> 9. Uploading SEO resources..."

aws s3 cp dist/robots.txt "s3://$BUCKET/robots.txt" \
  --content-type "text/plain; charset=utf-8" \
  --cache-control "public,max-age=300"

aws s3 cp dist/sitemap.xml "s3://$BUCKET/sitemap.xml" \
  --content-type "application/xml" \
  --cache-control "public,max-age=300"

echo ""
echo "==> 10. Uploading index.html..."

aws s3 cp dist/index.html "s3://$BUCKET/index.html" \
  --content-type "text/html; charset=utf-8" \
  --cache-control "no-cache,max-age=0,must-revalidate"

echo ""
echo "==> 11. Creating CloudFront invalidation..."

INVALIDATION_ID=$(
  MSYS_NO_PATHCONV=1 aws cloudfront create-invalidation \
    --distribution-id "$DISTRIBUTION_ID" \
    --paths "/*" \
    --query 'Invalidation.Id' \
    --output text
)

echo "Invalidation: $INVALIDATION_ID"

echo ""
echo "==> 12. Waiting for CloudFront..."

MSYS_NO_PATHCONV=1 aws cloudfront wait invalidation-completed \
  --distribution-id "$DISTRIBUTION_ID" \
  --id "$INVALIDATION_ID"

echo "CloudFront invalidation completed."

echo ""
echo "==> 13. Production validation..."

npm run validate:production

echo ""
echo "======================================"
echo " DEPLOYMENT COMPLETED SUCCESSFULLY"
echo "======================================"

echo ""
echo "Production URL:"
echo "$SITE_URL"

echo ""
