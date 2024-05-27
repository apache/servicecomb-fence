<template>
  <div class="navbar">
    <ul class="right-side">
      <li class="navbar-user">
        <tiny-user-head type="icon" round min>
          <div class="user-image">
            <img src="@/assets/images/avatar.png" alt="user" />
          </div>
        </tiny-user-head>
        <div class="trigger-user">
          <li
            v-for="(item, index) in userlist"
            :key="index"
            :value="item.label"
            @click="switchUser(item.value)"
          >
            <iconCheckOut v-if="item.value === 1"></iconCheckOut>
            用户退出 
          </li>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  import { UserHead as TinyUserHead, Modal } from '@opentiny/vue';
  import {
    IconCheckOut,
  } from '@opentiny/vue-icon';
  import useUser from '@/hooks/user';

  const iconCheckOut = IconCheckOut();

  const { logout } = useUser();


  // 用户设置
  const userlist = [
    { label: 'messageBox.logout', value: 1 },
  ];


  const switchUser = (e: number) => {
    switch (e) {
      case 1:
        logout();
        break;
      
      default:
      // eslint-disable-next-line no-console
    }
  };

  // 点击图标跳转首页
  const jumpUrl = () => {
    window.location.href = `${window.location.protocol}//${window.location.host}`;
  };
</script>

<style scoped lang="less">
  .navbar {
    display: flex;
    justify-content: space-between;
    height: 100%;
    background-color: #fff;
    border-bottom: 1px solid var(--color-border);
  }

  #navbar-search {
    width: 159px;
    height: 30px;
    padding: 14px;
    background-color: #eff1f7;
    background-position: 130px 8px;
    border: none;
    border-radius: 16px;
    outline: none;
  }

  .input-icon {
    background: url('@/assets/images/search.png') no-repeat scroll right center
      transparent;
  }

  .divider {
    width: 1px;
    height: 18px;
    margin: 0 2px;
    margin-top: 1px;
    background: #dfe1e6;
  }

  .left-side {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    padding-left: 10px;
    cursor: pointer;

    .vue-icon {
      width: 24px;
      height: 24px;
      margin-left: 30px;
    }

    h5 {
      margin: 0 30px 0 12px;
      color: var(--ti-base-common-title-color);
      font-weight: 700;
      font-size: 22px;
      line-height: 32px;
      letter-spacing: 0.55px;
    }

    h4 {
      width: 135px;
      height: 22px;
      margin-left: 10px;
      color: var(--ti-base-common-title-color);
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      text-align: left;
    }
  }

  .right-side {
    display: flex;
    padding-right: 20px;
    list-style: none;

    :deep(.locale-select) {
      border-radius: 20px;
    }

    li {
      display: flex;
      align-items: center;
      padding: 0 15px;

      .item {
        display: inline-block;
        margin: 4px;
      }

      span {
        cursor: pointer;
      }

      span:hover {
        color: #2f5bea;
      }

      .navbar-lan {
        padding: 2px 0 0 2px;
      }
    }

    .user-image {
      display: flex;
      flex-direction: column;
      height: 100%;
      font-weight: 600;
      font-size: 2em;
      font-style: oblique;
      cursor: pointer;
      fill: var(--ti-common-color-line-active);
    }

    a {
      color: var(--color-text-1);
      text-decoration: none;
    }

    .trigger-lan {
      position: absolute;
      bottom: -44px;
      width: 100px;
      margin-left: -35px;
    }

    .navbar-user:hover > .trigger-user {
      display: inline-block;
    }

    .trigger-user {
      position: absolute;
      bottom: -32px;
      display: none;
      width: 100px;
      margin-left: -43px;
    }

    .trigger-user:hover {
      display: inline-block;
    }

    .trigger-user {
      li {
        display: flex;
        justify-content: space-around;
        padding: 6px;
        font-size: 12px;
        text-align: center;
        list-style-type: none;
        background-color: #fff;
        box-shadow: 0 0 2px 2px var(--ti-common-color-bg-normal);
        cursor: pointer;
      }

      li:hover {
        color: #2f5bea;
        background-color: #f5f6f7;
      }
    }

    .trigger-lan {
      li {
        display: block;
        padding: 6px;
        font-size: 12px;
        text-align: center;
        list-style-type: none;
        background-color: #fff;
        box-shadow: 0 0 2px 2px var(--ti-common-color-bg-normal);
        cursor: pointer;
      }

      li:hover {
        color: #2f5bea;
        background-color: #f5f6f7;
      }
    }
  }
</style>

<style lang="less" scoped>
  // responsive
  @media (max-width: @screen-ms) {
    .left-side {
      img {
        width: 38px;
      }
    }

    .right-side {
      display: none;
    }
  }

  @media (max-width: @screen-mm) {
    .left-side {
      img {
        width: 38px;
      }
    }

    .right-side {
      display: none;
    }
  }
</style>
