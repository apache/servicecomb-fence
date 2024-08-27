import { RoleType } from '@/types/roleType';
export default {
  path: 'examples',
  name: 'Examples',
  id: 'Examples',
  label: 'Examples',
  component: () => import('@/views/examples/index.vue'),
  meta: {
    locale: 'menu.examples',
    requiresAuth: true,
    order: 8,
    roles: [],
  },
  children: [
    {
      path: 'testMethodAuth',
      name: 'TestMethodAuth',
      id: 'TestMethodAuth',
      label: 'TestMethodAuth',
      component: () => import('@/views/examples/testMethodAuth/index.vue'),
      meta: {
        locale: 'menu.examples.testMethodAuth',
        requiresAuth: true,
        roles: [],
      },
    },
  ],
};
