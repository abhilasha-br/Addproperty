<template>
  <section class="form-section">
    <div class="row">
      <div class="col-sm-12">
        <label class="heading">Contact Details</label>
        <p-fieldset
          class="custom"
          v-for="(contactdetail, k) in $v.contactdetails.$each.$iter"
          :key="k"
        >
          <template #legend>
            <p-button
              class="p-button-rounded p-button-success mr-2"
              icon="pi pi-plus"
              @click="addcontactRow"
            />
            <p-button
              v-if="k > 0"
              @click="deleteRow(k, contactdetail)"
              class="p-button-rounded p-button-danger"
              icon="pi pi-trash"
            />
          </template>
          <div class="row">
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading"> Title </label>
                <p-dropdown
                  id="nameddl"
                  :options="nameddl"
                  optionLabel="name"
                  placeholder="-Select-"
                  class="w-100 p-dropdown-sm"
                  appendTo="body"
                  v-model="contactdetail.nameddl.$model"
                  :class="{
                    'p-invalid':
                      (contactdetail.nameddl.$dirty &&
                        contactdetail.nameddl.$invalid) ||
                      (submitted && contactdetail.nameddl.$invalid),
                  }"
                />
                <small
                  v-if="
                    (contactdetail.nameddl.$dirty &&
                      contactdetail.nameddl.$invalid) ||
                    (submitted && contactdetail.nameddl.$invalid)
                  "
                  class="p-error"
                  >Title is not available.</small
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
                  v-model="contactdetail.name.$model"
                  :class="{
                    'p-invalid':
                      (contactdetail.name.$dirty && contactdetail.name.$invalid) ||
                      (submitted && contactdetail.name.$invalid),
                  }"
                />
                <small
                  v-if="
                    (contactdetail.name.$dirty && contactdetail.name.$invalid) ||
                    (submitted && contactdetail.name.$invalid)
                  "
                  class="p-error"
                  >Name is not available.</small
                >
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading"> Designation </label>
                <p-input-text
                  id="designation"
                  type="text"
                  class="p-inputtext-sm w-100"
                  aria-describedby="designation-help"
                  v-model="contactdetail.designation.$model"
                  :class="{
                    'p-invalid':
                      (contactdetail.designation.$dirty &&
                        contactdetail.designation.$invalid) ||
                      (submitted && contactdetail.designation.$invalid),
                  }"
                />
                <small
                  v-if="
                    (contactdetail.designation.$dirty &&
                      contactdetail.designation.$invalid) ||
                    (submitted && contactdetail.designation.$invalid)
                  "
                  class="p-error"
                  >Designation is not available.</small
                >
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading"> Phone </label>
                <div class="p-inputgroup">
                  <span class="p-inputgroup-addon cursor-pointer"> +91 </span>
                  <p-input-text
                    id="phone"
                    type="text"
                    class="p-inputtext-sm w-100"
                    aria-describedby="phone-help"
                    maxLength="10"
                    v-model="contactdetail.phone.$model"
                    :class="{
                      'p-invalid':
                        (contactdetail.phone.$dirty &&
                          contactdetail.phone.$invalid) ||
                        (submitted && contactdetail.phone.$invalid),
                    }"
                  />
                  
                </div>
                <small
                    v-if="
                      (contactdetail.phone.$dirty &&
                        contactdetail.phone.$invalid) ||
                      (submitted && contactdetail.phone.$invalid)
                    "
                    class="p-error"
                    >Phone is not available.</small
                  >
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading">
                  WhatsApp Number
                </label>
                <div class="p-inputgroup">
                  <span class="p-inputgroup-addon cursor-pointer"> +91 </span>
                  <p-input-text
                    id="whatsapp"
                    type="text"
                    class="p-inputtext-sm w-100"
                    aria-describedby="whatsapp-help"
                    maxLength="10"
                    v-model="contactdetail.whatsapp.$model"
                    :class="{
                      'p-invalid':
                        (contactdetail.whatsapp.$dirty &&
                          contactdetail.whatsapp.$invalid) ||
                        (submitted && contactdetail.whatsapp.$invalid),
                    }"
                  />
                  
                </div>
                <small
                    v-if="
                      (contactdetail.whatsapp.$dirty &&
                        contactdetail.whatsapp.$invalid) ||
                      (submitted && contactdetail.whatsapp.$invalid)
                    "
                    class="p-error"
                    >WhatsApp Number is not available.</small
                  >
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading"> Email </label>
                <p-input-text
                  id="email"
                  type="email"
                  class="p-inputtext-sm w-100"
                  aria-describedby="email-help"
                  v-model="contactdetail.email.$model"
                  :class="{
                    'p-invalid':
                      (contactdetail.email.$dirty &&
                        contactdetail.email.$invalid) ||
                      (submitted && contactdetail.email.$invalid),
                  }"
                />
                <small
                  v-if="
                    (contactdetail.email.$dirty && contactdetail.email.$invalid) ||
                    (submitted && contactdetail.email.$invalid)
                  "
                  class="p-error"
                  >Email is not available.</small
                >
              </div>
            </div>
            <div class="col-sm-4">
              <label for="projectName" class="heading"> Contact Type </label>
              <div class="p-field-radiobutton">
                <p-radio-button
                  id="rd-primary"
                  name="ctype"
                  value="primary"
                  v-model="contactdetail.contactType.$model"
                />
                <label for="rd-active" class="mr-5">Primary</label>
              </div>
              <div class="p-field-radiobutton">
                <p-radio-button
                  id="rd-secondary"
                  name="ctype"
                  value="secondary"
                  v-model="contactdetail.contactType.$model"
                />
                <label for="rd-inactive">Secondary</label>
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
  minLength,
  integer,
  helpers,
  maxLength,
  email,
} from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";
const alpha = helpers.regex("alpha", /^[a-zA-z]+([\s][a-zA-Z]+)*$/);

