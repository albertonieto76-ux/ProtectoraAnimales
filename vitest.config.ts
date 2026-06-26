import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  test: {
    include: [
      'src/**/*.{test,spec}.ts',
      'tests/**/*.{test,spec}.ts'
    ],
    environment: 'node',
    alias: {
      '#domain': path.resolve(__dirname, './src/domain'),
      '#application': path.resolve(__dirname, './src/application'),
      '#infrastructure': path.resolve(__dirname, './src/infrastructure'),
      '#shared': path.resolve(__dirname, './src/shared'),
      '#config': path.resolve(__dirname, './src/config'),
    },
  },
});
