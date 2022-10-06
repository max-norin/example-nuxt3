<template>
  <div>
    <label>{{ label }}</label>
    <input :type="type" :value="$props.modelValue" v-bind="$attrs" @input="$emit('update:modelValue', $event.target.value)">
    <div
        v-for="(error, index) of errors"
        :key="index"
        class="input-errors"
        role="alert"
    >
      {{ error.$message }}
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  label: {type: String},
  type: {type: String, default: _ => 'text'},
  modelValue: {},
  errors: {type: Array,},
})

</script>

<style scoped>

</style>
