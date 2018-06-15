<template>
    <div id="hello">
        <my-hello></my-hello>
    </div>
</template>

<script>
import myHello from '../../components/myHello'
export default {
    name: 'hello',
    components: {
        myHello
    }
}
</script>

<style scoped>
#hello {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>