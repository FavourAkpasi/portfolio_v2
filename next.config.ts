import type {NextConfig} from 'next';
import {withSentryConfig} from '@sentry/nextjs';

const nextConfig: NextConfig = {/* config options here */};

export default withSentryConfig(nextConfig, {
  // Org/project + auth token drive source-map upload. Set all three in Vercel
  // (and locally in .env for a production build). If any are missing the upload
  // is skipped and the build still succeeds — you just get minified stack
  // traces until they're configured.
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,

  // Upload a wider set of client source maps for readable stack traces.
  widenClientFileUpload: true,

  // Proxy Sentry requests through this route so ad blockers don't drop errors
  // before they reach Sentry.
  tunnelRoute: '/monitoring',

  // Quiet the plugin locally; keep its logs in CI.
  silent: !process.env.CI,
});
