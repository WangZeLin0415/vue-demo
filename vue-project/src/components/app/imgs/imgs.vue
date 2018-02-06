<template>
    <div style="margin-left:50px">
        <p style="display:flex;align-items:center">
            <span style="width:100px">图片类型</span>
             <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.type"
                :label="item.label"
                :value="item.type">
            </el-option>
  </el-select>
        </p>

        <el-upload
            class="upload-demo"
            action="imgs/create"
            :on-remove="handleRemove"
            :file-list="fileList2"
             :on-change="newhandleChange"
            :auto-upload="false"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <p> 
            <el-button :plain="true" @click="successBot" type="success">保存</el-button>
            <el-button @click="callBack" type="warning">返回</el-button>
        </p>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: 'Img',
  data () {
    return {
         options: [{
          type: '1',
          label: '主页图片'
        }, {
          type: '2',
          label: '剧情图片'
        }],
        value: '',
        fileList2:[],
        url:"",
    }
  },
  computed:{
      ...mapState("img",["imgId","movieId"])
  },
  methods:{
      callBack(){
          this.$router.push({
              name:"Movie"
          })
      },
      successBot(){
          if(this.url!=""&&this.value!=""){
              this.$store.dispatch("img/successBot",{
                  movieId:this.$route.params.movieId,
                  type:this.value,
                  url:this.url
              })
              this.$message('上传成功');
          }else{
              this.$message('数据为空，不能上传'); 
          }
      },
      newhandleChange(file, fileList){
          this.url ="/images/movies/"+ file.name
      },
    
    handleRemove(file, fileList) {
        console.log(file, fileList);
      },
  }
}
</script>