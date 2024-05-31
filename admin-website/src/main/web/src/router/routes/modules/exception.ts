import { RoleType } from '@/types/roleType';

export default {
  path: 'exception',
  name: 'Exception',
  id: 'Exception',
  label: 'Exception',
  component: () => import('@/views/exception/index.vue'),
  meta: {
    locale: 'menu.exception',
    requiresAuth: true,
    order: 6,
    roles: [RoleType.admin, RoleType.user],
  },
  children: [
    {
      path: '403',
      name: '403',
      id: '403',
      label: '403',
      component: () => import('@/views/exception/403/index.vue'),
      meta: {
        locale: 'menu.exception.403',
        requiresAuth: true,
        roles: [RoleType.admin],
      },
    },
    {
      path: '404',
      name: '404',
      id: '404',
      label: '404',
      component: () => import('@/views/exception/404/index.vue'),
      meta: {
        locale: 'menu.exception.404',
        requiresAuth: true,
        roles: [RoleType.admin, RoleType.user],
      },
    },
    {
      path: '500',
      name: '500',
      id: '500',
      label: '500',
      component: () => import('@/views/exception/500/index.vue'),
      meta: {
        locale: 'menu.exception.500',
        requiresAuth: true,
        roles: [RoleType.admin, RoleType.user],
      },
    },
  ],
};
