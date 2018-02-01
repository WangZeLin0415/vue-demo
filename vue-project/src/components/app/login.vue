<template>
 <el-row>
  <el-col :span="8" style="height:1px" ><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light">
      <h1 style="text-align:center;margin-bottom:20px;padding-top:50px" >登陆页面</h1>
     <div class="demo-input-suffix" style="display:flex; align-items:center;justify-content:center;margin-bottom:20px">
            账号:
            <el-input
                placeholder="请输入账号"
                type="text"
                prefix-icon="el-icon-search"
                style="width:300px;margin-left:30px;"
                v-model="input21">
            </el-input>
    </div>

     <div class="demo-input-suffix" style="display:flex;align-items:center;justify-content:center;margin-bottom:20px">
            密码:
            <el-input
                placeholder="请输入密码"
                prefix-icon="el-icon-search"
                type="password"
                style="width:300px;margin-left:30px;"
                v-model="input21">
            </el-input>
    </div>
    <div style="display:flex;justify-content:center;padding-bottom:50px">
       
        <el-button type="primary" @click="info">登陆</el-button>
        <el-button type="success" @click="reg">注册</el-button>
        
    </div>


      </div></el-col>
  <el-col :span="8" style="height:1px"><div class="grid-content bg-purple"></div></el-col>
</el-row>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
    //   input10: '',
        input2: '',
      input21: '',
      input22: '',
      input23: ''
    }
  },
  methods:{
      reg(){
          this.$router.push({
              path:'/reg'
          })
      },
       info(){
            this.$router.push({
                path:'/info'
            })
          }
  }
}
</script>
<style>
    .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .bg-purple {
    background: #fff;
  }
  .bg-purple-light {
    background: gray;
  }
</style>