export default {
  data() {
    return {
      contactdetails: [
        {
          nameddl: "",
          name: "",
          designation: "",
          phone: "",
          whatsapp: "",
          email: "",
          contactType: "primary",
        },
      ],
      nameddl: [
        { name: "Mr.", code: "Mr." },
        { name: "Mrs.", code: "Mrs." },
        { name: "Ms.", code: "Ms." },
      ],
      items: [
        { label: "Update", icon: "pi pi-refresh" },
        { label: "Delete", icon: "pi pi-times" },
        { label: "Navigate", icon: "pi pi-external-link" },
        { label: "Router", icon: "pi pi-upload" },
      ],
      formData: this.getEmptyForm(),
      submitted: false,
    };
  },

  mixins: [validationMixin],
  validations: {
    
      contactdetails:{
        $each:{
      nameddl: {
        required,
      },
      name: {
        required,
        minLength: minLength(4),
        alpha,
      },
      designation: {
        required,

        minLength: minLength(4),
        alpha,
      },
      phone: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(10),
        integer,
      },
      whatsapp: {
        required,
        integer,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
      email: {
        required,
        email,
      },
      contactType: {
        required,
      },
      }
      }
    
  },
  methods: {
    addcontactRow() {
      this.contactdetails.push({
        nameddl: "",
        name: "",
        designation: "",
        phone: "",
        whatsapp: "",
        email: "",
        contactType: "primary",
      });
    },
    deleteRow(index) {
      this.contactdetails.splice(index, 1);
    },
    onUpload(event) {
      console.log(this.files);

      this.files = event.files;

      this.$toast.success("File Uploaded Succesfully");
    },
    nextPage(isFormValid) {
      this.submitted = true;
      console.log("submitted",isFormValid)
      if (!isFormValid) {
        return;
      }
      this.$emit("nextPage", {
        formData: {
         
          contactdetails:this.contactdetails
        },
        pageIndex: 0,
      });
      this.$emit("nextPage", { pageIndex: 1 });
    },
    prevPage() {
      this.$emit("prevPage", { pageIndex: 1 });
    },
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
    getEmptyForm() {
      return {
        contactdetail:[],
        contactType: "primary",
      };
    },
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