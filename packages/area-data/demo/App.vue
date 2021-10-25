<template>
    <div class="demo-title demo-1">vant数据源：</div>
   <el-cascader
      v-model="value1"
      :options="options1"
    ></el-cascader>
     <div class="demo-title demo-2">vant数据源：加全部</div>
   <el-cascader
      v-model="value2"
      :options="options2"
    ></el-cascader>
</template>
<script>
import {defineComponent} from 'vue';
import  {getAreaTree} from '../src/index';
export default defineComponent({
    setup(){
      return {
        value1:'',
        options1:getAreaTree(),
        value2:'',
        options2:getAreaTree(true),
      }
    }
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.demo-title{
  margin: 10px ;
}
</style>
