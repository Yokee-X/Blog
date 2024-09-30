<template>
    <div class="sap-col" :class="'sap-col-' + span">
        <slot></slot>
    </div>
</template>

<script setup>
defineProps({
    span: Number,
})
</script>

<style scoped lang="scss">
@mixin generate-grid($total-columns) {
    @for $i from 1 through $total-columns {
        &-#{$i} {
            width: (100% / $total-columns) * $i;
        }
    }
}

.sap-col {
    position: relative;
    min-height: 1px;
    @include generate-grid(24);
}
</style>