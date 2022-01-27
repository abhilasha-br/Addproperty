<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none !important;
}

.p-paginator .p-paginator-current {
  margin-left: auto !important;
}

// Dialog
.p-dialog.custom-dialog div.p-dialog-header {
  justify-content: end !important;
  padding: 0px;
  .p-dialog-header-icons {
    margin-top: -34px;
    margin-right: -10px;
    color: #fff;
  }
  .p-dialog-header-icon {
    color: #fff;
  }
}
.p-dialog.custom-dialog .p-dialog-content {
  padding: 0px;
  overflow: hidden;
}

// Input Field
.p-field label,
.p-field input {
  display: block !important;
}

.p-inputtext.p-inputtext-sm,
.p-calendar.p-inputtext-sm .p-inputtext {
  line-height: 0 !important;
}

.p-calendar.p-inputtext-sm .p-button.p-button-icon-only {
  padding: 0 !important;
}

.hint {
  font-size: 12px !important;
  line-height: normal !important;
  margin-top: 5px;
}

label.heading {
  font-size: 18px;
  font-weight: 500;
  display: block !important;
}

label.heading span {
  color: #ff0000;
}

// Checkbox and Radio button
.p-field-checkbox,
.p-field-radiobutton {
  margin-bottom: 0.5rem;
  display: inline-flex;
  align-items: center;
  // flex-wrap: wrap;
}

.p-field-checkbox.d-inline-block label,
.p-field-radiobutton.d-inline-block label {
  vertical-align: sub !important;
}

.p-field-checkbox label,
.p-field-radiobutton label {
  margin-left: 0.5rem;
  line-height: 1;
  margin-bottom: 0 !important;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
}

// Button
.p-button {
  line-height: normal !important;
}

// .p-button.p-button-primary {
//   background-color: var(--rt-primary-color);
//   border-color: var(--rt-primary-color);
// }

// .p-button.p-button-primary:hover {
//   background-color: var(--rt-primary-dark) !important;
//   border-color: var(--rt-primary-dark) !important;
// }

.p-calendar .p-button {
  padding: 0;
}

.p-button.p-button-icon-only.p-botton-xs.p-button-outlined {
  width: 1.8rem !important;
  height: 1.8rem !important;
  border: 2px solid;
  .pi {
    font-size: 0.8rem !important;
  }
}

.p-button.p-button-icon-only.p-botton-xs.p-button-outlined:hover {
  border: 2px solid !important;
}

// Dropdown
.p-dropdown-sm {
  font-size: 0.875rem !important;
  padding: 0.42rem !important;
  line-height: 0 !important;
}

.cursor-pointer {
  cursor: pointer !important;
}

// Input group
.p-inputgroup-addon.cursor-pointer {
  padding: 0 !important;
}

// Steps
.p-steps ul {
  flex-wrap: wrap !important;
}

// File upload
.p-fileupload .p-fileupload-row > div:first-child,
.p-fileupload .p-fileupload-row > div:nth-child(4) {
  width: 15% !important;
}

.p-fileupload-row > div:nth-child(2) {
  width: 45% !important;
}

.p-fileupload-row > div:nth-child(3) {
  width: 25% !important;
}

// Columns in Form
.form-section div[class*="col-"] {
  margin-bottom: 1rem !important;
}

// Checkbox table
@media only screen and (max-width: 991px) {
  .checkbox-table td,
  .checkbox-table th {
    display: block !important;
  }
}

// Legend
.p-fieldset-legend {
  width: auto !important;
  margin-left: 15px;
}

.custom .p-fieldset-legend {
  padding: 0 !important;
  border: none !important;
  background: transparent !important;
}

// .p-selectbutton .p-button.p-highlight {
//   background: var(--rt-primary-color) !important;
//   border-color: var(--rt-primary-color) !important;
// }

// Panel
.p-panel.bg-primary {
  background: #fff !important;
}
.p-panel.bg-primary .p-panel-header {
  background: #007bff !important;
  color: #fff !important;
  flex-wrap: wrap !important;
  .p-panel-header-icon {
    color: #fff !important;
  }
  .p-panel-header-icon:hover {
    color: #000 !important;
  }
  .p-panel-icons {
    display: inline-flex !important;
  }
}
</style>
