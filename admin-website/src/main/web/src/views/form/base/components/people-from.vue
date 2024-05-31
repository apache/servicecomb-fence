<template>
  <tiny-layout>
    <tiny-form
      ref="peopleFormRef"
      :model="filterOptions"
      :rules="rules"
      label-width="120px"
      :label-align="true"
      label-position="left"
      size="small"
    >
      <tiny-row :flex="true" justify="left">
        <tiny-col :span="4" label-width="100px">
          <tiny-form-item :label="$t('baseForm.form.label.type')" prop="person">
            <tiny-select
              v-model="filterOptions.person"
              :placeholder="$t('baseForm.form.label.placeholder')"
              multiple
            >
              <tiny-option
                v-for="item in (projectData?.person as any)"
                :key="item.value"
                :label="$t(item.label)"
                :value="item.value"
              ></tiny-option>
            </tiny-select>
          </tiny-form-item>
        </tiny-col>
        <tiny-col :span="4" label-width="100px">
          <tiny-form-item :label="$t('baseForm.form.label.rank')" prop="rank">
            <tiny-select
              v-model="filterOptions.rank"
              :placeholder="$t('baseForm.form.label.placeholder')"
              multiple
            >
              <tiny-option
                v-for="item in (projectData?.rank as any)"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></tiny-option>
            </tiny-select>
          </tiny-form-item>
        </tiny-col>
      </tiny-row>

      <tiny-row :flex="true" justify="left">
        <tiny-col :span="4" label-width="100px">
          <tiny-form-item
            :label="$t('baseForm.form.label.culture')"
            prop="department"
          >
            <tiny-input
              v-model="filterOptions.department"
              :placeholder="$t('searchTable.form.input')"
            ></tiny-input>
          </tiny-form-item>
        </tiny-col>
        <tiny-col :span="4" label-width="100px">
          <tiny-form-item :label="$t('baseForm.form.label.business')">
            <tiny-input
              v-model="filterOptions.business"
              :placeholder="$t('searchTable.form.input')"
            ></tiny-input>
          </tiny-form-item>
        </tiny-col>
      </tiny-row>
    </tiny-form>
  </tiny-layout>
</template>

<script lang="ts" setup>
  import {
    ref,
    reactive,
    toRefs,
    defineProps,
    computed,
    defineExpose,
  } from 'vue';
  import {
    Select as TinySelect,
    Option as TinyOption,
    Layout as TinyLayout,
    Form as TinyForm,
    FormItem as TinyFormItem,
    Row as TinyRow,
    Col as TinyCol,
    Input as TinyInput,
  } from '@opentiny/vue';

  interface FilterOptions {
    department: string;
    business: string;
    rank: Array<object>;
    person: Array<object>;
  }

  // 加载效果
  const state = reactive<{
    filterOptions: FilterOptions;
  }>({
    filterOptions: {} as FilterOptions,
  });
  const { filterOptions } = toRefs(state);

  // 初始化请求数据
  const peopleFormRef = ref();
  const props = defineProps({
    projectData: Object,
    peopleVis: Boolean,
  });

  const { projectData, peopleVis } = toRefs(props);
  // 校验规则
  const rulesType = {
    required: true,
    trigger: 'blur',
  };
  const rulesSelect = {
    required: true,
    message: '必选',
    trigger: 'blur',
  };
  const rules = computed(() => {
    return {
      department: peopleVis.value ? [rulesType] : '',
      rank: peopleVis.value ? [rulesSelect] : '',
      person: peopleVis.value ? [rulesSelect] : '',
    };
  });

  const peopleValid = () => {
    let peopleValidate = false;
    peopleFormRef.value.validate((valid: boolean) => {
      peopleValidate = valid;
    });
    return peopleValidate;
  };

  const peopleReset = () => {
    state.filterOptions = {} as FilterOptions;
  };

  defineExpose({
    peopleValid,
    peopleReset,
  });
</script>

<style scoped lang="less"></style>
