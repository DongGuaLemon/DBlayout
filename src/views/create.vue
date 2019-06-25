<template>
  <div class="create">
    <div>
    <b-form inline>
    <b-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="輸入欄位"
    ></b-input>
    <b-button variant="primary">搜尋</b-button>
  </b-form>
  </div>
  <b-container style="margin-top:20px;" class="bv-example-row">
    <b-row class="justify-content-md-center">
        <b-col cols="6">
          <div>
            <b-input-group
              v-for="size in list"
              :key="size"
              :size="size"
              class="mb-4"
              :prepend="size.label"
            >
              <b-form-input></b-form-input>
            </b-input-group>
          </div>
           <b-button size="md" text="Button" variant="success">新增</b-button>
        </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'create',
  data() {
    return {
      list:[
        {label:'id'},
        {label:'name'},
        {label:'user'}
      ],
    }
  },
}
</script>
<style>
.create{
  height:80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
