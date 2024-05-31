<template>
  <div class="card">
    <div v-for="(item, index) in InfoNum" :key="index" class="col">
      <img :src="item.img" />
      <span>{{ $t(item.text) }}/{{ item.value }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import tip1 from '@/assets/images/tip1.png';
  import tip2 from '@/assets/images/tip2.png';
  import tip3 from '@/assets/images/tip3.png';
  import tip4 from '@/assets/images/tip4.png';

  const InfoNum = [
    {
      value: 5,
      class: 'plan-pass',
      text: 'userInfo.status.optionA',
      img: tip1,
    },
    {
      value: 2,
      class: 'plan-overdue',
      text: 'userInfo.status.optionB',
      img: tip2,
    },
    {
      value: 3,
      class: 'plan-limit',
      text: 'userInfo.status.optionC',
      img: tip3,
    },
    {
      value: 3,
      class: 'plan-fail',
      text: 'userInfo.status.optionD',
      img: tip4,
    },
  ];
</script>

<style scoped lang="less">
  .card {
    display: flex;
    justify-content: flex-start;
    padding: 24px 0;
    text-align: center;

    .col {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 130px;
      height: 36px;
      margin-right: 20px;
      border-radius: 18px;

      span {
        overflow: hidden;
        font-size: 14px;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      img {
        width: 14px;
        height: 14px;
        margin-right: 5px;
      }
    }
  }

  .card div:first-child {
    background: rgba(123, 208, 108, 0.1);
  }

  .card div:nth-child(2) {
    background: rgba(47, 91, 234, 0.1);
  }

  .card div:nth-child(3) {
    background: rgba(227, 83, 73, 0.1);
  }

  .card div:last-child {
    background: rgba(250, 173, 20, 0.1);
  }
</style>
