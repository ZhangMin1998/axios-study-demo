<template>
  <div class="home">
    <!-- 联系人列表 -->
    <van-contact-list
      :list="list"
      @add="onAdd"
      @edit="onEdit"
    />
    <!-- 联系人编辑 -->
    <van-popup :show="showEdit" position="bottom" :close-on-click-overlay="true" :style="{ height: '100%' }">
      <van-contact-edit
      :is-edit="isEdit"
      :contact-info="editingContact"
      @save="onSave"
      @delete="onDelete"
    />
    </van-popup>
  </div>
</template>

<script setup>
/* eslint-disable */
import axios from 'axios'
import { showFailToast, showSuccessToast } from 'vant'
import { ref, reactive } from 'vue'

const showEdit = ref(false)
const isEdit = ref(false)
let list = reactive([])
let editingContact = reactive({})
// const instance = null
const instance = axios.create({
  baseURL: 'http://localhost:9000/api',
  timeout: 1000
})

// 获取列表
const getList = () => {
  instance.get('/contactList').then(res => {
    console.log(res.data.data)
    list.length = 0
    list.splice(0, 0, ...res.data.data)
  }).catch(err => {
    console.log(err)
    showFailToast(err)
  })
}
getList()

const onAdd = () => {
  console.log('添加')
  showEdit.value = true
  isEdit.value = false
}
const onEdit = (info) => {
  showEdit.value = true
  isEdit.value = true
  editingContact = info
}
const onSave = (info) => {
  console.log('保存')
  if (isEdit.value) {
    // 编辑保存
    console.log('编辑保存')
    instance.put('/contact/edit', info).then(res => {
      if (res.data.code === 200) {
        showSuccessToast('编辑成功')
        showEdit.value = false
      }
    }).catch(err => {
      console.log(err)
      showFailToast(err)
    }).finally(() => {
      getList()
    })
  } else {
    // 新建保存
    instance.post('/contact/new/json', info).then(res => {
      if (res.data.code === 200) {
        showSuccessToast('保存成功')
        showEdit.value = false
      }
    }).catch(err => {
      console.log(err)
      showFailToast(err)
    }).finally(() => {
      getList()
    })
  }
}
const onDelete = (info) => {
  console.log('删除')
  instance.delete('/contact', {
    params: {
      id: info.id
    }
  }).then(res => {
    if (res.data.code === 200) {
      showSuccessToast('删除成功')
      showEdit.value = false
    }
  }).catch(err => {
    console.log(err)
    showFailToast(err)
  }).finally(() => {
    getList()
  })
}
</script>

<style lang="less" scoped>
// .van-concat-list__add{
//   z-index: 0;
// }
// .van-popup{
//   height: 100% !important;
// }
</style>
