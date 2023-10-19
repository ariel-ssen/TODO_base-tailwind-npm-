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
        changeOrigin: true, // 요청 origin을 변경하여 CORS 문제를 해결
        //changeOrigin: false로 설정하면 원격 서버에서 CORS 정책을 관리하고 프록시 서버를 믿을 수 있는 경우에 사용
        rewrite: (path) => path.replace(/^\/api/, ''), // 요청 경로를 재작성하여 '/api' 프리픽스를 제거
      },
    },
  },
});
