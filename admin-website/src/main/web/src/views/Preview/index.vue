<template>
  <div class="preview-main">
    <div class="preview-card">
      <tiny-layout>
        <tiny-row :flex="true">
          <tiny-col :span="6">
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
                  <span class="right">/ s</span>
                </div>
              </div>
            </div>
          </tiny-col>
          <tiny-col :span="6">
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
                  <span class="right">/ s</span>
                </div>
              </div>
            </div>
          </tiny-col>
        </tiny-row>
        <tiny-row :flex="true" justify="center"></tiny-row>
      </tiny-layout>
    </div>
    <div class="preview-table">
      <tiny-grid ref="grid" :fetch-data="fetchDataOption" :pager="pagerConfig">
        <tiny-grid-column
          field="id"
          :title="$t('home.roundtable.index')"
          width="160"
        ></tiny-grid-column>
        <tiny-grid-column
          field="space"
          :title="$t('home.roundtable.space')"
          width="180"
        ></tiny-grid-column>
        <tiny-grid-column
          field="pv"
          :title="$t('home.roundtable.pv')"
          width="180"
        ></tiny-grid-column>
        <tiny-grid-column
          field="play"
          :title="$t('home.roundtable.play')"
          width="200"
        ></tiny-grid-column>
      </tiny-grid>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  import { useI18n } from 'vue-i18n';
  import {
    Pager,
    Grid as TinyGrid,
    GridColumn as TinyGridColumn,
    Layout as TinyLayout,
    Row as TinyRow,
    Col as TinyCol,
  } from '@opentiny/vue';

  const { t } = useI18n();

  const tableData = [
    {
      id: '1',
      space: '4G',
      pv: '1767(97.77%)',
      play: '0.44s',
    },
    {
      id: '2',
      space: '2G',
      pv: '22(1.77%)',
      play: '0.43s',
    },
    {
      id: '3',
      space: t('home.round.unknow'),
      pv: '32(1.77%)',
      play: '0.44s',
    },
    {
      id: '4',
      space: t('home.round.unknow'),
      pv: '32(1.77%)',
      play: '0.44s',
    },
  ];

  const pagerConfig = reactive({
    component: Pager,
    attrs: {
      currentPage: 1,
      pageSize: 5,
      pageSizes: [5, 10],
      total: 0,
      layout: 'total, prev, pager, next, jumper, sizes',
    },
  });

  // 请求数据接口方法
  async function fetchData(
    params = {
      pageIndex: 1,
      pageSize: 10,
    }
  ) {
    const total = tableData.length;
    return {
      result: tableData,
      page: { total },
    };
  }

  const fetchDataOption = reactive({
    api: ({ page }: any) => {
      const { currentPage, pageSize } = page;

      return fetchData({
        pageIndex: currentPage,
        pageSize,
      });
    },
  });
</script>

<style scoped lang="less">
  .preview-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 471px;
    padding: 0;

    .preview-table {
      margin-top: 1%;
    }

    :deep(.tiny-grid .tiny-pager, .tiny-grid + .tiny-pager) {
      padding-left: 14px;
    }

    .col {
      display: flex;
      justify-content: space-around;
      width: 350px;
      height: 150px;
      background: #fff;
      border-radius: 6px;
      box-shadow: 0 3px 20px 0 rgb(64 98 225 / 20%);
    }

    .col:hover {
      box-shadow: 0 3px 20px 0 rgb(64 98 225 / 55%);
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
</style>

<style lang="less" scoped>
  @media (max-width: @screen-xs) {
    .main {
      overflow-x: auto;
    }

    .col {
      width: 300px;
    }
  }
</style>
