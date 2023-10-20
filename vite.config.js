import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/

// export default defineConfig({
//   plugins: [vue()],
// })

export default defineConfig({
  plugins: [vue()], // Vue 3 플러그인을 사용하도록 설정

  server: {
    proxy: {
      '/api': {
        target:
          'https://port-0-todo-api-f02w2almhfuepj.sel5.cloudtype.app/api/todos/652e59d49a6c1bb78e950f93',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // 요청 경로를 재작성하여 '/api' 프리픽스를 제거
      },
    },
  },
});
