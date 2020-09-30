<template>
    <div class="btn">
         <el-button type="primary" @click="handleClick">{{btnName}}</el-button>
    </div>
</template>

<script>
export default {
    props: ['btnName'],
    methods: {
        handleClick(){
            this.$emit('btnClick',{a: 1,b: 2})
        }
    }
}
</script>

<style>

</style>