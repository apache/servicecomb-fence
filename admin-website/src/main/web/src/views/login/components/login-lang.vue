<template>
  <tiny-button :icon="Language" circle @click="changeLangDrop"></tiny-button>
  <span>{{ $t('login.icon.language') }}</span>
  <div v-if="LangDrop" class="login-lan-drop">
    <li
      v-for="(item, index) in locales"
      :key="index"
      :value="item.value"
      @click="changeLocale(locales[index].value)"
      >{{ item.label }}</li
    >
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { Button as TinyButton, Tooltip as TinyTooltip } from '@opentiny/vue';
  import { IconLanguage } from '@opentiny/vue-icon';
  import { LOCALE_OPTIONS } from '@/locale';
  import useLocale from '@/hooks/locale';

  const locales = [...LOCALE_OPTIONS];
  const { changeLocale } = useLocale();
  const Language = IconLanguage();
  const LangDrop = ref(false);

  const changeLangDrop = () => {
    LangDrop.value = !LangDrop.value;
  };
</script>

<style lang="less" scoped>
  .login-lan-drop {
    margin-left: -36%;
    background: #fff;
    border: 1px solid #ccc;

    li {
      display: block;
      padding: 6px;
      text-align: left;
      list-style-type: none;
      box-shadow: 0 0 2px 2px var(--ti-common-color-bg-normal);
      cursor: pointer;
    }

    li:hover {
      color: #2f5bea;
      background-color: #f5f6f7;
    }
  }

  span {
    padding-left: 5px;
    font-size: 20px;
  }
  // responsive
  @media (max-width: @screen-ms) {
    .login-lan-drop {
      li {
        padding: 2px;
      }
    }
  }
</style>
