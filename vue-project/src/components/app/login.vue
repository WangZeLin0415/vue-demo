<template>
 <div>
     <h1>login</h1>
     <input type="button" @click="reg" value="注册">
     </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      reg(){
          console.log("in")
          this.$router.push({
              path:'/reg'
          })
      }
  }
}
</script>

