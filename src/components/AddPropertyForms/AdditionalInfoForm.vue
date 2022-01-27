<template>
  <section class="form-section">
    <div class="row">
      <div class="col-sm-12">
        <label class="d-block heading">
          Amenities - For No preference, leave this empty
        </label>
        <table class="table-sm borderless w-100 checkbox-table">
          <tr>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox id="Amenities1" name="Amenities" value="2 Wheeler Parking"  v-model="$v.formData.amenities.$model" />
                <label class="mr-5" for="Amenities1">2 Wheeler Parking</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox id="Amenities2" name="Amenities" value="Basketball Court" v-model="$v.formData.amenities.$model" />
                <label class="mr-3" for="Amenities2">Basketball Court</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox id="Amenities3" name="Amenities" value="CCTV surveillance" v-model="$v.formData.amenities.$model"/>
                <label class="mr-3" for="Amenities3">CCTV surveillance</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox id="Amenities4" name="Amenities" value="Car Parking" v-model="$v.formData.amenities.$model"/>
                <label class="mr-3" for="Amenities4">Car Parking</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="Amenities5"
                  name="Amenities"
                  value="Children's play area"
                  v-model="$v.formData.amenities.$model"
                />
                <label class="mr-3" for="Amenities5">Children's play area</label>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="Amenities6"
                  name="Amenities"
                  value="Club House/Indoor Games Room"
                  v-model="$v.formData.amenities.$model"
                />
                <label class="mr-3" for="Amenities6"
                  >Club House/Indoor Games Room</label
                >
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox id="Amenities7" 
                name="Amenities"
                 value="ElectriAmenities"
                 v-model="$v.formData.amenities.$model"
                  />
                <label class="mr-3" for="Amenities7">ElectriAmenities</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                 id="Amenities8"
                  name="Amenities"
                   value="Gymnasium" 
                   v-model="$v.formData.amenities.$model"
                   />
                <label class="mr-3" for="Amenities8">Gymnasium</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                 id="Amenities9"
                  name="Amenities"
                   value="Jogging Track" 
                   v-model="$v.formData.amenities.$model"
                   />
                <label class="mr-3" for="Amenities9">Jogging Track</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="Amenities10"
                  name="Amenities"
                  value="Landscaped Gardens"
                  v-model="$v.formData.amenities.$model"
                />
                <label class="mr-3" for="Amenities10">Landscaped Gardens</label>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox 
                id="Amenities11" 
                name="Amenities"
                 value="Lift/Elevator" 
                 v-model="$v.formData.amenities.$model"
                 />
                <label class="mr-3" for="Amenities11">Lift/Elevator</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox 
                id="Amenities12" 
                name="Amenities"
                 value="Open Air Theatre" 
                 v-model="$v.formData.amenities.$model"
                 />
                <label class="mr-3" for="Amenities12">Open Air Theatre</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="Amenities13"
                  name="Amenities"
                  value="Party hall with pantry"
                  v-model="$v.formData.amenities.$model"
                />
                <label class="mr-3" for="Amenities13">Party hall with pantry</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox 
                id="Amenities14"
                 name="Amenities"
                  value="Power Backup" 
                  v-model="$v.formData.amenities.$model"/>
                <label class="mr-3" for="Amenities14">Power Backup</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox id="Amenities15" name="Amenities" value="Security Gate" v-model="$v.formData.amenities.$model" />
                <label class="mr-3" for="Amenities15">Security Gate</label>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox id="Amenities16" name="Amenities" value="Spa & Sauna" v-model="$v.formData.amenities.$model"/>
                <label class="mr-3" for="Amenities16">Spa & Sauna</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox id="Amenities17" name="Amenities" value="Steam" v-model="$v.formData.amenities.$model"/>
                <label class="mr-3" for="Amenities17">Steam</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox id="Amenities18" name="Amenities" value="Swimming Pool" v-model="$v.formData.amenities.$model"/>
                <label class="mr-3" for="Amenities18">Swimming Pool</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox id="Amenities19" name="Amenities" value="Tar Road" v-model="$v.formData.amenities.$model" />
                <label class="mr-3" for="Amenities19">Tar Road</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox id="Amenities20" name="Amenities" value="Tennis Court" v-model="$v.formData.amenities.$model"/>
                <label class="mr-3" for="Amenities20">Tennis Court</label>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="Amenities21"
                  name="Amenities"
                  value="Underground Sewage connection"
                  v-model="$v.formData.amenities.$model"
                />
                <label class="mr-3" for="Amenities21"
                  >Underground Sewage connection</label
                >
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox id="Amenities22" name="Amenities" value="Volleyball Court" v-model="$v.formData.amenities.$model"/>
                <label class="mr-3" for="Amenities22">Volleyball Court</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox id="Amenities23" name="Amenities" value="Water" v-model="$v.formData.amenities.$model"/>
                <label class="mr-3" for="Amenities23">Water</label>
              </div>
            </td>
          </tr>
        </table>
         <small
          v-if="
            ($v.formData.amenities.$dirty && $v.formData.amenities.$invalid) ||
            (submitted && $v.formData.amenities.$invalid)
          "
          class="p-error"
          >Amenities is not available.</small
        >
      </div>

      <div class="col-sm-6">
        <div class="p-field">
          <label class="heading" for="LocationHighlights">
            Location Highlights
          </label>
          <p-textarea 
          class="w-100" 
          id="LocationHighlights"
           rows="multiple"
            v-model="$v.formData.locationHighlights.$model"
          
            :class="{
              'p-invalid':
                ($v.formData.locationHighlights.$dirty && $v.formData.locationHighlights.$invalid) ||
                (submitted && $v.formData.locationHighlights.$invalid),
            }"
          />
          <small
            v-if="
              ($v.formData.comments.$dirty && $v.formData.locationHighlights.$invalid) ||
              (submitted && $v.formData.locationHighlights.$invalid)
            "
            class="p-error"
            >locationHighlights is not available.</small
          >
              
        </div>
      </div>

      <div class="col-sm-6">
        <div class="p-field">
          <label class="heading" for="Comments">Comments</label>
          <p-textarea class="w-100" 
          id="Comments" 
          rows="multiple"
           v-model="$v.formData.comments.$model"
            :class="{
              'p-invalid':
                ($v.formData.comments.$dirty && $v.formData.comments.$invalid) ||
                (submitted && $v.formData.comments.$invalid),
            }"
          />
          <small
            v-if="
              ($v.formData.comments.$dirty && $v.formData.comments.$invalid) ||
              (submitted && $v.formData.comments.$invalid)
            "
            class="p-error"
            >Comments is not available.</small
          >
           
        </div>
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
      locationHighlights:{
        required
      },
      comments:{
        required
      },
      amenities:{
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
      this.$emit("nextPage", { formData:
       {
         locationHighlights: this.$v.formData.locationHighlights,
          comments: this.$v.formData.comments,
          amenities:this.$v.formData.amenities,
      }, pageIndex: 4 });
    },
    prevPage() {
      this.$emit("prevPage", { pageIndex: 4 });
    },
    getEmptyForm(){
      return{
        comments:"",
        locationHighlights:"",
        amenities:""
      }
    }
  },
};
</script>