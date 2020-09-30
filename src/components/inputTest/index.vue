<template>
    <div class="input">
        <el-input></el-input>
        <btn :btnName="btnName" @btnClick="btnClick" />
    </div>
</template>

<script>
import btn from './btn'
export default {
    name: 'zx-input',
    props:{
        btnName:{
            type: String,
            default(){
                return '我的按钮'
            }
        }
    },
    components: {btn},
    methods: {
        btnClick(data){
            this.$emit('btnClickEnv',{...data,btnName: this.btnName});
        }
    },
    des:{
        name: 'input 测试',
        depend: 'element-ui',
        '说明': `<div>这是一个<span style="color: red">测试</span><i>组件</i></div>`
    }
}
</script>

<style>

</style>