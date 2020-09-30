<template>
    <div class="cmpt-list">
        <el-tabs v-model="tabActiveName" :tab-position="tabPosition" style="height: 200px;">
            
            <el-tab-pane label="inputTest" name="inputTest">
                <el-divider content-position="left">
                    <strong>
                        组件预览
                    </strong>
                </el-divider>
                <input-test />
            </el-tab-pane>
            
            <el-tab-pane label="switchs" name="switchs">
                <el-divider content-position="left">
                    <strong>
                        组件预览
                    </strong>
                </el-divider>
                <switchs />
            </el-tab-pane>
            
        </el-tabs>
        <el-drawer
        v-if="showCmptDes"
        :visible.sync="showCmptDes"
        modal-append-to-body>
        <template slot="title">
            <strong v-html="`${tabActiveName}--组件详情`"></strong>
        </template>
        <div class="cmpt-info">
            <el-collapse v-model="desColpActName" v-if="cpptDatas[tabActiveName].des">
                <template v-for="(val,key) in cpptDatas[tabActiveName].des">
                    <el-collapse-item :key="key" :name="key">
                        <template slot="title">
                            <strong v-html="key"></strong>
                        </template>
                        <div v-html="val"></div>
                    </el-collapse-item>
                </template>
            </el-collapse>
        </div>
        </el-drawer>
        <div class="viewDes">
            <el-button type="success" @click="viewCmptDes" round>查看详情</el-button>
        </div>
    </div>
</template>

<script>
import cpptDatas from './cpptDatas.js';

export default {
    components: cpptDatas,
    data(){
        return {
            cpptDatas,
            showCmptDes: false,
            tabPosition: 'left',
            tabActiveName: 'inputTest',
            desColpActName: 'name'
        }
    },
    methods: {
        viewCmptDes(){
            this.showCmptDes = true;
        }
    }
}
</script>

<style lang="less" scoped>
    .cmpt-list{
        position: relative;
        height: calc(100% - 75px);
        .cmpt-info{
            padding: 0 20px;
        }
        /deep/ .el-tabs{
            height: 100%!important;
            .el-tabs__content{
                height: 100%;
            }
        }
        .viewDes{
            position: absolute;
            top: 65%;
            right: 5%;
        }
    }
</style>