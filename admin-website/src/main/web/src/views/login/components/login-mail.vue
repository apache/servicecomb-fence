<template>
  <div class="login-form-container">
    <tiny-form
      ref="loginFormMail"
      :model="loginMail"
      class="login-form"
      :rules="rules"
      validate-type="text"
      label-width="0"
      size="medium"
    >
      <tiny-form-item prop="mailname" size="medium">
        <tiny-input
          v-model="loginMail.mailname"
          :placeholder="$t('login.form.mailName.placeholder')"
        >
        </tiny-input>
      </tiny-form-item>

      <tiny-form-item prop="mailpassword" size="medium">
        <tiny-input
          v-model="loginMail.mailpassword"
          type="password"
          show-password
          :placeholder="$t('login.form.mailpassword.placeholder')"
        >
        </tiny-input>
      </tiny-form-item>

      <tiny-form-item size="medium">
        <tiny-button
          type="primary"
          class="login-form-btn"
          :loading="loading"
          @click="handleSubmit"
          >{{ $t('login.form.login') }}</tiny-button
        >
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script lang="ts" setup>
  import { inject, ref, reactive, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import {
    Form as TinyForm,
    FormItem as TinyFormItem,
    Input as TinyInput,
    Button as TinyButton,
    Checkbox as TinyCheckbox,
    Link as TinyLink,
    Modal,
    Notify,
  } from '@opentiny/vue';
  import { useI18n } from 'vue-i18n';
  import { useUserStore } from '@/store';
  import useLoading from '@/hooks/loading';

  const router = useRouter();
  const { t } = useI18n();
  const { loading, setLoading } = useLoading();
  const userStore = useUserStore();
  const loginFormMail = ref();

  const rules = computed(() => {
    return {
      mailname: [
        {
          required: true,
          message: t('login.form.mailName.errMsg'),
          trigger: 'change',
        },
      ],
      mailpassword: [
        {
          required: true,
          message: t('login.form.mailpassword.errMsg'),
          trigger: 'change',
        },
      ],
    };
  });

  const loginMail = reactive({
    mailname: 'admin',
    mailpassword: 'changeMyPassword',
    rememberPassword: true,
  });

  // 切换模式
  const handle: any = inject('handle');
  const typeChange = () => {
    handle(true);
  };

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
          grant_type: 'password',
        });
        Modal.message({
          message: t('login.form.login.success'),
          status: 'success',
        });
        const { redirect, ...othersQuery } = router.currentRoute.value.query;
        router.push({
          name: (redirect as string) || 'Home',
          query: {
            ...othersQuery,
          },
        });
      } catch (err) {
        Notify({
          type: 'error',
          title: t('login.tip.right'),
          message: t('login.tip.mail'),
          position: 'top-right',
          duration: 2000,
          customClass: 'my-custom-cls',
        });
      } finally {
        setLoading(false);
      }
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
