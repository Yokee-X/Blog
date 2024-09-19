<template>
    <div class="pointer" ref="pointer">

    </div>
</template>
<script setup>
import { toValue } from 'vue';
import { ref, useTemplateRef, onMounted,onBeforeUnmount } from 'vue';

const pointer = useTemplateRef('pointer')
let ticking = false;
let mouseX = 0;
let mouseY = 0;

onMounted(() => {
    window.addEventListener('mousemove', move);
})
onBeforeUnmount(() => {
    window.removeEventListener('mousemove', move);
})
function  move(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // 如果还没有请求动画帧，开始一个新的帧
    if (!ticking) {
        window.requestAnimationFrame(updatePointerPosition);
        ticking = true; // 标记已请求动画帧
    }
}

// 更新指针位置的函数
function updatePointerPosition() {
    if (pointer.value) {
        pointer.value.style.left = mouseX + 'px';
        pointer.value.style.top = mouseY + 'px';
    }
    ticking = false; // 重置标记，允许下一次鼠标移动触发新的动画帧
}

</script>

<style scoped lang="scss">
@import "@/styles/theme.scss";
.pointer {
    @include useTheme {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background: getVar(background-color);
    position: fixed;
    top: -100px;
    left: -100px;
    mix-blend-mode: difference;
    pointer-events: none;
    // isolate: isolate;
}
}
</style>