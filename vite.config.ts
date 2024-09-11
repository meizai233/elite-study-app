import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import Unocss from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni({
      vueOptions: {
        reactivityTransform: true,
      },
    }),
    Unocss(),
    AutoImport({
      dts: "src/typings/auto-imports.d.ts", // 生成类型声明文件，自动引入相关插件
      imports: ["vue", "uni-app", "pinia"], // 自动引入哪些内容
      dirs: ["src/composables"], // 自动导入composables目录下的模块
    }),
  ],
});
