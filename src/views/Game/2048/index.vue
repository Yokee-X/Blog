<template>
    <div class="container">
        <div class="wrapper">

            <div class="row" v-for="(item, ind) in arr" :key="ind">
                <div class="col" v-for="(chunk, i) in item" :key="i" :style="{ background: tileColors[chunk] }">
                    {{ chunk ? chunk : "" }}
                </div>
            </div>
        </div>
    </div>
    <div class="modal" v-show="visible">
        <h1 class="modal_title">游戏结束</h1>
        <div class="modal_btn">
            <button @click="restart()">重玩</button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import Game from './class'
import { tileColors } from './class/color';
const game = new Game();
let arr = ref(game.checkerboard);
let visible = ref(false)
const handleKeydown = (e) => {
    switch (e.key) {
        case "ArrowUp":
            visible.value = game.move("up");
            arr.value = [...game.checkerboard];
            break;
        case "ArrowDown":
            visible.value = game.move("down");
            arr.value = [...game.checkerboard];
            break;
        case "ArrowLeft":
            visible.value = game.move("left");
            arr.value = [...game.checkerboard];
            break;
        case "ArrowRight":
            visible.value = game.move("right");
            arr.value = [...game.checkerboard];
            break;
        default:
            return;
    }
    if (visible.value) {
        window.removeEventListener('keydown', handleKeydown);
    }
};
onMounted(() => {
    window.addEventListener("keydown",handleKeydown);
});
const restart = ()=>{
    visible.value = false
    arr.value = game.init()
    window.addEventListener("keydown",handleKeydown);

}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    height: 100vh;
}

.wrapper {
    margin: auto;
}

.row {
    display: flex;
}

.col {
    width: 100px;
    height: 100px;
    border: 1px solid #000;
    text-align: center;
    line-height: 100px;
    font-size: 3rem;
}
.modal{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba($color: #fff, $alpha: 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &_title{
        font-size: 70px;
    }
    &_btn{
        padding-top: 40px;
        button{
            padding: 0 10px;
            font-size: 40px;
            outline: none;
            border-radius: 12px;
            border: 4px solid #3c3a32;
            background: #fff;
            cursor: pointer;
        }
    }
}
</style>