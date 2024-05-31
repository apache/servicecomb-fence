<template>
  <div class="card">
    <div v-for="(item, index) in InfoNum" :key="index" class="col">
      <div>
        <img :src="item.img" />
        <span>{{ $t(item.text) }}</span>
      </div>
      <div>
        <span :class="item.class">{{ item.value }}</span>
        <span>&nbsp;/ {{ $t('work.index.Numbers') }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import info1 from '@/assets/images/info1.png';
  import info2 from '@/assets/images/info2.png';
  import info3 from '@/assets/images/info3.png';
  import info4 from '@/assets/images/info4.png';

  const InfoNum = [
    {
      value: 1,
      class: 'plan-pass',
      text: 'userInfo.status.optionA',
      img: info1,
    },
    {
      value: 1,
      class: 'plan-overdue',
      text: 'userInfo.status.optionB',
      img: info2,
    },
    {
      value: 4,
      class: 'plan-limit',
      text: 'userInfo.status.optionC',
      img: info3,
    },
    {
      value: 4,
      class: 'plan-fail',
      text: 'userInfo.status.optionD',
      img: info4,
    },
  ];
</script>

<style scoped lang="less">
  .card {
    display: flex;
    justify-content: space-between;
    margin: 16px 0;
    text-align: center;

    .col {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 360px;
      height: 138px;
      background: #eff1f7;
      border-radius: 10px;
      opacity: 1.6;
    }

    .col:hover {
      box-shadow: 0 3px 10px 0 rgb(64 98 225 / 45%);
    }

    .col div:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right: 20px;

      span {
        height: 14px;
        color: #5c5f66;
        font-weight: 700;
        font-size: 18px;
        line-height: 14px;
        text-align: left;
      }

      img {
        width: 36px;
        height: 36px;
        margin-right: 10px;
      }
    }

    .font {
      font-weight: 600;
      font-size: 48px;
      font-family: PingFang SC, PingFang SC-PingFang SC;
      line-height: 36px;
      text-align: left;
    }

    .plan-pass {
      color: rgba(82, 196, 26, 0.8);
      .font();
    }

    .plan-fail {
      color: rgb(208, 211, 33);
      .font();
    }

    .plan-overdue {
      color: rgb(93, 166, 168);
      .font();
    }

    .plan-limit {
      color: rgb(255, 8, 0);
      .font();
    }
  }
  @media (max-width: 1800px) {
    .card .col {
      width: 260px;
    }
  }
</style>
