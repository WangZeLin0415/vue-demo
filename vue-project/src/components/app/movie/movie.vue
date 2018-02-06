<template>
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
        <el-button @click="handleSave" :plain="true" type="success">保存</el-button>
        <el-button v-if="istype" type="warning" disabled>上传图片</el-button>
         <el-button v-else type="warning" @click="transPic">上传图片</el-button>
        </p>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: 'Movie',
  data () {
    return {
        cName:"",
        eName:"",
        type:"",
        country:'',
        duration:"",
        release:"",
        synopsis :"",
        avg:"",
        istype:true,
    }
  },
  watch:{
      istype(value){
        console.log(value)
      }
  },
  computed:{
      ...mapState("movie",["movieId"])
  },
  methods:{
    transPic(){
      this.$router.push({
        name:"Img",
        params:{
          movieId:this.movieId
        }
      })
    },
    handleSave(){
      
      if(this.cName!=""&&this.eName!=""&&this.type!=""&&this.country!=""&&this.duration!=""&&this.release!=""&&this.avg!=""&&this.synopsis!=""){
           this.istype= false
           this.$store.dispatch("movie/handleSave",{
            cName:this.cName,
            eName:this.eName,
            type:this.type,
            country:this.country,
            duration:this.duration,
            release:this.release,
            avg:this.avg,
            synopsis:this.synopsis
      })
        this.$message("保存成功，请上传图片")
      }else{
        this.$message("数据为空，不能上传")
      }
     
    }
  }
}
</script>