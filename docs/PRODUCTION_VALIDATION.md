# Production Validation

## Production Environment

URL:

https://dov62esnlp0xr.cloudfront.net

Infrastructure:

- Amazon S3
- Amazon CloudFront
- Origin Access Control
- HTTPS

## 1. Availability

Open:

https://dov62esnlp0xr.cloudfront.net/

Expected:

HTTP 200.

## 2. HTTPS

Open:

http://dov62esnlp0xr.cloudfront.net/

Expected:

Redirect to HTTPS.

## 3. SEO Resources

robots.txt:

https://dov62esnlp0xr.cloudfront.net/robots.txt

sitemap.xml:

https://dov62esnlp0xr.cloudfront.net/sitemap.xml

Both resources must be publicly accessible.

## 4. Application Routes

Validate:

- /
- /projects/workflow-saas
- /projects/medlab-platform
- /projects/instrumenthub
- /projects/digital-thermometer
- /projects/fbg-sensor-research

All routes must load correctly.

## 5. Documents

Validate:

- /documents/cv-es.pdf
- /documents/cv-en.pdf

Expected:

HTTP 200 and application/pdf.

## 6. Browser Validation

Test:

- Chrome
- Firefox
- Edge
- Safari where available

## 7. Production Test Command

```bash
npm run validate:production
```
