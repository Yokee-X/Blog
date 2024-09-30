<template>
    <div class="fn-bar">
        <Row>
            <Col span="12">1</Col>
            <Col span="12">2</Col>
            <Col span="12">3</Col>
            <Col span="12">4</Col>
        </Row>
    </div>
</template>

<script setup>
import Col from '../Grid/Col.vue';
import Row from '../Grid/Row.vue';


</script>

<style scoped lang="scss">
.fn-bar{
    width: 300px;
    height:100vh
}

</style>