import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/Basiclayout',
      routes: [{ path: '/', component: '@/pages/index' }],
    },
  ],
  fastRefresh: {},
});
