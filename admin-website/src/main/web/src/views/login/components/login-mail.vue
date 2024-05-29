<template>
  <div class="login-form-container">
    <tiny-form
      ref="loginFormMail"
      :model="loginMail"
      class="login-form"
      :rules="rules"
      validate-type="text"
      :label-align="true"
      label-position="top"
      label-width="100px"
      size="medium"
    >
      <tiny-form-item prop="mailname" label="账号：" size="medium">
        <tiny-input
          v-model="loginMail.mailname"
        >
        </tiny-input>
      </tiny-form-item>

      <tiny-form-item prop="mailpassword" label="密码：" size="medium">
        <tiny-input
          v-model="loginMail.mailpassword"
          type="password"
          show-password
        >
        </tiny-input>
      </tiny-form-item>

      <tiny-form-item size="medium">
        <tiny-button
          type="primary"
          class="login-form-btn"
          :loading="loading"
          @click="handleSubmit"
          >登录</tiny-button
        >
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import {
    Form as TinyForm,
    FormItem as TinyFormItem,
    Input as TinyInput,
    Button as TinyButton,
    Modal,
  } from '@opentiny/vue';
  import { useUserStore } from '@/store';
  import useLoading from '@/hooks/loading';

  const router = useRouter();
  const { loading, setLoading } = useLoading();
  const userStore = useUserStore();
  
  const loginFormMail = ref();

  const rules = computed(() => {
    return {
      mailname: [
        {
          required: true,
          message: "账号不能为空",
          trigger: 'change',
        },
      ],
      mailpassword: [
        {
          required: true,
          message: "密码不能为空",
          trigger: 'change',
        },
      ],
    };
  });

  const loginMail = reactive({
    mailname: 'admin@example.com',
    mailpassword: 'admin',
    rememberPassword: true,
  });


  function handleSubmit() {
    loginFormMail.value?.validate(async (valid: boolean) => {
      if (!valid) {
        return;
      }

      setLoading(true);

      try {
        await userStore.login({
          username: loginMail.mailname,
          password: loginMail.mailpassword,
        });
        Modal.message({
          message: '欢迎使用',
          status: 'success',
        });
        const { redirect, ...othersQuery } = router.currentRoute.value.query;
        router.push({
          name: (redirect as string) || 'Home',
          query: {
            ...othersQuery,
          },
        });
      }  finally {
        setLoading(false);
      }
    });
    router.push({
          name:  'Home',
        });
  }
</script>

<style lang="less" scoped>
  .login-form-container {
    margin-top: 5%;
  }

  .login-form {
    margin-left: 6%;

    .tiny-form-item {
      margin-bottom: 20px;
    }

    &-container {
      width: 320px;
    }

    &-options {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      font-size: 12px;
    }

    &-btn {
      display: block;
      width: 100%;
      max-width: 100%;
    }
  }

  .divide-line {
    margin: 0 5px;
  }
  // responsive
  @media (max-width: @screen-ms) {
    .login-form {
      margin-left: 5%;

      &-container {
        width: 240px;
      }
    }
  }
</style>
