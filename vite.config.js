import { defineConfig } from 'vite';

export default defineConfig({
    base: '/e-cell-exective/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                login: 'login.html',
                signup: 'signup.html',
                dashboard: 'dashboard.html'
            }
        }
    }
});
