<template>
  <div class="container-work">
    <Breadcrumb :items="['menu.board', 'menu.work']" />
    <div class="work-image">
      <img src="@/assets/images/woker.png" alt="403" class="user-image" />
    </div>
    <div class="content">
      <div class="left">
        <div class="card">
          <h3>{{ $t('work.index.learn') }}</h3>
          <div>
            <learnplan></learnplan>
          </div>
        </div>
        <div class="card">
          <div>
            <learncoach></learncoach>
          </div>
        </div>
        <div class="card">
          <h3>{{ $t('work.index.formalization') }}</h3>
          <div>
            <learnprobation></learnprobation>
          </div>
        </div>
        <div class="card">
          <div>
            <learnpracticed></learnpracticed>
          </div>
        </div>
        <div class="card">
          <div>
            <learntrain></learntrain>
          </div>
        </div>
      </div>
      <div class="right">
        <h3>{{ $t('work.index.Inquiry') }}</h3>
        <div class="card more">
          <dl v-for="item in Inquiry" :key="(item as any)">
            <dt>{{ $t(item.label) }}</dt>
            <dd>
              <a href="javascript:;">{{ $t(item.value) }}</a>
            </dd>
          </dl>
        </div>
        <h3>{{ $t('work.index.Home') }}</h3>
        <div class="card more">
          <dl v-for="item in Home" :key="(item as any)">
            <dt>{{ $t(item.label) }}</dt>
            <dd>
              <a href="javascript:;">{{ $t(item.value) }}</a>
            </dd>
          </dl>
        </div>
        <h3>{{ $t('work.index.Guide') }}</h3>
        <div class="card less">
          <dl>
            <dt>{{ $t('work.index.Operation') }}</dt>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import learnplan from './components/learn-plan.vue';
  import learncoach from './components/learn-coach.vue';
  import learnprobation from './components/learn-probation.vue';
  import learnpracticed from './components/learn-practiced.vue';
  import learntrain from './components/learn-traini.vue';

  const Inquiry = [
    { label: 'work.index.policy', value: 'work.index.Period' },
    { label: 'work.index.Hotline', value: 'work.index.service' },
    { label: 'work.index.Attendance', value: 'work.index.FAQs' },
    { label: 'work.index.Payroll', value: 'work.index.Tax' },
    { label: 'work.index.net', value: 'work.index.netonline' },
  ];

  const Home = [
    { label: 'work.index.Brave', value: 'work.index.Growth' },
    { label: 'work.index.Termbase', value: 'work.index.lingo' },
    { label: 'work.index.Library', value: 'work.index.domain' },
    { label: 'work.index.learning', value: 'work.index.platform' },
    { label: 'work.index.net', value: 'work.index.netonline' },
  ];
</script>

<style scoped lang="less">
  .container-work {
    width: 98%;
    height: inherit;
    margin: 0 auto;
    overflow: auto;
    background: #f6f8f9;

    .work-image {
      width: 99%;
      margin: 0 auto;

      img {
        width: 100%;
        min-height: 50px;
      }
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;

    .font {
      padding: 12px 8px;
      color: #575d6c;
      font-size: 16px;
      line-height: 14px;
    }

    .left {
      width: 80%;

      .card {
        display: flex;
        flex-direction: column;
        min-height: 150px;

        h3 {
          .font();
        }
      }
    }

    .right {
      width: 19%;
      padding-right: 10px;

      h3 {
        .font();
      }

      .more {
        min-height: 369px;
      }

      .less {
        min-height: 156px;
      }

      .card {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 20px;
        color: #010407;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);

        dl {
          dt {
            margin-top: 10px;
            margin-left: 10px;
            font-weight: bolder;
            font-size: 16px;
            font-family: PingFang SC, PingFang SC-PingFang SC;
            line-height: 15px;
            text-align: left;
          }

          dd {
            padding: 10px;

            a {
              color: #999;
              text-decoration: none;
            }
          }
        }
      }

      .card:hover {
        box-shadow: 0 3px 10px 0 rgb(64 98 225 / 45%);
      }
    }
  }

  .col > span {
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    text-align: center;
  }

  .col > span:first-child {
    color: #010407;
    font-weight: 500;
  }

  .col > span:last-child {
    font-weight: 900;
    font-size: large;
  }
</style>
