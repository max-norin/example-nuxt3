<template>
  <section class="register__form my-central">
    <div>

      <MNInput
          label="Nickname"
          name="nickname"
          placeholder="nickname"
          v-model="record.nickname"
          :errors="v$.nickname.$errors"
      />

      <MNInput
          label="Email"
          name="email"
          placeholder="email"
          v-model="record.email"
          :errors="v$.email.$errors"
      />

      <MNInput
          label="Password"
          name="password"
          placeholder="password"
          v-model="record.password"
          :errors="v$.password.$errors"
      />

    </div>

    <button @click="register" :disabled="loading">Зарегистрироваться</button>
  </section>
</template>

<script setup lang="ts">

import {useRepo} from 'pinia-orm'
import User from '../models/User'
import {FetchOptions} from "ohmyfetch";
import useVuelidate from "@vuelidate/core";
import MNInput from "~/components/MNInput.vue";

const record: User = reactive(useRepo(User).make({
  // nickname: 'max_norin',
  // email: '79068976350@yandex.ru',
  // password: '1234Four!',
}))
const v$ = useVuelidate(record.rules, record)

let loading: boolean = false

async function register() {
  if (!await v$.value.$validate())
    return false

  loading = true
  const baseURL = 'http://localhost:8080/api/v1/'
  const opts: FetchOptions = {method: 'POST', baseURL, body: record.toApi()}
  try {
    await $fetch('/register', opts)
    alert('Success')
    record.reset()
    v$.value.$reset()
  } catch (e) {
    if (e.name === 'FetchError') alert(JSON.stringify(e.data))
    else alert(e)
  } finally {
    loading = false
  }
}
</script>

<style scoped>

</style>
