<template>
  <section>
    <div class="breadcrumb-header justify-content-between">
      <div class="my-auto">
        <div class="d-flex">
          <span class="icons-list-item bg-primary"
            ><i class="fas fa-user"></i>
          </span>
          <h4 class="content-title mb-0 my-auto">
            <span class="text-muted">All Leads</span>
          </h4>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <p-data-table
          ref="productTB"
          :value="products"
          responsiveLayout="scroll"
          :paginator="true"
          :rowsPerPageOptions="[5, 10, 25, 50]"
          :rows="5"
          :rowHover="true"
          dataKey="id"
          :filters.sync="filters"
          filterDisplay="menu"
          :globalFilterFields="['name', 'email', 'mobile']"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        >
          <template #header>
            <div class="d-flex justify-content-between">
              <p-button
                type="button"
                icon="pi pi-filter-slash"
                label="Clear"
                class="p-button-outlined"
                @click="clearFilter()"
              />
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <p-input-text
                  v-model="filters['global'].value"
                  placeholder="Keyword Search"
                />
              </span>
            </div>
          </template>
          <template #empty> No customers found. </template>
          <p-column
            field="name"
            header="Name"
          >
            <template #body="{ data }">
              {{ data.name }}
            </template>
            <template #filter="{ filterModel }">
              <p-input-text
                type="text"
                v-model="filterModel.value"
                class="p-column-filter"
                placeholder="Search by name"
              />
            </template>
          </p-column>
          <p-column
            field="email"
            header="Email"
          >
            <template #body="{ data }">
              {{ data.email }}
            </template>
            <template #filter="{ filterModel }">
              <p-input-text
                type="text"
                v-model="filterModel.value"
                class="p-column-filter"
                placeholder="Search by name"
              />
            </template>
          </p-column>
          <p-column
            field="mobile"
            header="Mobile Number"
          >
            <template #body="{ data }">
              {{ data.mobile }}
            </template>
            <template #filter="{ filterModel }">
              <p-input-text
                type="text"
                v-model="filterModel.value"
                class="p-column-filter"
                placeholder="Search by name"
              />
            </template>
          </p-column>
          <!-- <template #footer>
            In total there are {{ products ? products.length : 0 }} products.
          </template> -->
        </p-data-table>
      </div>
    </div>
  </section>
</template>

<script>
import { FilterMatchMode, FilterOperator } from "primevue/api";

export default {
  data() {
    return {
      filters: {
        global: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        firstname: {
          operator: FilterOperator.OR,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        lastname: {
          operator: FilterOperator.OR,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        email: {
          operator: FilterOperator.OR,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        mobile: {
          operator: FilterOperator.OR,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
      },
      products: [
        {
          id: 1,
          name: "Andrew Strauss",
          email: "info@yourmail.com",
          mobile: "+91 8587488573",
        },
        {
          id: 2,
          name: "Kevin Pietersen",
          email: "kpietersen@email.com",
          mobile: "+91 8587488576",
        },
        {
          id: 3,
          name: "Mike Bhand",
          email: "mikebhand@email.com",
          mobile: "+91 8587488574",
        },
        {
          id: 4,
          name: "Mike Hussy",
          email: "mikehussy@email.com",
          mobile: "+91 8587488575",
        },
        {
          id: 5,
          name: "Ross Kopelman",
          email: "rosskopelman@email.com",
          mobile: "+91 8587488572",
        },
        {
          id: 6,
          name: "Andrew Strauss",
          email: "info@yourmail.com",
          mobile: "+91 8587488573",
        },
      ],
    };
  },
  methods: {
    clearFilter() {
      Object.keys(this.filters).forEach((key) => {
        if (this.filters[key]["constraints"]) {
          this.filters[key]["constraints"].forEach((element) => {
            console.log(element);
            element.value = null;
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>