import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages';
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: resolve(__dirname, 'env'),
  plugins: [
    vue(),
    AutoImport({//自动导入 Vite、Webpack、Rollup 和 esbuild 的 API
      imports: ['vue', 'vue-router',],
    }),
    Pages({
      dirs: [//全局匹配pages文件，不可单独配置页面
        {dir: '**/pages', baseRoute: ''},
        {dir: '**/views', baseRoute: ''}
      ],
      exclude: [//过滤文件
        '**/components/*.vue'
      ],
    }),
    Components({
      dirs: ['**/components/'],//配置组件路径
      resolvers: [ElementPlusResolver()],//内置解析器，解析流行的ui框架，如AntDesignVue，ElementPlus，ElementUI，Vant，ViewUI等等
    })
  ],
  base: './',
  publicPath: './',
  server: {
    // open: true,//是否自动打开浏览器
    host: '0.0.0.0',
    port: 8080,
  },
  build: {
    target: 'modules',//浏览器兼容性 modules|esnext
    rollupOptions: {
      input: {
        projectA: resolve(__dirname, 'src/projectA/index.html'),
        projectB: resolve(__dirname, 'src/projectB/index.html')
      },
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
      },
    }
  }
})
