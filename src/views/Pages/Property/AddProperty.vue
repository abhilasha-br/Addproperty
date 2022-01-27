<template>
  <section>
    <div class="breadcrumb-header justify-content-between">
      <div class="my-auto">
        <div class="d-flex">
          <span class="icons-list-item bg-primary"
            ><i class="pi pi-building"></i>
          </span>
          <h4 class="content-title mb-0 my-auto">
            <a class="text-muted" href="/home/property-list"> New Properties</a> / Add Property
          </h4>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <p-steps :model="items" :readonly="true" />
        <keep-alive>
          <router-view
            :formData="formObject"
            @prevPage="prevPage($event)"
            @nextPage="nextPage($event)"
            @complete="complete"
            class="pt-5 pl-5 pr-5 pb-3"
          />
        </keep-alive>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Builder/Project Info",
          to: "/home/add-property",
        },
        {
          label: "Builder Contact Details",
          to: "/home/add-property/contact-form",
        },
        {
          label: "Property Details",
          to: "/home/add-property/property-detail",
        },
        {
          label: "Property Documents/Approvals",
          to: "/home/add-property/property-document",
        },
        {
          label: "Additional Info",
          to: "/home/add-property/additional-info",
        },
        {
          label: "Comments/Notes",
          to: "/home/add-property/comments",
        },
        {
          label: "Site Visits",
          to: "/home/add-property/site-visits",
        },
      ],
      formObject: {},
    };
  },
  methods: {
    nextPage(event) {
      for (let field in event.formData) {
        this.formObject[field] = event.formData[field];
      }
      this.$router.push(this.items[event.pageIndex + 1].to);
    },
    prevPage(event) {
      this.$router.push(this.items[event.pageIndex - 1].to);
    },
    complete() {
      //   this.$toast.add({
      //     severity: "success",
      //     summary: "Order submitted",
      //     detail:
      //       "Dear, " +
      //       this.formObject.firstname +
      //       " " +
      //       this.formObject.lastname +
      //       " your order completed.",
      //   });
    },
  },
};
</script>