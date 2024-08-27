<template>
  <div class="container">
    <div class="contain">
      <Breadcrumb :items="['menu.examples', 'menu.examples.testMethodAuth']" />
      <Main></Main>
    </div>
  </div>

  <div class="main">
    <div class="main-title">
      <span></span>
      <p>{{ $t('examples.testMethodAuth.authTest') }}</p>
    </div>

    <div class="test">
      <tiny-button type="primary"  @click="handleAdminOnly">{{ $t('test.method.auth.adminOnly') }}
      </tiny-button>
      <tiny-button type="primary"  @click="handleGuestOnly">{{ $t('test.method.auth.guestOnly') }}
      </tiny-button>
      <tiny-button type="primary"  @click="handleAdminOrGuest">{{ $t('test.method.auth.adminOrGuest') }}
      </tiny-button>
      <tiny-button type="primary"  @click="handleEveryOne">{{ $t('test.method.auth.everyone') }}
      </tiny-button>
    </div>
  </div>
</template>


<script lang="ts" setup>
  import axios from 'axios';
  import { inject, ref, reactive, computed } from 'vue';
  import {
    Button as TinyButton,
    Modal,
    Notify,
  } from '@opentiny/vue';

  function handleAdminOnly() {
    axios.post('/api/resource/v1/auth/method/adminSayHello?name=bob', {})
      .then(response => {
              Modal.message({
                   message: `${response}`,
                   status: 'success',
               });
            });
  };

  function handleGuestOnly() {
    axios.post('/api/resource/v1/auth/method/guestSayHello?name=bob', {})
      .then(response => {
              Modal.message({
                   message: `${response}`,
                   status: 'success',
               });
            });
  };

  function handleAdminOrGuest() {
    axios.post('/api/resource/v1/auth/method/guestOrAdminSayHello?name=bob', {})
      .then(response => {
              Modal.message({
                   message: `${response}`,
                   status: 'success',
               });
            });
  };

  function handleEveryOne() {
    axios.post('/api/resource/v1/auth/method/everyoneSayHello?name=bob', {})
      .then(response => {
              Modal.message({
                   message: `${response}`,
                   status: 'success',
               });
            });
  };
</script>
