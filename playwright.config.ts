import { defineConfig } from "@playwright/test";

const baseURL = `http://127.0.0.1:3100${process.env.NEXT_PUBLIC_BASE_PATH || ""}/`;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: false,
  workers: 1,
  reporter: "list",
  use: {
    baseURL,
    channel: process.platform === "win32" ? "chrome" : undefined,
    trace: "retain-on-failure",
    reducedMotion: "reduce",
  },
  webServer: {
    command: "node scripts/serve-export.mjs",
    url: baseURL,
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
