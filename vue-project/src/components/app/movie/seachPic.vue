 <template>
 <div style="margin-left:50px">
    <el-table
      :data="imgPic.rows"
      style="width: 100%">
      <el-table-column
        prop="type"
        label="图片类型"
        width="80">
      </el-table-column>
      <el-table-column
        prop="url"
        label="图片"
        width="400">
      </el-table-column>
       <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
          <el-popover
                ref="popover4"
                placement="right"
                width="400"
                trigger="click">
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
            <el-button @click="successBot" type="success">保存</el-button>
        </p>
    </div>
            </el-popover>
        <el-button  v-popover:popover4 @click="handleClick(scope.row)" type="text" size="small">新增</el-button>
        <el-button  @click="handleRemove(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    </div>
  </template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: 'SeachPic',
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
        curPage:1,
        eachPage:10,
    }
  },
  mounted(){
      this.getImg()
  },
  computed:{
      ...mapState("movie",["imgPic"])
  },
  methods:{
    getImg(){
        this.$store.dispatch({
          type:"movie/getImg",
          movieId:this.$route.params._id,
          page:this.curPage,
          rows:this.eachPage
      })
      },
    newhandleChange(file, fileList){
          this.url ="/images/movies/"+ file.name
      },
    
    handleRemove(file, fileList) {
      
      },
      successBot(){
           if(this.url!=""&&this.value!=""){
              this.$store.dispatch("img/successBot",{
                  movieId:this.$route.params._id,
                  type:this.value,
                  url:this.url
              })
              alert("上传成功")
          }else{
              alert("参数有问题") 
          }
          this.getImg()
      },
     handleClick(row) {
      },
      handleRemove(row){
          this.$store.dispatch({
            type:"movie/handleRemove",
            movieId:this.$route.params._id,
            imgId:row._id
          })
          this.getImg()
      }
  }
}
</script>