<template>
<div class="selectpage">
  <div class="flexcolumn">
   <div class="selectpagetop">
    <b-form @submit="onSubmit" v-if="show">
      <!-- <b-form-group
        id="input-group-1"
        label="資料庫-欄位"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.DB"
          type="text"
          placeholder="輸入欄位"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="資料表-欄位:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.table"
          placeholder="輸入欄位"
        ></b-form-input>
      </b-form-group> -->

      <b-form-group id="input-group-3" label="Keywords:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.keyword"
          placeholder="Enter Keywords"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
  <b-container style="margin-top:20px;" class="bv-example-row">
    <b-row class="justify-content-md-center">
      <b-col cols="12">
        <div class="selectpagebottom">
          <b-card
            v-for="(item,index) in list"
            :key="index"
            :title="item[0]"
            :img-src="item[3]"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
             ID:{{item[2]}}
            </b-card-text>

            <b-button :href="item[1]" variant="primary">前往網址</b-button>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
    <div class="mt-3" v-if="this.list.length!=0" style="margin:0 auto" @click="pagination">
      <b-pagination v-model="currentPage" :total-rows="rows"></b-pagination>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import url from '../axiosurl'
  export default {
    data() {
      return {
        form: {
          // DB: '',
          // table: '',
          keyword:'',
        },
        show: true,
        list:[
                // { ID:1,date:'2019-05-1',addressname:'123132132131321',img:'https://picsum.photos/600/300/?image=25'},
                // { ID:2,date:'2019-05-2',addressname:'13213213213321',img:'https://picsum.photos/600/300/?image=25'},
                // { ID:3,date:'2019-05-12',addressname:'231313212313',img:'https://picsum.photos/600/300/?image=25'},
                // { ID:4,date:'2019-05-21',addressname:'1231',img:'https://picsum.photos/600/300/?image=25'},
                // { ID:5,date:'2019-05-22',addressname:'4546465464',img:'https://picsum.photos/600/300/?image=25'},
                // { ID:6,date:'2019-05-23',addressname:'4564654654654564654',img:'https://picsum.photos/600/300/?image=25'}
              ],
       rows: 150,
        currentPage: 1
      }
    },
    methods: {
      onSubmit(evt) {
        var list = JSON.parse(localStorage.getItem("filename") || '[]')
        console.log(list)
        let vm=this;
        axios({
          method:'GET',
          url:`${url.axiosURL()}search/${list[0].file_name}/${list[0].table_name}/url/${vm.form.keyword}/${vm.currentPage}`,
          responseType: 'json',
                headers: {
                  'Content-type': 'application/json',
                  //'Authorization': 'Client-ID' + id
            },
            }).then(function(response){
                console.log(response.data);
                vm.list=[];
                for (let i in response.data) {
                    if(i<5){
                      vm.list.push(response.data[i])
                    }  
                }
                
            }).catch(function(error){
                console.log(error);
            })
        
      },
      pagination(){
        var list = JSON.parse(localStorage.getItem("filename") || '[]')
        console.log(list)
        let vm=this;
        axios({
          method:'GET',
          url:`${url.axiosURL()}search/${list[0].file_name}/${list[0].table_name}/url/${vm.form.keyword}/${vm.currentPage}`,
          responseType: 'json',
                headers: {
                  'Content-type': 'application/json',
                  //'Authorization': 'Client-ID' + id
            },
            }).then(function(response){
                console.log(response.data);
                vm.list=[];
                 for (let i in response.data) {
                    if(i<5){
                      vm.list.push(response.data[i])
                    }  
                }
            }).catch(function(error){
                console.log(error);
            })
      }
      // onReset(evt) {
      //   evt.preventDefault()
      //   // Reset our form values
      //   this.form.email = ''
      //   this.form.name = ''
      //   this.form.food = null
      //   // Trick to reset/clear native browser form validation state
      //   this.show = false
      //   this.$nextTick(() => {
      //     this.show = true
      //   })
      // }
    }
  }
</script>
<style>
.selectpagetop input{
  width: 30vw
}
.selectpage{
  width: 100%;
  display: flex;
  justify-content: center;
}
.selectpagetop{
  margin: 0 auto;
}
.flexcolumn{
  display: flex;
  flex-direction: column;
}
.selectpagebottom{
  display:flex;
  flex-wrap: wrap;
  justify-content:space-around;
}
</style>
