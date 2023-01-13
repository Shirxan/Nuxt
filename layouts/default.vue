<template>
  <div id="wrapper">
    <AppSidebar/>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">

        <AppHeader/>

        <NuxtPage/>

        <AppFooter/>
      </div>
    </div>
  </div>
</template>

<script setup>

import AppSidebar from '../components/AppSidebar'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'

</script>