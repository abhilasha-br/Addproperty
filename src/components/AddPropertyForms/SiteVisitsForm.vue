<template>
  <section class="form-section">
    <div class="row">
      <div class="col-sm-12">
        <label class="heading">Site Visits</label>
        <p-fieldset class="custom"  v-for="(sitevisit, k) in  $v.sitevisits.$each.$iter"
          :key="k">
          <template #legend>
            <p-button
              @click="addsitevisitRow"
              class="p-button-rounded p-button-success mr-2"
              icon="pi pi-plus"
            />
            <p-button
             v-if="k > 0"
              @click="deleteRow(k, sitevisit)"
              class="p-button-rounded p-button-danger"
              icon="pi pi-trash"
            />
          </template>
          <div class="row">
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading">
                  Buyer Name <span>*</span>
                </label>
                <p-dropdown
                  id="nameddl"
                  :options="nameddl"
                  optionLabel="name"
                  placeholder="-Select-"
                  class="w-100 p-dropdown-sm"
                  appendTo="body"
                  
                v-model="sitevisit.nameddl.$model"
            :class="{
              'p-invalid':
                (sitevisit.nameddl.$dirty &&
                  sitevisit.nameddl.$invalid) ||
                (submitted && sitevisit.nameddl.$invalid),
            }"
          />
          <small
            v-if="
              (sitevisit.nameddl.$dirty &&
                sitevisit.nameddl.$invalid) ||
              (submitted && sitevisit.nameddl.$invalid)
            "
            class="p-error"
            >Buyer Name is not available.</small
          >
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading"> Date-Time </label>
                <p-calendar
                  id="calendar"
                  appendTo="body"
                  class="p-inputtext-sm w-100"
                  :showTime="true"
                  hourFormat="12"
                  autocomplete="off"
                  :showIcon="true"
                 v-model="sitevisit.calendar.$model"
            :class="{
              'p-invalid':
                (sitevisit.calendar.$dirty &&
                  sitevisit.calendar.$invalid) ||
                (submitted && sitevisit.calendar.$invalid),
            }"
          />
          <small
            v-if="
              (sitevisit.calendar.$dirty &&
                sitevisit.calendar.$invalid) ||
              (submitted && sitevisit.calendar.$invalid)
            "
            class="p-error"
            >Date-Time is not available.</small
          >
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading"> Status </label>
                <p-dropdown
                  id="status"
                  :options="statusDDL"
                  optionLabel="name"
                  placeholder="-Select-"
                  class="w-100 p-dropdown-sm"
                  appendTo="body"
                 v-model="sitevisit.statusDDL.$model"
            :class="{
              'p-invalid':
                (sitevisit.statusDDL.$dirty &&
                  sitevisit.statusDDL.$invalid) ||
                (submitted && sitevisit.statusDDL.$invalid),
            }"
          />
          <small
            v-if="
              (sitevisit.statusDDL.$dirty &&
                sitevisit.statusDDL.$invalid) ||
              (submitted && sitevisit.statusDDL.$invalid)
            "
            class="p-error"
            >Status is not available.</small
          >
              </div>
            </div>
            <div class="col-sm-4">
              <label for="projectName" class="heading"> Comments </label>
              <div class="p-field">
                <p-input-text
                  id="comment"
                  type="text"
                  class="p-inputtext-sm w-100"
                  aria-describedby="comment-help"
                 v-model="sitevisit.comment.$model"
            :class="{
              'p-invalid':
                (sitevisit.comment.$dirty &&
                  sitevisit.comment.$invalid) ||
                (submitted && sitevisit.comment.$invalid),
            }"
          />
          <small
            v-if="
              (sitevisit.comment.$dirty &&
                sitevisit.comment.$invalid) ||
              (submitted && sitevisit.comment.$invalid)
            "
            class="p-error"
            >Comments is not available.</small
          >
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading"> Name </label>
                <p-input-text
                  id="name"
                  type="text"
                  class="p-inputtext-sm w-100"
                  aria-describedby="name-help"
                 v-model="sitevisit.name.$model"
            :class="{
              'p-invalid':
                (sitevisit.name.$dirty &&
                  sitevisit.name.$invalid) ||
                (submitted && sitevisit.name.$invalid),
            }"
          />
          <small
            v-if="
              (sitevisit.name.$dirty &&
                sitevisit.name.$invalid) ||
              (submitted && sitevisit.name.$invalid)
            "
            class="p-error"
            >Name is not available.</small
          >
              </div>
            </div>
          </div>
        </p-fieldset>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-sm-12 d-flex justify-content-between">
        <p-button
          label="Back"
          class="p-button-sm p-button-danger"
          icon="pi pi-angle-left"
          @click="prevPage()"
        />
        <p-button label="Complete" icon="pi pi-check" class="p-button-sm" @click="nextPage(!$v.$invalid)" />
      </div>
    </div>
  </section>
</template>

<script>
import {
  required,
  minLength,
  
} from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";
export default {
  data() {
    return {
      sitevisits: [
        {
         nameddl:"",
        statusDDL:"",
        calendar:"",
        comment:"",
        name:"",
        },
      ],
      nameddl: [
        { name: "Mr.", code: "Mr." },
        { name: "Mrs.", code: "Mrs." },
        { name: "Ms.", code: "Ms." },
      ],
      statusDDL: [
        { name: "No Show", code: "No Show" },
        { name: "Visited", code: "Visited" },
        { name: "Planned", code: "Planned" },
      ],
      formData: this.getEmptyForm(),
      submitted: false,
    };
  },
  mixins: [validationMixin],
  validations: {
    sitevisits:{
      $each:{
    nameddl:{
        required,
       
    },
    statusDDL:{
      required
      
    },
    calendar:{
      required
    },
    
    comment:{
      required,
      minLength:minLength(4)
    },
    name:{
      required,
      minLength:minLength(4)
    }
    }
    }
  },
  methods: {
     addsitevisitRow() {
      this.sitevisits.push({
       nameddl:"",
        statusDDL:"",
        calendar:"",
        comment:"",
        name:"",
      });
    },
    deleteRow(index) {
      this.sitevisits.splice(index, 1);
    },
    nextPage(isFormValid) {
      this.submitted=true;
      if(!isFormValid){
        return;
      }
      this.$emit("nextPage", { formData: {
            sitevisits:this.sitevisits
      }, pageIndex: -1 });
      
    },
    prevPage() {
      this.$emit("prevPage", { pageIndex: 6 });
    },
    getEmptyForm(){
      return{
      
        sitevisits:[],

      }
    }
  },
};
</script>

<style lang="scss" scoped>
.bg-gray {
  background-color: #d6d8d9 !important;
}

.table-sm td {
  vertical-align: top !important;
}
</style>