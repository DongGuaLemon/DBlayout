<template>
<div style="width:100%;display:flex; flex-direction: column;">
    <b-container class="bv-example-row">
        <b-row class="justify-content-md-center">
            <b-col cols="8">
                <b-form @submit="onSubmit" v-if="show">
                <b-form-group
                    id="input-group-1"
                    label="資料庫-欄位:"
                    label-for="input-1"
                >
                    <b-form-input
                    id="input-1"
                    v-model="form.DB"
                    type="text"
                    required
                    placeholder="輸入欄位"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="資料表-欄位:" label-for="input-2">
                    <b-form-input
                    id="input-2"
                    v-model="form.table"
                    required
                    placeholder="輸入欄位"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Keywords:" label-for="input-3">
                    <b-form-input
                    id="input-3"
                    v-model="form.keywords"
                    required
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
                        <b-button size="sm" variant="danger " @click="showMsgBoxOne(row.toggleDetails)" class="ml-2">
                            刪除
                        </b-button>
                    </div>
                    <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
                </template>
                </b-table>
            </b-col>
        </b-row>
    </b-container>
    <div class="mt-3" style="margin:0 auto;">
        <b-pagination v-model="currentPage" :total-rows="rows"></b-pagination>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                DB: '',
                table: '',
                keyword:'',
            },
            show:true,
            fieldrecord: {ID:{label:'ID'},key:{label:'key'}, setting:{label:'操作'}},
            items: [
                { ID: 'Dickerson', key: 'Macdonald' },
                {  ID: 'Larsen', key: 'Shaw' },
                {
                    ID: 'Geneva',key: 'Wilson',_showDetails: true
                },
                { ID: 'Jami', key: 'Carney' }
            ],
            boxOne: '',
            rows: 150,
            currentPage: 1
        }
    },
    methods:{
        showMsgBoxOne() {
        this.boxOne = ''
        this.$bvModal.msgBoxConfirm('確定要刪除嗎?')
          .then(value => {
            this.boxOne = value
          })
          .catch(err => {
            // An error occurred
          })
      },
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      }    
    }
}
</script>
<style>

</style>
