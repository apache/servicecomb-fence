import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';
import { successResponseWrap } from '@/utils/setup-mock';

const initBase = Mock.mock({
  Project: [
    'baseForm.form.label.projectone',
    'baseForm.form.label.projecttwo',
    'baseForm.form.label.projectthree',
  ],
  rank: [
    {
      value: '1',
      label: '01',
    },
    {
      value: '2',
      label: '02',
    },
    {
      value: '3',
      label: '03',
    },
    {
      value: '4',
      label: '04',
    },
    {
      value: '5',
      label: '05',
    },
  ],
  person: [
    {
      value: 'local',
      label: 'baseForm.form.label.personone',
    },
    {
      value: 'noemployees',
      label: 'baseForm.form.label.persontwo',
    },
    {
      value: 'chineseemployees',
      label: 'baseForm.form.label.personthree',
    },
  ],
  frequency: [
    'baseForm.form.label.frequencyone',
    'baseForm.form.label.frequencytwo',
    'baseForm.form.label.frequencythree',
    'baseForm.form.label.frequencyfour',
  ],
});

const initStep = Mock.mock({
  position: [
    {
      value: '1',
      label: 'position1',
    },
    {
      value: '2',
      label: 'position2',
    },
    {
      value: '3',
      label: 'position3',
    },
    {
      value: '4',
      label: 'position4',
    },
  ],
  HR: [
    {
      value: '1',
      label: 'test01',
    },
    {
      value: '2',
      label: 'test01',
    },
    {
      value: '3',
      label: 'test03',
    },
  ],
  mentor: ['Teacher1', 'Teacher2', 'Teacher3', 'Teacher4'],
  director: ['Director1', 'Director2', 'Director3', 'Director4'],
});

export default [
  // init-base
  {
    url: '/api/base/getdata',
    method: 'get',
    response: () => {
      return successResponseWrap(initBase);
    },
  },

  // init-step
  {
    url: '/api/step/getdata',
    method: 'get',
    response: () => {
      return successResponseWrap(initStep);
    },
  },

  // submit
  {
    url: '/api/channel-form/submit',
    method: 'post',
    response: () => {
      return successResponseWrap('ok');
    },
  },
] as MockMethod[];
