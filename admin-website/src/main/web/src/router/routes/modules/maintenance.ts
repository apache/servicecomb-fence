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
      path: 'problems',
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
    {
      path: 'restApi',
      name: 'RestApi',
      id: 'RestApi',
      label: 'RestApi',
      component: () => import('@/views/maintenance/restApi/index.vue'),
      meta: {
        locale: 'menu.maintenance.restapi',
        requiresAuth: true,
        roles: [],
      },
    },
  ],
};
