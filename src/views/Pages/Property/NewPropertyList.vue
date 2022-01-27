<template>
  <section>
    <div class="breadcrumb-header justify-content-between">
      <div class="my-auto">
        <div class="d-flex">
          <span class="icons-list-item bg-primary"
            ><i class="pi pi-building"></i>
          </span>
          <h4 class="content-title mb-0 my-auto"> <span class="text-muted"> My properties /</span> New Properties</h4>
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
          :globalFilterFields="['name', 'price', 'category', 'status']"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          @row-click="selectedProperty"
        >
          <template #header>
            <div class="d-flex">
              <p-button
                type="button"
                icon="pi pi-filter-slash"
                label="Clear"
                class="p-button-outlined mr-auto"
                @click="clearFilter()"
              />
              <span class="p-input-icon-left mr-5">
                <i class="pi pi-search" />
                <p-input-text
                  v-model="filters['global'].value"
                  placeholder="Keyword Search"
                />
              </span>
              <p-button
                type="button"
                icon="pi pi-plus"
                label="Add Property"
                class="p-button-primary"
                @click="addProperty()"
              />
            </div>
          </template>
          <template #empty> No customers found. </template>
          <p-column header="Image">
            <template #body="{ data }">
              <img :src="data.image" :alt="data.image" class="product-image" />
            </template>
          </p-column>
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
          <p-column field="price" header="Price">
            <template #body="{ data }">
              {{ formatCurrency(data.price) }}
            </template>
            <template #filter="{ filterModel }">
              <p-input-text
                type="text"
                v-model="filterModel.value"
                class="p-column-filter"
                placeholder="Search by price"
              />
            </template>
          </p-column>
          <p-column field="category" header="Category">
            <template #filter="{ filterModel }">
              <p-input-text
                type="text"
                v-model="filterModel.value"
                class="p-column-filter"
                placeholder="Search by category"
              />
            </template>
          </p-column>
          <p-column field="rating" header="Reviews">
            <template #body="{ data }">
              <p-rating :value="data.rating" :readonly="true" :cancel="false" />
            </template>
          </p-column>
          <p-column header="Status" field="status">
            <template #body="{ data }">
              <span
                :class="'product-badge status-' + data.status.toLowerCase()"
                >{{ data.status }}</span
              >
            </template>
            <template #filter="{ filterModel }">
              <p-input-text
                type="text"
                v-model="filterModel.value"
                class="p-column-filter"
                placeholder="Search by status"
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
        name: {
          operator: FilterOperator.OR,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        price: {
          operator: FilterOperator.OR,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        category: {
          operator: FilterOperator.OR,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        status: {
          operator: FilterOperator.OR,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
      },
      products: [
        {
          id: 1,
          image: "img/property/01.jpg",
          name: "Family House For Sale",
          price: "50,00,000",
          category: "Apartment",
          rating: 5,
          status: "Available",
        },
        {
          id: 2,
          image: "img/property/02.jpg",
          name: "Family House For Sale",
          price: "30,00,000",
          category: "House",
          rating: 4,
          status: "NotAvailable",
        },
        {
          id: 3,
          image: "img/property/03.jpg",
          name: "Family House For Sale",
          price: "25,00,000",
          category: "Apartment",
          rating: 3,
          status: "Available",
        },
        {
          id: 4,
          image: "img/property/04.jpg",
          name: "Family House For Sale",
          price: "50,00,000",
          category: "House",
          rating: 4,
          status: "NotAvailable",
        },
        {
          id: 5,
          image: "img/property/01.jpg",
          name: "Family House For Sale",
          price: "50,00,000",
          category: "Apartment",
          rating: 5,
          status: "Available",
        },
        {
          id: 6,
          image: "img/property/02.jpg",
          name: "Family House For Sale",
          price: "30,00,000",
          category: "House",
          rating: 4,
          status: "NotAvailable",
        },
      ],
    };
  },
  methods: {
    formatCurrency(val) {
      return "₹" + val;
    },
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
    selectedProperty() {
        this.$router.push("/home/property-detail");
    },
    addProperty() {
      this.$router.push("/home/add-property");
    }
  },
};
</script>

<style lang="scss" scoped>
.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-image {
  width: 100px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.product-badge.status-available {
  background: #c8e6c9;
  color: #256029;
  padding: 5px 10px;
}

.product-badge.status-notavailable {
  background: #ffcdd2;
  color: #c63737;
  padding: 5px 10px;
}
</style>