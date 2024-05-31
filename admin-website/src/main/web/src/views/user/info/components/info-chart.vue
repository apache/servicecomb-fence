<template>
  <div class="chart">
    <div
      v-for="item in chartData"
      :key="item.title"
      class="list"
      :value="item.value"
    >
      <h4>{{ $t(item.title) }}</h4>
      <div v-if="item.value === 1">
        <div
          v-for="itemson in item.list"
          :key="itemson.sort"
          :value="itemson.type"
        >
          <div v-if="itemson.len === 1" class="cardold" :class="itemson.pid">
            <div class="cardtip">
              <span class="cardType">{{ $t(itemson.type) }}</span>
              <img v-if="itemson.pid === 'A'" :src="tip1" />
              <img v-if="itemson.pid === 'B'" :src="tip2" />
              <img v-if="itemson.pid === 'C'" :src="tip3" />
              <img v-if="itemson.pid === 'D'" :src="tip4" />
              <span class="cardStatus">{{ $t(itemson.status) }}</span>
            </div>
          </div>
          <div
            v-if="itemson.len !== 1"
            class="cardnew"
            :class="itemson.pid"
            :style="{ width: `${itemson.len * 199}px` }"
          >
            <div class="cardtip">
              <span class="cardType">{{ $t(itemson.type) }}</span>
              <img v-if="itemson.pid === 'A'" :src="tip1" />
              <img v-if="itemson.pid === 'B'" :src="tip2" />
              <img v-if="itemson.pid === 'C'" :src="tip3" />
              <img v-if="itemson.pid === 'D'" :src="tip4" />
              <span class="cardStatus">{{ $t(itemson.status) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue';
  import tip1 from '@/assets/images/tip1.png';
  import tip2 from '@/assets/images/tip2.png';
  import tip3 from '@/assets/images/tip3.png';
  import tip4 from '@/assets/images/tip4.png';

  const props = defineProps({
    // eslint-disable-next-line vue/require-prop-types
    chartData: [] as any,
  });
</script>

<style scoped lang="less">
  .chart {
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow-x: auto;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);

    .list {
      position: relative;
      display: inline-block;
      flex-shrink: 0;
      box-sizing: border-box;
      width: 180px;
      border-right: -0.1px solid #d9d9d9;
      border-left: 1px solid #d9d9d9;

      h4 {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        margin: 0;
        padding: 0;
        font-size: 14px;
        background: #eff1f7;
      }
    }

    .cardold {
      display: flex;
      justify-content: start;
      box-sizing: border-box;
      height: 45px;
      margin: 13px 0;
      padding: 15px 15px;
      background-color: #fff;
      border-radius: 0 6px 6px 0;

      img {
        width: 14px;
        height: 14px;
      }
    }

    .cardnew {
      position: relative;
      z-index: 10;
      display: flex;
      justify-content: start;
      box-sizing: border-box;
      height: 45px;
      margin: 13px 0;
      padding: 15px 15px;
      background-color: #fff;
      border-radius: 0 6px 6px 0;

      img {
        width: 14px;
        height: 14px;
      }
    }

    .cardtip {
      display: flex;
      align-items: center;
      justify-content: start;
      width: 140px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .cardtip span:first-child {
      padding-right: 5px;
    }

    .cardtip span:last-child {
      padding-left: 5px;
    }

    .cardContent {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .cardType {
      .cardContent();

      height: 20px;
      color: #202e54;
      font-weight: 800;
      font-size: 14px;
      line-height: 20px;
      text-align: left;
    }

    .cardStatus {
      .cardContent();

      height: 17px;
      font-weight: normal;
      font-size: 12px;
      line-height: 17px;
    }

    .A {
      background: rgba(123, 208, 108, 0.1);
      border-left: 4px solid #7bd06c;

      .cardStatus {
        color: #7bd06c;
      }
    }

    .B {
      background: rgba(47, 91, 234, 0.1);
      border-left: 4px solid #5e7ce0;

      .cardStatus {
        color: #5e7ce0;
      }
    }

    .C {
      background: rgba(227, 83, 73, 0.1);
      border-left: 4px solid #e35349;

      .cardStatus {
        color: #e35349;
      }
    }

    .D {
      background: rgba(250, 173, 20, 0.1);
      border-left: 4px solid #f0960a;

      .cardStatus {
        color: #f0960a;
      }
    }
  }
</style>
