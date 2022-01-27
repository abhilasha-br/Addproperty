<template>
  <section class="form-section">
    <div class="row">
      <div class="col-sm-12">
        <label class="heading">
          Govt. Approvals - For No preference, leave this empty
        </label>
        <table
          class="table-sm borderless w-100 checkbox-table"
          style="table-layout: fixed"
        >
          <tr>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox id="bbmp" name="approvals" value="Highway" v-model="$v.formData.approvals.$model"/>
                <label for="bbmp" class="mr-3">BBMP</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox id="bda" name="approvals" value="BDA" v-model="$v.formData.approvals.$model" />
                <label for="bda" class="mr-3">BDA</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox id="bmrda" name="approvals" value="BMRDA" v-model="$v.formData.approvals.$model" />
                <label for="bmrda" class="mr-3">BMRDA</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox id="biappa" name="approvals" value="BIAPPA" v-model="$v.formData.approvals.$model"/>
                <label for="biappa" class="mr-3">BIAPPA</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox id="dtcp" name="approvals" value="DTCP" v-model="$v.formData.approvals.$model"/>
                <label for="dtcp" class="mr-3">DTCP</label>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox id="dcconverion" name="approvals" value="DC" v-model="$v.formData.approvals.$model"/>
                <label for="dcconverion" class="mr-3">DC Conversion </label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox id="revenue" name="approvals" value="Revenue" v-model="$v.formData.approvals.$model"/>
                <label for="revenue" class="mr-3">Revenue</label>
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
          <small
          v-if="
            ($v.formData.approvals.$dirty && $v.formData.approvals.$invalid) ||
            (submitted && $v.formData.approvals.$invalid)
          "
          class="p-error"
          >Govt. Approvals  is not available.</small
        >
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
        <p-button
          label="Next"
          class="p-button-sm"
          icon="pi pi-angle-right"
          iconPos="right"
          @click="nextPage(!$v.$invalid)"
        />
      </div>
    </div>
  </section>
</template>

<script>
import {
  required,
  
} from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";
export default {
  data(){
    return{
      formData:this.getEmptyForm(),
      submitted:false,
    }
  },
  mixins: [validationMixin],
  validations:{
    formData:{
approvals:{
  required
}
    }
  },
  methods: {
    nextPage(isFormValid) {
      this.submitted=true;
      if(!isFormValid){
        return;
      }
      this.$emit("nextPage", { formData: {
          approvals:this.$v.formData.approvals
      }, pageIndex: 3 });
    },
    prevPage() {
      this.$emit("prevPage", { pageIndex: 3 });
    },
    getEmptyForm(){
      return{
          approvals:"",
      }
    }
  },
};
</script>