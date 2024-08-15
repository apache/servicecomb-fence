import { RoleType } from '@/types/roleType';

export default {
  path: 'cloud',
  name: 'Cloud',
  id: 'Cloud',
  label: 'Cloud',
  component: () => import('@/views/cloud/index.vue'),
  meta: {
    locale: 'menu.cloud',
    requiresAuth: true,
    order: 8,
    roles: [],
  },
  children: [
    {
      path: 'Problems',
      name: 'Problems',
      id: 'Problems',
      label: 'Problems',
      component: () => import('@/views/cloud/problems/index.vue'),
      meta: {
        locale: 'menu.cloud.locate.problems',
        requiresAuth: true,
        roles: [],
      },
    },
  ],
};
