<script setup>
// 构建随机数
let randomNum = ref('');
for (let i = 0; i < 4; i++) {
  let num = Math.floor(Math.random() * (0, 9));
  randomNum.value += num;
}
// 父组件调子组件属性 使用proxyRefs解析proxy对象成常规的Object对象
// 定义组件变量 和组件ref值保持一致
let childRef = ref();
const changeAge = () => {
  // let val = proxyRefs(childRef);
  // console.log(childRef.value.childObj, 'childRef.childObj')
  childRef.value.childObj.age++;//父组件直接改变子组件的值
  // childRef.value.changeChildAge();//调用子组件方法改变子组件的值
}
// 父组件接收子组件传参函数
const changeRandomNum = () => {
  randomNum.value = '';
  for (let i = 0; i < 4; i++) {
    let num = Math.floor(Math.random() * (0, 9));
    randomNum.value += num;
  }
}
// 爷孙组件传参
let grandsonObj = ref({
  name: '小孙',
  age: 1,
  sex: '男'
});
provide('obj', {
  randomNum,
  grandsonObj
});
// 监听
watch([grandsonObj], (count, prevCount) => {
  console.log(grandsonObj.value, 'grandsonObj111111111')
}, { deep: true });
</script>

<template>
  <div class="props-con">
    <p>我是父子组件传参页面</p>
    <button @click="changeAge">张三的年龄长一岁</button>
    <Child ref="childRef" :randomNum="randomNum" @changeRandomNum="changeRandomNum"></Child>
  </div>
</template>

<style scoped lang="less">
.props-con {
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
}
</style>