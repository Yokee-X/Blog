<template>
    <div class="container">
        <div class="wrapper">

            <div class="row" v-for="(item, ind) in arr" :key="ind">
                <div class="col" v-for="(chunk, i) in item" :key="i" :style="{ background:  tileColors[chunk]  }">
                    {{ chunk ? chunk : "" }}
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import Game from './class'
import { tileColors } from './class/color';
const game = new Game();
let arr = ref(game.checkerboard);
onMounted(() => {
    window.addEventListener("keydown", e => {
        switch (e.key) {
            case "ArrowUp":
                game.move("up");
                arr.value = [...game.checkerboard];
                break;
            case "ArrowDown":
                game.move("down");
                arr.value = [...game.checkerboard];
                break;
            case "ArrowLeft":
                game.move("left");
                arr.value = [...game.checkerboard];
                break;
            case "ArrowRight":
                game.move("right");
                arr.value = [...game.checkerboard];
                break;
            default:
                return;
        }
    });

    // game.move('right');
});

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
</style>