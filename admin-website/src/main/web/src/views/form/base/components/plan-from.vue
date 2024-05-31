<template>
  <tiny-layout>
    <tiny-form
      ref="planFromRef"
      :rules="rules"
      :model="filterOptions"
      :responsive-layout="true"
      label-width="120px"
      :label-align="true"
      label-position="left"
      size="small"
    >
      <tiny-row :flex="true" justify="left">
        <tiny-col :span="8" label-width="100px">
          <tiny-form-item
            :label="$t('baseForm.form.label.confirm')"
            prop="confirm"
          >
            <div>
              <tiny-radio v-model="filterOptions.confirm" label="1">{{
                $t('baseForm.form.label.yes')
              }}</tiny-radio>
              <tiny-radio v-model="filterOptions.confirm" label="2">{{
                $t('baseForm.form.label.no')
              }}</tiny-radio>
            </div>
          </tiny-form-item>
        </tiny-col>
      </tiny-row>

      <tiny-row :flex="true" justify="left">
        <tiny-col :span="8" label-width="100px">
          <tiny-form-item
            :label="$t('baseForm.form.label.frequency')"
            prop="frequency"
          >
            <div class="frequency">
              <tiny-select
                v-model="filterOptions.frequency"
                :placeholder="$t('baseForm.form.label.placeholder')"
                filterable
              >
                <tiny-option
                  v-for="item in projectData?.frequency"
                  :key="item"
                  :label="$t(item)"
                  :value="item"
                ></tiny-option>
              </tiny-select>
            </div>
          </tiny-form-item>
        </tiny-col>
      </tiny-row>

      <tiny-row :flex="true" justify="left">
        <tiny-col :span="8" label-width="100px">
          <tiny-form-item :label="$t('baseForm.form.label.role')" prop="role">
            <div>
              <tiny-radio v-model="filterOptions.role" label="1">{{
                $t('baseForm.form.label.roleone')
              }}</tiny-radio>
              <tiny-radio v-model="filterOptions.role" label="2">{{
                $t('baseForm.form.label.roletwo')
              }}</tiny-radio>
            </div>
          </tiny-form-item>
        </tiny-col>
      </tiny-row>

      <tiny-row :flex="true" justify="left">
        <tiny-col :span="8" label-width="100px">
          <tiny-form-item
            :label="$t('baseForm.form.label.condition')"
            prop="condition"
          >
            <div>
              <tiny-radio v-model="filterOptions.condition" label="1">{{
                $t('baseForm.form.label.conditionone')
              }}</tiny-radio>
              <tiny-radio v-model="filterOptions.condition" label="2">{{
                $t('baseForm.form.label.conditiontwo')
              }}</tiny-radio>
              <tiny-radio v-model="filterOptions.condition" label="3">{{
                $t('baseForm.form.label.conditionthree')
              }}</tiny-radio>
              <tiny-radio v-model="filterOptions.condition" label="4">{{
                $t('baseForm.form.label.conditionfour')
              }}</tiny-radio>
            </div>
          </tiny-form-item>
        </tiny-col>
      </tiny-row>

      <tiny-row :flex="true" justify="left">
        <tiny-col :span="8" label-width="100px">
          <tiny-form-item
            :label="$t('baseForm.form.label.staged')"
            prop="staged"
          >
            <div>
              <tiny-radio v-model="filterOptions.staged" label="1">{{
                $t('baseForm.form.label.stagedone')
              }}</tiny-radio>
              <tiny-radio v-model="filterOptions.staged" label="2">{{
                $t('baseForm.form.label.stagedtwo')
              }}</tiny-radio>
              <tiny-radio v-model="filterOptions.staged" label="3">{{
                $t('baseForm.form.label.stagedthree')
              }}</tiny-radio>
            </div>
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
    Radio as TinyRadio,
  } from '@opentiny/vue';

  interface FilterOptions {
    frequency: Array<object>;
    confirm: string;
    role: string;
    condition: string;
    staged: string;
  }

  // 加载效果
  const state = reactive<{
    filterOptions: FilterOptions;
  }>({
    filterOptions: {
      confirm: '1',
      role: '1',
      condition: '1',
      staged: '1',
    } as FilterOptions,
  });
  const { filterOptions } = toRefs(state);

  // 初始化请求数据
  const planFromRef = ref();

  const props = defineProps({
    projectData: Object,
    planVis: Boolean,
  });

  const { projectData, planVis } = toRefs(props);

  // 校验规则
  const rulesType = {
    required: true,
    message: '必选',
    trigger: 'blur',
  };
  const rules = computed(() => {
    return {
      frequency: planVis.value ? [rulesType] : '',
      confirm: planVis.value ? [rulesType] : '',
      role: planVis.value ? [rulesType] : '',
      condition: planVis.value ? [rulesType] : '',
      staged: planVis.value ? [rulesType] : '',
    };
  });

  const planValid = () => {
    let planValidate = false;
    planFromRef.value.validate((valid: boolean) => {
      planValidate = valid;
    });
    return planValidate;
  };

  const planReset = () => {
    state.filterOptions = {
      confirm: '1',
      role: '1',
      condition: '1',
      staged: '1',
    } as FilterOptions;
  };

  defineExpose({
    planValid,
    planReset,
  });
</script>

<style scoped lang="less">
  :deep(.tiny-select) {
    width: 380px;
  }
</style>
