<template>
  <section class="todos my-central">

    <section class="todos__list">
      <div
          v-for="item in records"
          :key="item.id"
          class="todos__item"
      >
        <p>{{ item.title }}</p>
      </div>
    </section>

    <section class="todos__form">
      <div>
        <MNInput
            label="Title"
            name="title"
            placeholder="title"
            v-model="record.title"
            :errors="v$.title.$errors"
        />
      </div>

      <button @click="insert">Добавить</button>
    </section>

  </section>
</template>

<script setup lang="ts">

import {useRepo} from 'pinia-orm'
import Todo from '~/models/Todo'
import useVuelidate from '@vuelidate/core'

const repo = useRepo(Todo)
const records: Todo[] = computed(() => repo.all())

onMounted(() => {
  repo.save({
    title: 'First',
  })
})

const record: Todo = reactive(repo.make({
  // title: 'Second',
}))
delete record.id
const v$ = useVuelidate(record.rules, record)

async function insert() {
  if (!await v$.value.$validate()) {
    return false
  }

  repo.insert(record)
  record.reset()
  v$.value.$reset()
}

</script>

<style scoped>

</style>
