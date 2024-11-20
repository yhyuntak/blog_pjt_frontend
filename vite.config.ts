import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js', 'src/**/*.jsx'],
      exclude: ['node_modules', 'dist'],
      failOnError: true, // 오류 발생 시 빌드 실패
      failOnWarning: false, // 경고는 무시
      cache: true, // ESLint 캐시 사용
      fix: true, // 자동 수정 활성화
    }),
  ],
  server: {
    hmr: true,
    port: 3000, // 개발 서버 포트 설정
    open: true,
    // localhost:3000/api/users 로 하는 요청을 http:/127.0.0.1:8080/users로 대체해서 서버로 요청을 보냄.
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        rewrite: (path: string) => {
          return path.replace(/^\/api/, '');
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // todo : build 관련 옵션을 나중에 수정해야함.
  // build: {
  // }
});
