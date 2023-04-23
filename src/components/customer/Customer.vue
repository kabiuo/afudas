<template xmlns="http://www.w3.org/1999/html">
    <a-card :bordered="true">
        <div class="components-form">
            <a-form
                    ref="formRef"
                    name="advanced_search"
                    class="ant-advanced-search-form"
                    :model="formState"
                    @finish="onFinish"
            >
                <a-row :gutter="24">
                    <template v-for="i in 10" :key="i">
                        <a-col v-show="expand || i <= 6" :span="8">
                            <a-form-item
                                    :name="`field-${i}`"
                                    :label="`field-${i}`"
                                    :rules="[{ required: true, message: 'input something' }]"
                            >
                                <a-input v-model:value="formState[`field-${i}`]" placeholder="placeholder"></a-input>
                            </a-form-item>
                        </a-col>
                    </template>
                </a-row>
                <a-row>
                    <a-col :span="24" style="text-align: right">
                        <a-button type="primary" html-type="submit">Search</a-button>
                        <a-button style="margin: 0 8px" @click="() => formRef.resetFields()">Clear</a-button>
                        <a style="font-size: 12px" @click="expand = !expand">
                            <template v-if="expand">
                                <UpOutlined/>
                            </template>
                            <template v-else>
                                <DownOutlined/>
                            </template>
                            Collapse
                        </a>
                    </a-col>
                </a-row>
            </a-form>
        </div>
        <br/>
        <a-table :columns="columns" :data-source="data" :scroll="{ x: 1500, y: 300 }">
            <template #bodyCell="{ column }">
                <template v-if="column.key === 'operation'">
                    <a>action</a>
                </template>
            </template>
        </a-table>

    </a-card>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';
import {DownOutlined, UpOutlined} from '@ant-design/icons-vue';

const columns = [{
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
}, {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
}, {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150,
}, {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150,
}, {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 150,
}, {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 150,
}, {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 150,
}, {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 150,
}, {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 150,
}, {
    title: 'Column 8',
    dataIndex: 'address',
    key: '8',
}, {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
}];

const data = [];

for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
    });
}

export default defineComponent({
    name: "Customer",
    components: {
        DownOutlined,
        UpOutlined,
    },
    setup() {
        const expand = ref(false);
        const formRef = ref();
        const formState = reactive({});
        const onFinish = values => {
            console.log('Received values of form: ', values);
            console.log('formState: ', formState);
        };
        return {
            formRef,
            formState,
            expand,
            onFinish,
            data,
            columns,
        };
    },
});
</script>

<style lang="scss" scoped>
.components-form .ant-form {
  max-width: none;
}

.components-form .search-result-list {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 2px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

[data-theme='dark'] .ant-advanced-search-form {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid #434343;
  padding: 24px;
  border-radius: 2px;
}

[data-theme='dark'] .components-form .search-result-list {
  border: 1px dashed #434343;
  background: rgba(255, 255, 255, 0.04);
}
</style>