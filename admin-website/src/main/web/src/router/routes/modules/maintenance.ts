import { RoleType } from '@/types/roleType';

export default {
  path: 'maintenance',
  name: 'Maintenance',
  id: 'Maintenance',
  label: 'Maintenance',
  component: () => import('@/views/maintenance/index.vue'),
  meta: {
    locale: 'menu.maintenance',
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
      component: () => import('@/views/maintenance/problems/index.vue'),
      meta: {
        locale: 'menu.maintenance.locate.problems',
        requiresAuth: true,
        roles: [],
      },
    },
  ],
};
