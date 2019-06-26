<template>
  <div class="create">
  <b-container style="margin-top:20px;" class="bv-example-row">
    <b-row class="justify-content-md-center">
        <b-col cols="6">
          <div>
        <b-form @submit.stop.prevent="onSubmit">
            <b-form-group v-for="(size,index) in list" :key="index" id="example-input-group-1" :label="size.label" label-for="example-input-1">
            <b-form-input
              size="md"
              class="mb-4"
              v-model="size.value"
            >
            </b-form-input>
            </b-form-group>
            <b-button size="md" text="Button" type="submit" variant="success">新增</b-button>
            </b-form>
          </div>
        </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import url from '../axiosurl'
export default {
  name: 'create',
  data() {
    return {
      list:[
        {label:'file_name',value:null},
        {label:'table_name',value:null,required:true},
        {label:'tile1',value:null,required:true},
        {label:'tile2',value:null,required:true},
        {label:'tile3',value:null},
        {label:'tile4',value:null},
        {label:'tile5',value:null},
        {label:'tile6',value:null},
        {label:'tile7',value:null},
        {label:'tile8',value:null},
        
      ],
    }
  },
  methods:{
      onSubmit(){
        var comment = {file_name:this.list[0].value,table_name:this.list[1].value}
        //从localStorage中获取所用的评论
        var list = JSON.parse(localStorage.getItem("filename") || '[]')
        list.unshift(comment)
        localStorage.setItem('filename',JSON.stringify(list))
        for (let i in this.list) {
           if(this.list[i].value==null){
               this.list[i].value='NULL'
           }
        }
          let vm=this;
        axios({
            method:'GET',
            url:`${url.axiosURL()}create/${this.list[0].value}/${vm.list[1].value}/${vm.list[2].value}/${vm.list[3].value}/${vm.list[4].value}/${vm.list[5].value}/${vm.list[6].value}/${vm.list[7].value}/${vm.list[8].value}/${vm.list[9].value}`,
             responseType: 'json',
                    headers: {
                        'Content-type': 'application/json',
                        //'Authorization': 'Client-ID' + id
            },
            }).then(function(response){
                console.log(response.data);
                for(let i in vm.list){
                    vm.list[i].value=null
                }
            }).catch(function(error){
                console.log(error);
            })
      }
  },
}
</script>
<style>
.create{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
