<template>
  <div class="main">
    <tiny-layout>
      <tiny-row :flex="true" justify="center">
        <tiny-col :span="4">
          <div class="col">
            <div class="img">
              <img src="@/assets/images/home-main1.png" class="image" />
            </div>
            <div class="num">
              <div class="up">
                <span class="left">{{ $t('home.main.one') }}</span>
                <span id="up" class="right">
                  {{ $t('home.main.day') }}
                  <img src="@/assets/images/home-up.png" class="image" />
                  <span>0.88%</span>
                </span>
              </div>
              <div class="down">
                <span class="left">3.23</span>
                <span class="right">&nbsp;/ S</span>
              </div>
            </div>
          </div>
        </tiny-col>
        <tiny-col :span="4">
          <div class="col">
            <div class="img">
              <img src="@/assets/images/home-main2.png" class="image" />
            </div>
            <div class="num">
              <div class="up">
                <span class="left">DOM Ready</span>
                <span id="down" class="right">
                  {{ $t('home.main.day') }}
                  <img src="@/assets/images/home-down.png" class="image" />
                  <span>0.88%</span>
                </span>
              </div>
              <div class="down">
                <span class="left">1.56</span>
                <span class="right">&nbsp;/ S</span>
              </div>
            </div>
          </div>
        </tiny-col>
        <tiny-col :span="4">
          <div class="col">
            <div class="img">
              <img src="@/assets/images/home-mainup.png" class="image" />
            </div>
            <div class="num">
              <div class="up">
                <span class="left">{{ $t('home.main.up') }}</span>
                <span id="up" class="right">
                  {{ $t('home.main.day') }}
                  <img src="@/assets/images/home-up.png" class="image" />
                  <span>0.88%</span>
                </span>
              </div>
              <div class="down">
                <span class="left">3.69</span>
                <span class="right">&nbsp;/ S</span>
              </div>
            </div>
          </div>
        </tiny-col>
        <tiny-col :span="4">
          <div class="col">
            <div class="img">
              <img src="@/assets/images/home-maindown.png" class="image" />
            </div>
            <div class="num">
              <div class="up">
                <span class="left">{{ $t('home.main.down') }}</span>
                <span id="down" class="right">
                  {{ $t('home.main.day') }}
                  <img src="@/assets/images/home-down.png" class="image" />
                  <span>0.88%</span>
                </span>
              </div>
              <div class="down">
                <span class="left">0.69</span>
                <span class="right">&nbsp;/ S</span>
              </div>
            </div>
          </div>
        </tiny-col>
      </tiny-row>
    </tiny-layout>
  </div>
</template>

<script lang="ts" setup>
  import {
    Layout as TinyLayout,
    Row as TinyRow,
    Col as TinyCol,
  } from '@opentiny/vue';
</script>

<style scoped lang="less">
  .main {
    padding: 0;

    .col {
      display: flex;
      justify-content: space-around;
      min-width: 396px;
      height: 150px;
      background: #fff;
      border-radius: 6px;
      box-shadow: 0 3px 10px 0 rgb(64 98 225 / 20%);
    }

    .col:hover {
      box-shadow: 0 3px 10px 0 rgb(64 98 225 / 45%);
    }

    .img {
      display: flex;
      align-items: center;
    }

    .num {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      #up {
        span {
          color: #f7961e;
        }
      }

      #down {
        span {
          color: #3eb21f;
        }
      }

      .up {
        .left {
          margin-left: -15%;
          color: #35383e;
          font-weight: 400;
          font-size: 18px;
          letter-spacing: 0.45px;
          text-align: left;
        }

        .right {
          margin-left: 15%;
          color: #777;
          font-size: 16px;
          letter-spacing: 0.4px;
          text-align: left;
        }
      }

      .down {
        margin-left: -30px;

        .left {
          width: 99px;
          height: 36px;
          color: #242424;
          font-weight: 700;
          font-size: 36px;
          letter-spacing: 1.2px;
          text-align: left;
        }

        .right {
          width: 8px;
          height: 14px;
          color: #777;
          font-weight: 400;
          font-size: 16px;
          letter-spacing: 0.4px;
          text-align: left;
        }
      }
    }
  }

  :deep(.tiny-col) {
    padding: 0 11.5px;
  }
</style>

<style lang="less" scoped>
  @media (max-width: @screen-xg) {
    .main {
      display: none;
    }

    .col {
      width: 300px;
    }
  }
</style>
