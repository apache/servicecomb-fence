<template>
  <div class="contain">
    <tiny-transfer
      ref="targetFormRef"
      v-model="length"
      :data="arr"
      :titles="[$t('stepForm.target.list'), $t('stepForm.target.sure')]"
    ></tiny-transfer>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive, defineExpose } from 'vue';
  import { Transfer as TinyTransfer } from '@opentiny/vue';

  interface data {
    key: number;
    label: string;
    disabled: boolean;
  }

  // 初始化请求数据
  const targetFormRef = ref();
  const arr: data[] = reactive([]);
  for (let i = 0; i <= 15; i += 1) {
    arr.push({
      key: i,
      label: `Options ${i}`,
      disabled: false,
    });
  }

  const length = ref([]);

  const targetSubmit = () => {
    if (length.value.length > 0) {
      arr.forEach((item) => {
        item.disabled = true;
      });
      return true;
    }
    return false;
  };

  const targetReset = () => {
    length.value = [];
  };

  defineExpose({
    targetReset,
    targetSubmit,
  });
</script>

<style scoped lang="less">
  .contain {
    display: flex;
    justify-content: start;
  }
</style>
