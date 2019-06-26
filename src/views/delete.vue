<template>
<div style="width:100%;display:flex; flex-direction: column;">
    <b-container class="bv-example-row">
        <b-row class="justify-content-md-center">
            <b-col cols="8">
                <b-form @submit="onSubmit" v-if="show">
                <!-- <b-form-group
                    id="input-group-1"
                    label="資料庫-欄位:"
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
            </b-col>
        </b-row>
    </b-container> 
    <b-container class="bv-example-row" style="margin-top:20px;">
        <b-row class="justify-content-md-center">
            <b-col cols="8">
                <b-table :items="items" :fields="fieldrecord" striped class="modaltable">
                <template slot="setting" slot-scope="row">
                    <div style="display:flex">
                        <b-button size="sm" variant="danger " @click="showMsgBoxOne(row)" class="ml-2">
                            刪除
                        </b-button>
                    </div>
                    <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
                </template>
                </b-table>
            </b-col>
        </b-row>
    </b-container>
    <div class="mt-3" style="margin:0 auto;" @click="pagination">
        <b-pagination v-model="currentPage" :total-rows="rows"></b-pagination>
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
            show:true,
            fieldrecord: {0:{label:'ID'},1:{label:'檔案名稱'}, setting:{label:'操作'}},
            items: [
            ],
            boxOne: '',
            rows: 150,
            currentPage: 1
        }
    },
    methods:{
        showMsgBoxOne(row) {
        this.boxOne = ''
        this.$bvModal.msgBoxConfirm('確定要刪除嗎?')
          .then(value => {
            this.boxOne = value
            this.delete(row)
            })
          .catch(err => {
            // An error occurred
          })
        
      },
      delete(row){
         var list = JSON.parse(localStorage.getItem("filename") || '[]')
            console.log(list)
            let vm=this;
            axios({
                method:'GET',
                url:`${url.axiosURL()}delete/${list[0].file_name}/${list[0].table_name}/${row.item[0]}`,
                responseType: 'json',
                        headers: {
                        'Content-type': 'application/json',
                        //'Authorization': 'Client-ID' + id
                    },
                    }).then(function(response){
                        console.log(response.data);
                        vm.onSubmit()
                    }).catch(function(error){
                        console.log(error);
                    })
      },
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
                vm.items=[];
                var swapItem = function(arr, fromIndex, toIndex) {
                    arr[toIndex] = arr.splice(fromIndex, 1, arr[toIndex])[0];
                    return arr;
                };
                for(let i in response.data){
                    response.data[i].splice(1,1)
                    swapItem(response.data[i], 1,0)
                }
                vm.items=response.data
                console.log(response.data);
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
                vm.items=[];
                var swapItem = function(arr, fromIndex, toIndex) {
                    arr[toIndex] = arr.splice(fromIndex, 1, arr[toIndex])[0];
                    return arr;
                };
                for(let i in response.data){
                    response.data[i].splice(1,1)
                    swapItem(response.data[i], 1,0)
                }
                vm.items=response.data
            }).catch(function(error){
                console.log(error);
            })
      } 
    },
    mounted(){
        
    }
}
</script>
<style>

</style>
