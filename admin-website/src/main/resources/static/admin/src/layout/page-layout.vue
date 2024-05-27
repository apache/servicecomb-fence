<template>
  <router-view v-slot="{ Component, route }">
    <component :is="Component" :key="route.fullPath" />
  </router-view>
</template>

<script lang="ts" setup></script>

<style scoped lang="less"></style>
