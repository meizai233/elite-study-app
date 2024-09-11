import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni({
      vueOptions: {
        reactivityTransform: true,
      },
    }),
    AutoImport({
      dts: 'src/typings/auto-imports.d.ts',
      imports: ['vue', 'uni-app', 'pinia'],
      dirs: ['src/composables'],
    }),
  ],
});

