<template>
  <div class="inputs">
  <b-container style="margin-top:20px;" class="bv-example-row">
    <b-row class="justify-content-md-center">
        <b-col cols="6">
          <div>
            <b-form @submit.stop.prevent="onSubmit">
            <b-form-group v-for="(size,index) in list" :key="index" id="example-input-group-1" :label="lists[index]" label-for="example-input-1">
            <b-form-input
              size="md"
              class="mb-4"
              v-model="form[index]"
              :disabled="size=='NULL'"
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
  name: 'inputs',
  data() {
    return {
      list:[
      ],
      form:{
       
      },
      label:[]
    }
  },
  methods:{
    onSubmit(){
      var list = JSON.parse(localStorage.getItem("filename") || '[]')
      console.log(list)
      for (let i in this.list) {
           if(this.form[i]==undefined){
               this.form[i]='NULL'
               console.log(this.form)
           }
        }
      let vm=this
      axios({
        method:'GET',
        url:`${url.axiosURL()}input/${list[0].file_name}/${list[0].table_name}/${vm.form[0]}/${vm.form[1]}/${vm.form[2]}/${vm.form[3]}/${vm.form[4]}/${vm.form[5]}/${vm.form[6]}/${vm.form[7]}`,
        responseType: 'json',
        headers: {
          'Content-type': 'application/json',
          //'Authorization': 'Client-ID' + id
          },
        }).then(function(response){
            console.log(response.data);
          }).catch(function(error){
            console.log(error);
    })
    }
  },
  mounted(){
    let vm = this;
    axios({
      method:'GET',
      url:`${url.axiosURL()}input`,
      responseType: 'json',
      headers: {
        'Content-type': 'application/json',
        //'Authorization': 'Client-ID' + id
        },
      }).then(function(response){
          console.log(response.data);
          vm.list=response.data
        }).catch(function(error){
          console.log(error);
    })
  },
  computed:{
    lists(){
      for (var i in this.list) {
         if(this.list[i]!=='NULL'){
           var count=this.list[i]
           this.label.push(count)
         }
      }
     return this.label
    }
  }
}
</script>
<style>
.inputs{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
