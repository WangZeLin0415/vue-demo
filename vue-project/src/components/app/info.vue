<template>
   <el-row class="tac">
  <el-col :span="24" style="display:flex">
    <el-menu
      :router="isRouter"
      default-active="2"
      class="el-menu-vertical-demo"
      model="vertical"
     :collapse=false
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1" route="/info">
        <i class="el-icon-menu"></i>
        <span slot="title">系统管理</span>
      </el-menu-item>
       <el-menu-item-group title="用户管理">
          <el-menu-item index="1-1" route="/info/users">用户管理</el-menu-item>
        </el-menu-item-group>
         <el-menu-item-group  title="电影管理">
          <el-menu-item index="1-2" route="/info/movie">新增电影</el-menu-item>
          <el-menu-item index="1-2-1" route="/info/movieList">电影列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="影院管理">
          <el-menu-item index="1-3" route="/info/studio">新增影院</el-menu-item>
          <el-menu-item index="1-3-1" route="/info/studioList">影院列表</el-menu-item>
        </el-menu-item-group>
         <el-menu-item-group title="影厅管理">
          <el-menu-item index="1-4" route="/info/theather">新增影厅</el-menu-item>
          <el-menu-item index="1-4-1" route="/info/theatherList">影厅列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="排片管理">
          <el-menu-item index="1-5" route="/info/schedule">新增排片</el-menu-item>
          <el-menu-item index="1-5-1" route="/info/scheduleList">排片列表</el-menu-item>
        </el-menu-item-group>
    </el-menu>
     <router-view></router-view>
  </el-col>
</el-row>
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {
       isRouter: true,
    }
  },
  methods:{
   
  }
}
</script>
<style>
    el-menu-item-group{
      height:30px
    }
    el-menu-item{
       height:30px
    }
</style>



