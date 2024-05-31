<template>
  <tiny-layout>
    <tiny-row :flex="true" justify="center">
      <tiny-col>
        <div class="col">
          <div class="title">
            <img src="@/assets/images/plan-1.png" />
            <span>{{ $t('work.index.plans') }}</span>
          </div>
          <div>
            <span class="plan-pass">1890</span>
            <span class="num">&nbsp;/ {{ $t('work.index.Numbers') }}</span>
          </div>
        </div>
      </tiny-col>
      <tiny-col>
        <div class="col">
          <div class="title">
            <img src="@/assets/images/plan-2.png" />
            <span>{{ $t('work.index.Unfinished') }}</span>
          </div>
          <div>
            <span class="plan-pass">23</span>
            <span class="num">&nbsp;/ {{ $t('work.index.Numbers') }}</span>
          </div>
        </div>
      </tiny-col>
      <tiny-col>
        <div class="col">
          <div class="title">
            <img src="@/assets/images/plan-3.png" />
            <span>{{ $t('work.index.beOverdue') }}</span>
          </div>
          <div>
            <span class="plan-fail">113</span>
            <span class="num">&nbsp;/ {{ $t('work.index.Numbers') }}</span>
          </div>
        </div>
      </tiny-col>
      <tiny-col>
        <div class="col">
          <div class="title">
            <img src="@/assets/images/plan-4.png" />
            <span>{{ $t('work.index.Overdue') }}</span>
          </div>
          <div>
            <span class="plan-pass">56</span>
            <span class="num">&nbsp;/ {{ $t('work.index.Numbers') }}</span>
          </div>
        </div>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script lang="ts" setup>
  import {
    Layout as TinyLayout,
    Row as TinyRow,
    Col as TinyCol,
  } from '@opentiny/vue';
</script>

<style scoped lang="less">
  .col {
    height: 150px;
    text-align: center;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  }

  .col:hover {
    box-shadow: 0 3px 10px 0 rgb(64 98 225 / 45%);
  }

  .font {
    font-weight: 600;
    font-size: 48px;
    line-height: 36px;
    text-align: left;
  }

  .col > div {
    padding: 15px 0;
    color: #252b3a;
    font-weight: normal;
    font-size: 18px;
    line-height: 14px;
    text-align: center;

    .plan-pass {
      color: #f05d0a;
      .font();
    }

    .plan-fail {
      color: #252b3a;
      .font();
    }

    .num {
      color: #adb0b8;
      font-size: 14px;
      line-height: 14px;
    }
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      padding-right: 10px;
    }
  }

  // responsive
  @media (max-width: @screen-md) {
    .col > div {
      font-size: 10px;

      .plan-pass,
      .plan-fail {
        font-size: 24px;
      }
    }
  }
</style>
