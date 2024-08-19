import { RoleType } from '@/types/roleType';

export default {
  path: 'management',
  name: 'Management',
  id: 'Management',
  label: 'Management',
  component: () => import('@/views/management/index.vue'),
  meta: {
    locale: 'menu.management',
    requiresAuth: true,
    order: 1,
    roles: [RoleType.admin],
  },
  children: [
    {
      path: 'home',
      name: 'Home',
      id: 'Home',
      label: 'Home',
      component: () => import('@/views/management/home/index.vue'),
      meta: {
        locale: 'menu.management.home',
        requiresAuth: true,
        roles: [RoleType.admin],
      },
    },
  ],
};
