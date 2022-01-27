<template>
  <section class="form-section">
    <div class="row">
      <div class="col-sm-12">
        <label class="heading"> Comments </label>
        <p-editor
          id="commments"
          editorStyle="height: 320px"
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
          >Commens is not available.</small
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
import { required } from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";
export default {
  data() {
    return {
      formData: this.getEmptyForm(),
      submitted: false,
    };
  },
  mixins: [validationMixin],
  validations: {
    formData: {
      comments: {
        required,
      },
    },
  },
  methods: {
    nextPage(isFormValid) {
      this.submitted = true;
      if (!isFormValid) {
        return;
      }
      this.$emit("nextPage", {
        formData: {
          comments: this.$v.formData.comments,
        },
        pageIndex: 5,
      });
    },
    prevPage() {
      this.$emit("prevPage", { pageIndex: 5 });
    },
    getEmptyForm() {
      return {
        comments: "",
      };
    },
  },
};
</script>