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
      path: 'list',
      name: 'List',
      id: 'List',
      label: 'List',
      component: () => import('@/views/board/list/index.vue'),
      meta: {
        locale: 'menu.board.list',
        requiresAuth: true,
        roles: [RoleType.admin],
      },
    }
  ],
};
