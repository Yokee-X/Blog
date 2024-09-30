<template>
    <div class="sap-row">
        <slot></slot>
    </div>


</template>

<script setup>
    defineProps({
        gutter:{
            type:Number,
            default:0
        },
        align:{
            type:String,
            default:'center'
        },
        justify:{
            type:String,
            default:'start'
        }

    })
</script>

<style scoped lang="scss">
    .sap-row {
        display: flex;
        flex-flow: row wrap;
        
    }
</style>
