<template>
    <div class="header">
        <div class="header_main">
            <img src="@/assets/logo_s.png" alt="Sap" class="logo" />
            <div class="nav">
                <ul>
                    <li>
                        <a>首页</a>
                    </li>
                    <li>
                        <a>技术</a>
                    </li>
                    <!-- <li>
                        <a>待定</a>
                    </li>
                    <li>
                        <a>待定</a>
                    </li> -->
                </ul>
            </div>
            <SwitchTheme />
        </div>
    </div>
</template>

<script setup>
import SwitchTheme from "../SwitchTheme/index.vue";

</script>

<style scoped lang="scss">
@import "@/styles/theme.scss";

.header {
    @include useTheme {
        width: 100%;
        margin: 0 auto;
        height: 60px;
        background-color: getVar(navbar-background-color);
        transition: all 0.3s;

        .header_main {
            width: 800px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            .logo {
                width: 60px;
                height: 60px;
            }

            .nav {
                text-align: right;
                // margin-left: auto;
                line-height: 60px;

                ul {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;

                    li {

                        &:not(:last-child) {
                            margin-right: 60px;
                        }

                        a {
                            cursor: pointer;
                            font-size: 2rem;
                            color: getVar(primary-color);
                            font-weight: 500;
                            line-height: 1.5;
                            padding-bottom: 8px;
                            background-repeat: no-repeat;
                            background-image: linear-gradient(to right, getVar(link-color), getVar(link-color));
                            background-size: 0% 2px;
                            background-position: 0% 100%;
                            transition: all 0.3s;

                            &:hover {
                                color: getVar(link-color);
                                background-size: 100% 2px;
                            }
                        }
                    }
                }
            }
        }


    }

    @media screen and (max-width: 1200px) {
        & {}
    }
}
</style>