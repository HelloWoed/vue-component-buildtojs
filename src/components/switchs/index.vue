<template>
    <div class="switch">
        <el-switch
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949">
        </el-switch>
    </div>
</template>

<script>
export default {
    name: 'zx-switch',
    data(){
        return {
            value: true
        }
    },
    des:{
        name: 'switch开关',
        depend: 'element-ui'
    }
}
</script>

<style>

</style>