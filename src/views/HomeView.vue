<template>
  <div class="home">
    <!-- 联系人列表 -->
    <van-contact-list
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />

  </div>
</template>

<script setup>
/* eslint-disable */
import { ref, reactive } from 'vue'

// {
//   id: 1,
//   name: '',
//   tel:
// }
const list = reactive([])

const onAdd = () => {
  console.log(666)
}
const onEdit = () => {
  console.log(666)
}
</script>
