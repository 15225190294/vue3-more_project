<script setup>
// setup模板中，使用defineProps接收父组件传参
const props = defineProps({
  randomNum: {
    type: String,
    default: ''
  }
});
// 子组件变量
let childObj = ref({
  name: '张三',
  age: 18,
  sex: '男'
});
const changeChildAge = () => {
  childObj.value.age++;
}
// setup模板中，使用defineExpose暴露子组件属性，供父组件调用
defineExpose({
  childObj,
  changeChildAge
});
// 子组件通过emit传值给父组件
const emit = defineEmits(['changeRandomNum']);
const emitData = () => {
  emit('changeRandomNum');
}
</script>
<template>
  <div class="child-box">
    <p>随机数：{{randomNum}}</p>
    <button @click="emitData">子组件emit传值父组件</button>
    <div class="ir">
      儿子简介：我叫{{childObj.name}}，性别{{childObj.sex}}，今年{{childObj.age}}岁。
    </div>
    <Childson />
  </div>
</template>

<style scoped lang="less">
.child-box {
  width: 100%;
}
</style>