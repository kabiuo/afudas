<template xmlns="http://www.w3.org/1999/html">
    <a-card :bordered="true">
        <el-form :model="formCustomer">
            <el-row :gutter="20">
                <el-col :xs="4" :sm="6" :md="8" :lg="8" :xl="11">
                    <el-form-item label="CustomerName：">
                        <el-input v-model="formCustomer.sysCustomerName"/>
                    </el-form-item>
                </el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="8" :xl="11">
                    <el-form-item label="IdcardNumber">
                        <el-input v-model="formCustomer.sysCustomerIdcardNumber"/>
                    </el-form-item>
                </el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="8" :xl="11">
                    <el-form-item label="Activity name">
                        <el-input v-model="formCustomer.sysCustomerPhone"/>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :xs="4" :sm="6" :md="8" :lg="8" :xl="11">
                    <!--                    占位-->
                </el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="8" :xl="11">
                    <!--                    占位-->
                </el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="8" :xl="11">
                    <el-form-item>
                        <el-button type="primary" @click="queryEligibleUserInfo('formCustomer')">Query</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <el-table :data="tableData" height="337" stripe style="width: 100%">
            <el-table-column fixed prop="sysCustomerId" label="#" width="150"/>
            <el-table-column prop="sysCustomerName" label="Name" width="120"/>
            <el-table-column prop="sysCustomerSex" label="CustomerSex" width="120"/>
            <el-table-column prop="sysCustomerAddress" label="Address" width="220"/>
            <el-table-column prop="sysCustomerIdcardNumber" label="IdcardNumber" width="120"/>
            <el-table-column prop="sysCustomerIdentityType" label="IdentityType" width="120"/>
            <el-table-column prop="sysCustomerPhone" label="CustomerPhone" width="130"/>
            <el-table-column prop="sysCustomerCreateTime" label="CreateTime" width="120"/>
            <el-table-column prop="sysCustomerUpdateTime" label="UpdateTime" width="120"/>
            <el-table-column fixed="right" label="Operations" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click.prevent="handleClickDelete(scope.row)">Detail
                    </el-button>
                    <el-button link type="primary" size="small">Edit</el-button>
                </template>
            </el-table-column>
            <el-empty description="description"/>
        </el-table>
        <br>
        <el-pagination
            style="justify-content: center;"
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            background
            :page-sizes="[10, 20, 30]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pageTotal"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />


    </a-card>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';
import {DownOutlined, UpOutlined} from '@ant-design/icons-vue';
import axios from "axios";

export default defineComponent({
    name: "Customer",
    components: {},
    data() {
        return {
            formCustomer: {
                sysCustomerIdcardNumber: "",
                sysCustomerName: "",
                sysCustomerPhone: "",
                sysCustomerSex: "",
            },
            tableData: [],
            currentPage: 1,
            pageSize: 10,
            pageTotal: 0,
        };
    },
    created() {
        this.tableData = null;
    },
    methods: {
        queryEligibleUserInfo() {
            let _this = this;
            axios.post('/customer/customer-user/geteligibleuser/' + _this.currentPage + '/' + _this.pageSize, _this.formCustomer)
                .then(function (response) {
                    if (response.data.length >= 2) {
                        _this.tableData = null;
                        _this.tableData = response.data[0];
                        _this.pageTotal = response.data[1];
                    } else {
                        _this.tableData = null;
                    }
                });
        },

        handleSizeChange(val) {
            this.pageSize = val;
            this.tableData = null;
            this.getAllCustomUser();
        },

        handleCurrentChange(val) {
            this.currentPage = val;
            this.tableData = null;
            this.getAllCustomUser();
        },
        handleClickDelete(row) {
            console.log(row)
            let _this = this;
            this.$confirm('此操作将永久删除该用户信息, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
            // .then(() => {
            //     axios.delete('/admin/admin-user/deleteadminuser/' + row.sysCustomerId).then(function (res) {
            //         if (res.data) {
            //             _this.$message({
            //                 type: 'success',
            //                 message: '删除成功!'
            //             });
            //             _this.getAllAdminInfo();
            //         } else {
            //             _this.$message.error('删除失败！');
            //         }
            //     }).catch(function (error) {
            //         _this.$message.error('网络错误，请检查网络连接！');
            //     });
            // }).catch(() => {
            //     _this.$message({
            //         type: 'info',
            //         message: '已取消删除'
            //     });
            // });
        }

    },
});
</script>

<style lang="scss">

</style>