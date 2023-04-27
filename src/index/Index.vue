<template>
    <a-watermark content="Ant Design Vue">
        <a-layout class="layout">
            <a-layout-sider class="scrollbar-item" v-model:collapsed="collapsed" :trigger="null" collapsible
                            breakpoint="sm"
                            collapsed-width="0">
                <div class="logo"/>
                <a-menu v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" theme="dark" mode="inline">
                    <a-menu-item key="/home">
                        <router-link to="/home" tag="div">
                            <video-camera-outlined/>
                            <span>Home</span>
                        </router-link>
                    </a-menu-item>
                    <a-sub-menu key="customer">
                        <template #title>
                        <span>
                          <user-outlined/>
                          <span>Customer</span>
                        </span>
                        </template>
                        <a-menu-item key="/customer">
                            <router-link to="/customer" tag="div">
                                <span>Customer</span>
                            </router-link>
                        </a-menu-item>
                        <a-menu-item key="3">Bill</a-menu-item>
                        <a-menu-item key="4">Alex</a-menu-item>
                    </a-sub-menu>
                    <a-menu-item key="5">
                        <video-camera-outlined/>
                        <span>nav 5</span>
                    </a-menu-item>
                    <a-menu-item key="6">
                        <upload-outlined/>
                        <span>6</span>
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-header style="background: #fff; padding: 0">
                    <a-row :wrap="false">
                        <a-col flex="auto">

                            <menu-unfold-outlined
                                v-if="collapsed"
                                class="trigger"
                                @click="() => (collapsed = !collapsed)"
                            />
                            <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)"/>


                        </a-col>
                        <a-col flex="none" style="background: #ffffff;">
                            <div style="padding: 0 50px">
                                <a-dropdown class="header-dropdown">
                                    <div>
                                        <a-avatar :size="{ xs: 48, sm: 48, md: 48, lg: 48, xl: 48, xxl: 48 }">
                                            <template #icon>
                                                <ellipsis-outlined class="header-hover"/>
                                            </template>
                                        </a-avatar>
                                    </div>
                                    <template #overlay>
                                        <a-menu>
                                            <a-menu-item>
                                                <a href="javascript:" @click="tosign">登录</a>
                                            </a-menu-item>
                                            <a-menu-item>
                                                <a href="javascript:">2nd menu item</a>
                                            </a-menu-item>
                                            <a-menu-item>
                                                <a href="javascript:">3rd menu item</a>
                                            </a-menu-item>
                                        </a-menu>
                                    </template>
                                </a-dropdown>
                            </div>
                        </a-col>
                    </a-row>
                </a-layout-header>
                <a-layout-content :style="{ margin: '12px 12px', minHeight: '590px'}">
                    <router-view></router-view>
                </a-layout-content>
                <a-layout-footer style="text-align: center">
                    Ant Design ©2018 Created by Ant UED
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </a-watermark>
</template>
<script>
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    EllipsisOutlined,

} from '@ant-design/icons-vue';
import {defineComponent, ref} from 'vue';
import router from "@/router";

export default defineComponent({
    name: 'Index',
    components: {
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
        EllipsisOutlined
    },
    setup() {
        return {
            selectedKeys: [],
            openKeys: [],
            collapsed: ref(false),
        }
    },
    created() {
        this.refreshCurrentPage()
    },
    methods: {
        tosign() {
            router.push("/sign")
        },
        refreshCurrentPage() {
            //利用路由地址，填充selectedKeys，实现只刷新当前页
            this.selectedKeys = ref([this.$route.path]);
            if (this.selectedKeys[0].split('/')[1] !== null) {
                this.openKeys = ref([this.selectedKeys[0].split('/')[1]])
            }
        }
    },
});
</script>
<style lang="scss">
.layout {
    //height: 100vh;

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }

  .scrollbar-item {
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  .ant-col {
    overflow-y: hidden;
  }

  .header-dropdown {
    height: 48px;
    margin-top: 7px;
    line-height: 48px;
    text-align: center;
  }


  .header-hover {
    display: none;
  }

  .header-dropdown :hover {
    //background: rgba(0,0,0,.5);

    .header-hover {
      width: 50px;
      background: rgba(0, 0, 0, 0.5);
      height: 55px;
      line-height: 55px;
      display: inline-block;
    }
  }
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>