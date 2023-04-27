<template xmlns="http://www.w3.org/1999/html">
    <a-card :bordered="true">
        <el-form>
            <el-row :gutter="20">
                <el-col :xs="4" :sm="6" :md="8" :lg="8" :xl="11">
                    <el-form-item label="Activity name">
                        <el-input/>
                    </el-form-item>
                </el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="8" :xl="11">
                    <el-form-item label="Activity name">
                        <el-input/>
                    </el-form-item>
                </el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="8" :xl="11">
                    <el-form-item label="Activity name">
                        <el-input/>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="4" :sm="6" :md="8" :lg="8" :xl="11">
                    <el-form-item label="Activity name">
                        <el-input/>
                    </el-form-item>
                </el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="8" :xl="11">
                    <el-form-item label="Activity name">
                        <el-input/>
                    </el-form-item>
                </el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="8" :xl="11">
                    <el-form-item label="Activity name">
                        <el-input/>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :xs="4" :sm="6" :md="8" :lg="8" :xl="11">
                    <el-form-item label="Activity name">
                        <el-input/>
                    </el-form-item>
                </el-col>
                <el-col :xs="4" :sm="6" :md="8" :lg="8" :xl="11">
                    <el-form-item>
                        <el-button type="primary" @click="">Query</el-button>
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
                <template #default>
                    <el-button link type="primary" size="small" @click="">Detail</el-button>
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
            tableData: [],
            currentPage: 1,
            pageSize: 10,
            pageTotal: 0,
        };
    },
    created() {
        this.getAllCustomUser();
    },
    methods: {
        getAllCustomUser() {
            let _this = this;
            axios({
                method: 'get',
                url: '/customer/customer-user/getallcustomer/' + _this.currentPage + '/' + _this.pageSize,
            })
                .then(function (response) {
                    if (_this.tableData === null && response.data.length >= 2) {
                        _this.tableData = null;
                        _this.tableData = response.data[0];
                        _this.pageTotal = response.data[1];
                    } else {
                        _this.tableData = null;
                        _this.getAllCustomUser();
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
        }

    },
});
</script>

<style lang="scss">

</style>