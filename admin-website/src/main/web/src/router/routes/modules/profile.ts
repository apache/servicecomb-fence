import { RoleType } from '@/types/roleType';

export default {
  path: 'profile',
  name: 'Profile',
  id: 'Profile',
  label: 'Profile',
  component: () => import('@/views/profile/index.vue'),
  meta: {
    locale: 'menu.profile',
    requiresAuth: true,
    order: 4,
    roles: [RoleType.admin],
  },
  children: [
    {
      path: 'detail',
      name: 'Detail',
      id: 'Detail',
      label: 'Detail',
      component: () => import('@/views/profile/detail/index.vue'),
      meta: {
        locale: 'menu.profile.detail',
        requiresAuth: true,
        roles: [RoleType.admin],
      },
    },
  ],
};
