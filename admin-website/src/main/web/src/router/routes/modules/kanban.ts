import { RoleType } from '@/types/roleType';

export default {
  path: 'board',
  name: 'Board',
  id: 'Board',
  label: 'Board',
  component: () => import('@/views/board/index.vue'),
  meta: {
    locale: 'menu.board',
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
      component: () => import('@/views/board/home/index.vue'),
      meta: {
        locale: 'menu.board.home',
        requiresAuth: true,
        roles: [RoleType.admin],
      },
    },
    {
      path: 'work',
      name: 'Work',
      id: 'Work',
      label: 'Work',
      component: () => import('@/views/board/work/index.vue'),
      meta: {
        locale: 'menu.board.work',
        requiresAuth: true,
        roles: [RoleType.admin],
      },
    },
  ],
};
