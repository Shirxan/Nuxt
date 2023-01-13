<template>
  <div id="wrapper">
    <AppSidebar/>
    <div id="content-wrapper" class="d-flex flex-column">
      <NuxtPage/>
      <AppFooter/>

    </div>
  </div>
</template>

<script setup>

import AppSidebar from '../components/AppSidebar'
import  AppFooter from '../components/AppFooter'

</script>

<style scoped>

</style>