import { defineConfig, devices } from '@playwright/test';

const isCI = Boolean(process.env.CI);

export default defineConfig({
  testDir: './e2e',

  fullyParallel: true,

  forbidOnly: isCI,

  retries: isCI ? 2 : 0,

  workers: isCI ? 2 : undefined,

  reporter: [
    ['list'],
    [
      'html',
      {
        outputFolder: 'playwright-report',
        open: 'never',
      },
    ],
  ],

  timeout: 30_000,

  expect: {
    timeout: 8_000,
  },

  use: {
    baseURL: 'http://127.0.0.1:4173',

    trace: 'retain-on-failure',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    actionTimeout: 10_000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'mobile-chromium',
      use: { ...devices['Pixel 7'] },
    },
    {
      name: 'mobile-webkit',
      use: {
        ...devices['iPhone 14'],

        // Viewport móvil expresado en píxeles CSS.
        viewport: {
          width: 390,
          height: 844,
        },

        // Evita la discrepancia de escala en WebKit.
        deviceScaleFactor: 1,

        // Conserva el ancho móvil para probar media queries.
        // No necesitamos activar la emulación física de iPhone
        // para comprobar el diseño responsive.
        isMobile: false,
        hasTouch: true,
      },
    },
  ],

  webServer: {
    command: 'npm run dev -- --host 127.0.0.1 --port 4173',

    url: 'http://127.0.0.1:4173',

    reuseExistingServer: !isCI,

    timeout: 120_000,

    stdout: 'ignore',

    stderr: 'pipe',
  },
});
