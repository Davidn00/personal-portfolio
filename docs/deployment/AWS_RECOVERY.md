# AWS Deployment Recovery

## Failed deployment

The script stops at the first error (`set -e`). If checks or the
build fail, nothing is uploaded and production is unchanged.

## Rollback

1. Revert the faulty commit: `git revert COMMIT_HASH`
2. Redeploy: `npm run deploy`

## CloudFront 403

- Verify OAC is attached to the origin.
- Verify the bucket policy and the distribution ARN.
- Verify the object exists in S3.

## Stale content

Run an invalidation for `/*`:

```bash
MSYS_NO_PATHCONV=1 aws cloudfront create-invalidation \
  --distribution-id DISTRIBUTION_ID --paths "/*"
```

## Expired session

Run `aws login` again.

## Cost control

- Keep an AWS Budgets alert.
- Remove unused distributions and buckets.
- Never delete the production bucket before the distribution
  is removed or detached.
