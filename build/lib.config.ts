import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
    plugins: [dts(), vue(), vueJsx()],
    build: {
        outDir: 'dist',
        minify: 'terser',
        terserOptions: {
            compress: {
                //生产环境时移除console
                drop_console: false,
                drop_debugger: false,
            },
        },
        lib: {
            entry: resolve(__dirname, '../packages/index.ts'),
            name: 'text-overflow-title'
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
