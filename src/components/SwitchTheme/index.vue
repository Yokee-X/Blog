<template>
    <div class="switch">

        <label class="sider" for="switch">
            <input type="checkbox" id="switch" @click="changeTheme()" />
            <div class=" round">
                <component :is="components[theme]"></component>
            </div>
        </label>
    </div>
</template>

<script setup>
import IconDark from '../icons/IconDark.vue';
import IconLight from '../icons/IconLight.vue';
import { onMounted, ref } from 'vue';
const components = { 'light': IconLight, 'dark': IconDark }
const theme = ref('light');
const changeTheme = (setTheme) => {
    const html = document.querySelector('html')
    if (setTheme) {
        html.setAttribute('theme', setTheme)
        theme.value = setTheme
    } else {
        const curTheme = html.getAttribute('theme')
        let temp = curTheme === 'dark' ? 'light' : 'dark'
        html.setAttribute('theme', temp)
        theme.value = temp
    }
}
onMounted(() => {
    changeTheme('light')
})
</script>

<style lang="scss">
@import "@/styles/theme.scss";

$size: 3rem;
$roundSize: calc($size - 4px);

.switch {
    display: flex;
    align-items: center;

    @include useTheme {
        .sider {
            cursor: pointer;
            position: relative;
            width: $size * 2;
            height: $size;
            border-radius: $size;
            background: getVar(primary-color);
            padding: 2px;

            input {
                opacity: 0;
                width: 0;
                height: 0;
            }

            .round {
                position: absolute;
                top: 2px;
                left: 0px;
                width: $roundSize;
                height: $roundSize;
                border-radius: 100%;
                background: getVar(background-color);
                transition: all 0.3s;
                line-height: $roundSize;
                font-size: 2rem;
                color: getVar(link-color);
                transform: translateX(2px);
                display: flex;

                svg {
                    margin: auto;
                }
            }

            input:checked~.round {
                transform: translateX(calc($size + 2px));
            }

        }
    }

}
</style>