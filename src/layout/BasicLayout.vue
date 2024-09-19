<template>
    <Header />
    <RouterView />
    <Pointer /> 
</template>

<script setup>
import Header from '@/components/Header/index.vue'
import { RouterView } from 'vue-router'
import Pointer from '@/components/Pointer/index.vue'

</script>