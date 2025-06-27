import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const isElectron = env.VITE_IS_ELECTRON === 'true';
  const base = isElectron ? env.VITE_BASE_ELECTRON : env.VITE_BASE_WEB;

  return {
    base,
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    define:{
      CESIUM_BASE_URL: JSON.stringify(`${base}cesium/`),
    },
  };
});
