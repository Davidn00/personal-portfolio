# AWS Infrastructure Setup

## Prerequisites

- AWS account, AWS CLI v2 (2.32.0 or later), Node.js 22, npm, Git.

## Resources

| Resource       | Name                                                      |
| -------------- | --------------------------------------------------------- |
| S3 bucket      | personal-portfolio-adn-2026-<account-id>-us-east-2-an     |
| CloudFront OAC | Created by the CloudFront console wizard                  |
| CloudFront     | Production distribution (default root object: index.html) |

## Configuration

- S3: general purpose, ACLs disabled, Block Public Access on,
  static website hosting off, policy limited to the distribution.
- CloudFront: S3 REST origin, OAC with signed requests,
  HTTPS redirect, GET/HEAD only, CachingOptimized,
  custom error responses 403/404 -> /index.html (200).

## Deployment

```bash
aws login
npm run deploy
```

The script runs lint, format check, type check, tests and audit,
builds with `VITE_SITE_URL`, syncs `dist/` to S3 with
cache headers, invalidates CloudFront and runs smoke tests.
Set `SKIP_CHECKS=1` to skip the quality checks.

## Bucket policy

Template: `docs/deployment/IAM_POLICIES/s3-bucket-policy.template.json`

Replace before applying:

- `YOUR_BUCKET_NAME`: S3 bucket name.
- `YOUR_AWS_ACCOUNT_ID`: 12-digit AWS account ID.
- `YOUR_DISTRIBUTION_ID`: CloudFront distribution ID.

In practice, the CloudFront console wizard generates this
policy automatically when OAC is enabled.
