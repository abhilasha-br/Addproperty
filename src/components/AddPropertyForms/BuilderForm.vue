<template>
  <section class="form-section">
    <div class="row">
      <div class="col-sm-12">
        <div class="p-field">
          <label for="builderName" class="heading">
            Builder Name <span>*</span></label
          >
          <p-input-text
            id="builderName"
            type="text"
            class="p-inputtext-sm w-100"
            aria-describedby="builderName-help"
            v-model="$v.formData.builderName.$model"
            :class="{
              'p-invalid':
                ($v.formData.builderName.$dirty &&
                  $v.formData.builderName.$invalid) ||
                (submitted && $v.formData.builderName.$invalid),
            }"
          />
          <small
            v-if="
              ($v.formData.builderName.$dirty &&
                $v.formData.builderName.$invalid) ||
              (submitted && $v.formData.builderName.$invalid)
            "
            class="p-error"
            >Username is not available.</small
          >
        </div>
      </div>

      <div class="col-sm-12">
        <div class="p-field">
          <label for="projectName" class="heading">
            Project Name <span>*</span>
          </label>
          <p-input-text
            id="projectName"
            type="text"
            class="p-inputtext-sm w-100"
            aria-describedby="projectName-help"
            v-model="$v.formData.projectName.$model"
            :class="{
              'p-invalid':
                ($v.formData.projectName.$dirty &&
                  $v.formData.projectName.$invalid) ||
                (submitted && $v.formData.projectName.$invalid),
            }"
          />
          <small
            v-if="
              ($v.formData.projectName.$dirty &&
                $v.formData.projectName.$invalid) ||
              (submitted && $v.formData.projectName.$invalid)
            "
            class="p-error"
            >Project Name is not available.</small
          >
        </div>
      </div>

      <div class="col-sm-12">
        <div class="p-field">
          <label for="psuedoName" class="heading">
            Project Psuedo Name <span>*</span>
          </label>
          <p-input-text
            id="psuedoName"
            type="text"
            class="p-inputtext-sm w-100"
            aria-describedby="psuedoName-help"
            v-model="$v.formData.psuedoName.$model"
            :class="{
              'p-invalid':
                ($v.formData.psuedoName.$dirty &&
                  $v.formData.psuedoName.$invalid) ||
                (submitted && $v.formData.psuedoName.$invalid),
            }"
          />
          <small
            v-if="
              ($v.formData.psuedoName.$dirty &&
                $v.formData.psuedoName.$invalid) ||
              (submitted && $v.formData.psuedoName.$invalid)
            "
            class="p-error"
            >Psuedo Name is not available.</small
          >
        </div>
      </div>
      <div class="col-sm-12 mt-3">
        <label class="heading">Project Status</label>
        <div class="p-field-radiobutton">
          <p-radio-button
            id="rd-active"
            name="pstatus"
            value="active"
            v-model="$v.formData.rdStatus.$model"
          />
          <label for="rd-active" class="mr-5">Active</label>

          <p-radio-button
            id="rd-inactive"
            name="pstatus"
            value="inactive"
            v-model="$v.formData.rdStatus.$model"
          />
          <label for="rd-inactive">Inactive</label>
        </div>
      </div>

      <div class="col-sm-12 mt-3 mb-3">
        <p-fieldset
          class="custom"
          v-for="(addfile, k) in $v.addfiles.$each.$iter"
          :key="k"
        >
          <template #legend>
            <p-button
             
              @click="addfileRow(k,addfile)"
              class="p-button-rounded p-button-success mr-2"
              icon="pi pi-plus"
            />
            <p-button
              v-if="k > 0"
              @click="deleteRow(k, addfile)"
              class="p-button-rounded p-button-danger"
              icon="pi pi-trash"
            />
          </template>
          <div class="row">
            <div class="col-sm-4">
              <div class="p-field">
                <label for="psuedoName" class="heading"> Image Type </label>
                <p-dropdown
                  id="imageType"
                  :options="imageType"
                  optionLabel="name"
                  placeholder="-Select-"
                  class="w-100 p-dropdown-sm"
                  v-model="addfile.imageType.$model"
                  :class="{
                    'p-invalid':
                      (addfile.imageType.$dirty &&
                        addfile.imageType.$invalid) ||
                      (submitted && addfile.imageType.$invalid),
                  }"
                />
                <small
                  v-if="
                    (addfile.imageType.$dirty && addfile.imageType.$invalid) ||
                    (submitted && addfile.imageType.$invalid)
                  "
                  class="p-error"
                  >Select Image Type</small
                >
              </div>
            </div>
            <div class="col-sm-8">
              <p-file-upload
                name="demo[]"
                accept="image/*"
                url="./upload"
                @upload="onUpload"
                @select="onSelectFile"
                :maxFileSize="100000"
                :multiple="false"
                :showCancelButton="false"
                :showUploadButton="false"
                :auto="true"
                v-model="addfile.files.$model"
                :class="{
                  'p-invalid':
                    (addfile.files.$dirty && addfile.files.$invalid) ||
                    (submitted && addfile.files.$invalid),
                }"
                invalidFileLimitMessage=" Multiple files not allowed"
                invalidFileTypeMessage="Uplaod Image"
              >
                <template #empty>
                  <p>Drag and drop files to here to upload.</p>
                </template>
              </p-file-upload>
              <small
                v-if="
                  (addfile.files == null && addfile.files == '') ||
                  (addfile.files.$dirty && addfile.files.$invalid) ||
                  (submitted && addfile.files.$invalid)
                "
                class="p-error"
                >Select.</small
              >
            </div>
          </div>
        </p-fieldset>
      </div>

      <div class="col-sm-12">
        <div class="p-field">
          <label for="geoLocation" class="heading">Google Geo Location</label>
          <p-input-text
            id="geoLocation"
            type="text"
            class="p-inputtext-sm w-100"
            aria-describedby="geoLocation-help"
            v-model="$v.formData.geoLocation.$model"
            :class="{
              'p-invalid':
                ($v.formData.geoLocation.$dirty &&
                  $v.formData.geoLocation.$invalid) ||
                (submitted && $v.formData.geoLocation.$invalid),
            }"
          />
          <small
            v-if="
              ($v.formData.geoLocation.$dirty &&
                $v.formData.geoLocation.$invalid) ||
              (submitted && $v.formData.geoLocation.$invalid)
            "
            class="p-error"
            >Geo Location is not available.</small
          >
        </div>
      </div>

      <div class="col-sm-12">
        <div class="p-field">
          <label for="geoUrl" class="heading">Google Geo Location URL</label>
          <p-input-text
            id="geoUrl"
            type="text"
            class="p-inputtext-sm w-100"
            aria-describedby="geoUrl-help"
            v-model="$v.formData.geoUrl.$model"
            :class="{
              'p-invalid':
                ($v.formData.geoUrl.$dirty && $v.formData.geoUrl.$invalid) ||
                (submitted && $v.formData.geoUrl.$invalid),
            }"
          />
          <small
            v-if="
              ($v.formData.geoUrl.$dirty && $v.formData.geoUrl.$invalid) ||
              (submitted && $v.formData.geoUrl.$invalid)
            "
            class="p-error"
            >Google Geo Location URL is not available.</small
          >
        </div>
      </div>

      <div class="col-sm-12">
        <div class="p-field">
          <label for="reraNumber" class="heading">RERA Number</label>
          <p-input-text
            id="reraNumber"
            type="text"
            class="p-inputtext-sm w-100"
            aria-describedby="reraNumber-help"
            v-model="$v.formData.reraNumber.$model"
            :class="{
              'p-invalid':
                ($v.formData.reraNumber.$dirty &&
                  $v.formData.reraNumber.$invalid) ||
                (submitted && $v.formData.reraNumber.$invalid),
            }"
          />
          <small
            v-if="
              ($v.formData.reraNumber.$dirty &&
                $v.formData.reraNumber.$invalid) ||
              (submitted && $v.formData.reraNumber.$invalid)
            "
            class="p-error"
            >RERA Number is not available.</small
          >
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-sm-12 d-flex justify-content-end">
       
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
  helpers,
  integer,
  url,
} from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";
const alpha = helpers.regex("alpha", /^[a-zA-z]+([\s][a-zA-Z]+)*$/);
export default {
  data() {
    return {
     
      addfiles: [
        {
          imageType: "",
          files: "",
        },
      ],
      imageType: [
        { name: "Logo", code: "logo" },
        { name: "Image", code: "image" },
        { name: "Project Brochure", code: "pb" },
        { name: "Builder Brochure", code: "bb" },
        { name: "Virtual Tour", code: "vt" },
      ],
      formData: this.getEmptyForm(),
      submitted: false,
    };
  },

  mixins: [validationMixin],
  validations: {
    formData: {
      builderName: {
        required,
        minLength: minLength(4),
        alpha,
      },
      projectName: {
        required,
        minLength: minLength(4),
        alpha,
      },
      psuedoName: {
        required,
        minLength: minLength(4),
        alpha,
      },
      reraNumber: {
        required,
        integer,
      },
      rdStatus: {
        required,
      },
      geoUrl: {
        required,
        url,
      },
      geoLocation: {
        required,
      },
    },
    addfiles: {
      $each: {
        imageType: {
          required,
        },
        files: {},
      },
    },
  },

  methods: {
    addfileRow(k) {
      if(k<9)
      this.addfiles.push({
        imageType: "",
        files: "",
      });
    },

    deleteRow(index) {
      this.addfiles.splice(index, 1);
    },

    onUpload(event) {
      console.log(this.addfile.files);

      this.files = event.addfiles.files;
    },

    onSelectFile(event) {
      console.log("onUpload() START");
      for (let file of event.files) {
        console.log("FILE TO BE UPLOADED: ", file);
        this.onSelectFile.file;
      }
    },

    nextPage(isFormValid) {
      debugger;
      this.submitted = true;
      console.log("submitted", isFormValid);
      if (!isFormValid) {
        return;
      }
      this.$emit("nextPage", {
        formData: {
          builderName: this.$v.formData.builderName,

          projectName: this.$v.formData.projectName,
          psuedoName: this.$v.formData.psuedoName,
          reraNumber: this.$v.formData.reraNumber,
          geoUrl: this.$v.formData.geoUrl,
          rdStatus: this.$v.formData.rdStatus,
          geoLocation: this.$v.formData.geoLocation,

          addfiles: this.addfiles,
        },
        pageIndex: 0,
      });
      //  this.$toast.add({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
    },
    prevPage(event) {
      this.$router.push(this.items[event.pageIndex - 1].to);
    },
    getEmptyForm() {
      return {
        builderName: "",
        projectName: "",
        psuedoName: "",
        reraNumber: "",
        geoUrl: "",
        rdStatus: "active",
        geoLocation: "",
        addfiles: [],
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.bg-gray {
  background-color: #d6d8d9 !important;
}
</style>