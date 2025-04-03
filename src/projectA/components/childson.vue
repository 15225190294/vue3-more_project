<script setup>
const {randomNum, grandsonObj} =  inject('obj');
// console.log(randomNum, 'randomNum')
const changeGrandsonAge = () => {
  grandsonObj.value.age++;
}
</script>
<template>
  <div>孙子简介：我叫{{grandsonObj.name}}，性别{{grandsonObj.sex}}，今年{{grandsonObj.age}}岁。</div>
  <div>孙子组件随机数：{{randomNum}}</div>
  <button @click="changeGrandsonAge">小孙年龄长一岁</button>
</template>