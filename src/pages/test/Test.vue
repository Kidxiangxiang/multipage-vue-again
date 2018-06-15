<template>
  <div id="test">
      <my-test></my-test>
  </div>
</template>

<script>
import myTest from '../../components/myTest'
export default {
  name: 'Test',
  components: {
    myTest
  }
}
</script>

<style>
#test {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>