<template>
    <div class="myHello">
        <div>
            <img src="../../static/images/gakki.png" alt="myGakki">
        </div>
        <p class="text">今天又是垣气满满的一天</p>
    </div>
</template>

<script>
export default {
    name: 'myHello'
}
</script>

<style scoped>
    div,p {
        margin: 0;
        padding: 0;
    }
    .myHello .text {
        font-size: 50px;
    }
</style>

