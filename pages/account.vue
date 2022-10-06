<template>
  <section class="my-central">
    <div><p>Nickname: <span>{{ user.nickname }}</span></p></div>
    <div><p>Email: <span>{{ user.email }}</span></p></div>
  </section>
</template>

<script setup>

import {useUserStore} from '~/stores/useUserStore'

const store = useUserStore()
const user = store.user

</script>

<style scoped>

</style>
