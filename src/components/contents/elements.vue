<template>
    <div>
        <h1 class="page-header">Element: <span class="page-header">{{type}}</span></h1>
        <button type="button" class="btn btn-success save-button">Save</button>

        <div class="table-responsive">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th class="width-min">#</th>
                  <th>Attributes current name</th>
                  <th>Attributes new name</th>
                  <th>Remove attribute</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in availableElementsAttributes">
                  <td class="indexColumn">{{index+1}}</td>
                  <td class="currentColumn">{{item.current}}</td>
                  <td><input type="text" placeholder="" v-bind:value="item.new"></td>
                  <td>
                      <input type="checkbox">
                  </td>
                </tr>               
              </tbody>
            </table>
          </div>
    </div>
</template>
 
<script>
import axios from "axios";
export default {
  name: "el_elements",
  data() {
    return {
        msg: "Elements Content page",
        type: "",
        availableElementsAttributes: [],
    };
  },
  created: function() {
    console.log("elements page created");
    this.type = this.$route.query.type;
    //Load selected page
    this.getAvailableElementsAttributes();
  },
  methods: {
    getAvailableElementsAttributes: function() {
      axios
        .get("http://elayoutexport.test/api/datamatch/elements/available/attributes", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token")
          }
        })
        .then(
          response => {
            this.availableElementsAttributes = JSON.parse(response.data.html);
          },
          error => {
            this.$swal("Invalid data provided");
          }
        );
    }
  }
};
</script>
<style scoped>
.page-header .page-header {
  color: red;
  text-transform: capitalize;
}
.table .width-min { 
    width: 10%;
    font-size: 20px;
}
.table th {
    width: 30%;
}
.table input {
    padding-left: 10px;
    width: 100%;
    border: 1px solid #CCC;
    border-radius: 2px;
}    

.table input[type='checkbox'] {
    padding-top: 50px;
}

.table .currentColumn{
    font-size: 20px;
}

.save-button{
    float: right;
    margin-top: -45px;
}  

.indexColumn{
    font-size: 20px;
}  
</style>
