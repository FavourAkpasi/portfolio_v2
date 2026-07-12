import {defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // Skip the app's Tailwind PostCSS pipeline during tests — CSS/CSS-module
  // imports (e.g. time-portal.module.css) resolve without processing styles.
  css: {postcss: {plugins: []}},
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test/integration/setup.ts'],
    include: ['**/__tests__/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      // `json-summary` + `json` are required by the PR coverage-report action;
      // `text` prints the table locally. `reportOnFailure` still emits a report
      // when a test fails so the PR comment is posted either way.
      reporter: ['text', 'json', 'json-summary'],
      reportOnFailure: true,
      include: ['components/**', 'context/**', 'hooks/**', 'lib/**'],
    },
  },
});
