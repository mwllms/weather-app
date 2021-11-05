<script setup>
import Weather from './components/Weather.vue'
</script>

<template>
  <suspense>
    <template #default>
      <Weather />
    </template>
  </suspense>
</template>
