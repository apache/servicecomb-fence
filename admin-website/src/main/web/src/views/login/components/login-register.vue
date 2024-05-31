<template>
  <div class="login-register-container">
    <tiny-form
      ref="ruleForm"
      :model="createData"
      :rules="rules"
      :validate-on-rule-change="isvalidate"
      :label-align="true"
      label-position="top"
      label-width="100px"
    >
      <tiny-form-item
        :label="$t('login.form.mailInput')"
        prop="username"
        size="medium"
      >
        <tiny-input
          v-model="createData.username"
          :placeholder="$t('login.form.registerMail.placeholder')"
        ></tiny-input>
      </tiny-form-item>
      <tiny-form-item
        :label="$t('login.form.passwordInput')"
        prop="password"
        size="medium"
      >
        <tiny-input
          v-model="createData.password"
          :placeholder="$t('login.form.registerPassword.placeholder')"
          type="password"
          show-password
        ></tiny-input>
      </tiny-form-item>
      <tiny-form-item
        :label="$t('login.form.passwordConfirm')"
        prop="passwordConfirm"
        size="medium"
      >
        <tiny-input
          v-model="createData.passwordConfirm"
          :placeholder="$t('login.form.registerConfirmPassword.placeholder')"
          type="password"
          show-password
        ></tiny-input>
      </tiny-form-item>

      <div class="login-form-options">
        <tiny-link type="primary" @click="typeChange">{{
          $t('login.form.change')
        }}</tiny-link>
      </div>

      <tiny-form-item size="medium">
        <tiny-button
          type="primary"
          class="login-form-btn"
          :loading="loading"
          @click="handleSubmit"
          >{{ $t('login.form.register') }}</tiny-button
        >
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script lang="ts" setup>
  import { inject, reactive, ref, computed } from 'vue';
  import {
    Form as TinyForm,
    FormItem as TinyFormItem,
    Input as TinyInput,
    Button as TinyButton,
    Link as TinyLink,
    Modal,
  } from '@opentiny/vue';
  import { useI18n } from 'vue-i18n';
  import useLoading from '@/hooks/loading';
  import { registerUser } from '@/api/user';

  // 注册
  const { t } = useI18n();
  const { loading, setLoading } = useLoading();
  const ruleForm = ref();

  // 切换模式
  const handle: any = inject('handle');
  const typeChange = () => {
    handle(false);
  };

  let createData = reactive({
    username: '',
    password: '',
    passwordConfirm: '',
  });

  let isvalidate = ref(true);

  // 校验格式
  const validatePass = (
    rule: any,
    value: string,
    callback: (arg?: Error) => void
  ) => {
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value)) {
      callback(new Error(t('login.form.checkPassword')));
    } else {
      callback();
    }
  };

  const validateMail = (
    rule: any,
    value: string,
    callback: (arg?: Error) => void
  ) => {
    if (!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(value)) {
      callback(new Error(t('login.form.checkUsername')));
    } else {
      callback();
    }
  };
  const validatePassConfirm = (
    rule: any,
    value: string,
    callback: (arg?: Error) => void
  ) => {
    if (createData.password && createData.password !== value) {
      callback(new Error(t('login.form.confirmPassword')));
    } else {
      callback();
    }
  };

  const rules = computed(() => {
    return {
      username: [
        {
          required: true,
          message: t('login.form.mailName.errMsg'),
          trigger: 'blur',
        },
        { validator: validateMail, trigger: 'blur' },
      ],
      password: [
        {
          required: true,
          message: t('login.form.mailpassword.errMsg'),
          trigger: 'blur',
        },
        { validator: validatePass, trigger: 'blur' },
      ],
      passwordConfirm: [
        {
          required: true,
          message: t('login.form.mailpassword2.errMsg'),
          trigger: 'blur',
        },
        { validator: validatePassConfirm, trigger: 'blur' },
      ],
    };
  });

  // 注册提交
  function handleSubmit() {
    ruleForm.value.validate(async (e: any) => {
      if (e) {
        let data: any = reactive({
          username: createData.username,
          password: createData.password,
        });
        await registerUser(data);
        Modal.message({
          message: t('login.form.registerPass'),
          status: 'success',
        });
        handle(false);
      } else {
        Modal.message({
          message: t('login.form.registerError'),
          status: 'warning',
        });
      }
    });
  }
</script>

<style lang="less" scoped>
  .login-register-container {
    margin-top: -6%;
    margin-left: 6%;

    .tiny-form-item {
      margin-bottom: 20px;
    }

    &-container {
      width: 320px;
    }

    .login-form-options {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      margin-left: 65%;
    }

    .login-form-btn {
      display: block;
      width: 100%;
      max-width: 100%;
    }
  }

  // responsive
  @media (max-width: @screen-ms) {
    .login-register-container {
      margin-top: -10%;

      .tiny-form-item {
        margin-bottom: 5px;
      }

      .login-form-options {
        margin-bottom: 10px;
        margin-left: 50%;
      }
    }
  }
  @media (max-height: @screen-xs) {
    .login-register-container {
      margin-top: -15%;
    }
  }
</style>
