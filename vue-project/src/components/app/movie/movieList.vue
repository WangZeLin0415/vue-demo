<template>
<div style="margin-left:50px">
     <el-table 
      :data="rows"
      style="width: 100%;">
      <el-table-column
        prop="cName"
        label="电影名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="eName"
        label="英文名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型"
         width="150">
      </el-table-column>
       <el-table-column
        prop="country"
        label="国家"
         width="120">
      </el-table-column>
       <el-table-column
        prop="duration"
        label="时长"
         width="100">
      </el-table-column>
       <el-table-column
        prop="avg"
        label="平均分"
         width="100">
      </el-table-column>
       <el-table-column
        prop="release"
        label="上映时间"
         width="200">
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
      <el-popover
        ref="popover4"
        placement="right"
        width="800"
        trigger="click">
       <div style="margin-left:50px" >
      <p style="display:flex;width:500px;align-items:center;margin-bottom:20px">
        <span style="width:100px;text-align:right">电影名称</span>
         <el-input
          placeholder="请输入内容"
          v-model="cName"
          style="width:500px;margin-left:20px"
          clearable>
        </el-input>
      </p>
      <p style="display:flex;width:500px;align-items:center;margin-bottom:20px">
        <span style="width:100px;text-align:right">英文名称</span>
         <el-input
          placeholder="请输入内容"
          v-model="eName"
          style="width:500px;margin-left:20px"
          clearable>
        </el-input>
      </p>
      <p style="display:flex;width:500px;align-items:center;margin-bottom:20px">
        <span style="width:100px;text-align:right">类型</span>
         <el-input
          placeholder="请输入内容"
          v-model="type"
          style="width:500px;margin-left:20px"
          clearable>
        </el-input>
      </p>
      <p style="display:flex;width:500px;align-items:center;margin-bottom:20px">
        <span style="width:100px;text-align:right">国家</span>
         <el-input
          placeholder="请输入内容"
          v-model="country"
          style="width:500px;margin-left:20px"
          clearable>
        </el-input>
      </p>
      <p style="display:flex;width:500px;align-items:center;margin-bottom:20px">
        <span style="width:100px;text-align:right">时长</span>
         <el-input
          placeholder="请输入内容"
          v-model="duration"
          style="width:500px;margin-left:20px"
          clearable>
        </el-input>
      </p>
      <p style="display:flex;width:500px;align-items:center;margin-bottom:20px">
        <span style="width:100px;text-align:right">上映时间</span>
         <el-input
          placeholder="请输入内容"
          v-model="release"
          style="width:500px;margin-left:20px"
          clearable>
        </el-input>
      </p>
      <p style="display:flex;width:500px;align-items:center;margin-bottom:20px">
        <span style="width:100px;text-align:right">平均分</span>
         <el-input
          placeholder="请输入内容"
          v-model="avg"
          style="width:500px;margin-left:20px"
          clearable>
        </el-input>
      </p>
      <p style="display:flex;width:500px;align-items:center;margin-bottom:20px">
        <span style="width:100px;text-align:right">详情</span>
         <el-input
            type="textarea"
            :rows="4"
            style="margin-left:20px;width:500px"
            placeholder="请输入内容"
            v-model="synopsis">
        </el-input>
      </p>

      <p style="width:500px;text-align:center">
        <el-button @click="handleUpdate" type="success">确认修改</el-button>
        
        </p>
    </div>
        </el-popover>
        <el-button v-popover:popover4 @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
         <el-button @click="seartchPic(scope.row)" type="text" size="small">查看图片</el-button>
        <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
    </el-table>

     <div class="block">
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="curPage"
      :page-sizes="[5, 10, 20, 30]"
      :page-size="eachPage"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: 'MovieList',
  data () {
    return {
        cName:"",
        eName:"",
        type:"",
        country:'',
        duration:"",
        release:"",
        synopsis :"",
        _id:"",
        avg:"",
        CurPage:1,
        EachPage:5,
    }
  },
  computed:{
      ...mapState("movie",["rows","curPage","eachPage","total"])
  },
  methods:{
   seartchPic(row){
     this.$router.push({
       name:"SeachPic",
       params:{
        _id:row._id
       }
     })

   },
    handleUpdate(){
      this.$store.dispatch("movie/handleUpdate",{
            _id:this._id,
            cName: this.cName ,
            eName: this.eName ,
            type: this.type ,
            country: this.country,
            duration: this.duration ,
            release: this.release ,
            avg:this.avg,
            synopsis: this.synopsis       
      })
      this.getMoviesByPage()
    },
    handleClick(row){
      this._id = row._id
      this.cName = row.cName
      this.eName = row.eName
      this.type = row.type
      this.country = row.country
      this.duration = row.duration
      this.release = row.release
      this.synopsis = row.synopsis
      this.avg = row.avg,
      this.synopsis = row.synopsis
    },
     handleSizeChange(val) {
       this.EachPage = val
        this.getMoviesByPage()
      },
      handleCurrentChange(val) {
       this.CurPage = val
       this.getMoviesByPage()
      },
    remove(row){
      this.$store.dispatch({
        type:"movie/remove",
        _id:row._id
      })
      this.getMoviesByPage()
    },
    getMoviesByPage(){
      this.$store.dispatch({
        type:"movie/getMoviesByPage",
        page:this.CurPage,
        rows:this.EachPage
      })
    }
  },
  mounted(){
    this.getMoviesByPage()
  }
}
</script>