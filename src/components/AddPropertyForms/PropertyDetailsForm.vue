<template>
  <section class="form-section">
    <div class="row">
      <div class="col-sm-12">
        <div class="p-field">
          <label for="plotAddress" class="heading">
            Plot Address <span>*</span>
          </label>
          <p-input-text
            id="plotAddress"
            type="text"
            class="p-inputtext-sm w-100"
            aria-describedby="plotAddress-help"
            v-model="$v.formData.plotAddress.$model"
            :class="{
              'p-invalid':
                ($v.formData.plotAddress.$dirty &&
                  $v.formData.plotAddress.$invalid) ||
                (submitted && $v.formData.plotAddress.$invalid),
            }"
          />
          <small
            v-if="
              ($v.formData.plotAddress.$dirty &&
                $v.formData.plotAddress.$invalid) ||
              (submitted && $v.formData.plotAddress.$invalid)
            "
            class="p-error"
            >Plot Address is not available.</small
          >
        </div>
      </div>

      <div class="col-sm-12">
        <div class="p-field">
          <label for="area" class="heading">Area</label>
          <p-input-text
            id="area"
            type="text"
            class="p-inputtext-sm w-100"
            aria-describedby="area-help"
            v-model="$v.formData.area.$model"
            :class="{
              'p-invalid':
                ($v.formData.area.$dirty && $v.formData.area.$invalid) ||
                (submitted && $v.formData.area.$invalid),
            }"
          />
          <small
            v-if="
              ($v.formData.area.$dirty && $v.formData.area.$invalid) ||
              (submitted && $v.formData.area.$invalid)
            "
            class="p-error"
            >Area is not available.</small
          >
        </div>
      </div>

      <div class="col-sm-6">
        <div class="p-field">
          <label for="city" class="heading">City</label>
          <p-input-text
            id="city"
            type="text"
            class="p-inputtext-sm w-100"
            aria-describedby="city-help"
            v-model="$v.formData.city.$model"
            :class="{
              'p-invalid':
                ($v.formData.city.$dirty && $v.formData.city.$invalid) ||
                (submitted && $v.formData.city.$invalid),
            }"
          />
          <small
            v-if="
              ($v.formData.city.$dirty && $v.formData.city.$invalid) ||
              (submitted && $v.formData.city.$invalid)
            "
            class="p-error"
            >City is not available.</small
          >
        </div>
      </div>

      <div class="col-sm-6">
        <div class="p-field">
          <label for="state" class="heading">State</label>
          <p-input-text
            id="state"
            type="text"
            class="p-inputtext-sm w-100"
            aria-describedby="state-help"
            v-model="$v.formData.state.$model"
            :class="{
              'p-invalid':
                ($v.formData.state.$dirty && $v.formData.state.$invalid) ||
                (submitted && $v.formData.state.$invalid),
            }"
          />
          <small
            v-if="
              ($v.formData.state.$dirty && $v.formData.state.$invalid) ||
              (submitted && $v.formData.state.$invalid)
            "
            class="p-error"
            >Username is not available.</small
          >
        </div>
      </div>

      <div class="col-sm-6">
        <div class="p-field">
          <label for="postalCode" class="heading">Postal Code</label>
          <p-input-text
            id="postalCode"
            type="text"
            class="p-inputtext-sm w-100"
            aria-describedby="postalCode-help"
            maxLength="6"
            v-model="$v.formData.postalCode.$model"
            :class="{
              'p-invalid':
                ($v.formData.postalCode.$dirty &&
                  $v.formData.postalCode.$invalid) ||
                (submitted && $v.formData.postalCode.$invalid),
            }"
          />
        
        </div>
      </div>

      <div class="col-sm-6">
        <div class="d-block">
          <label for="country" class="heading">Country</label>
          <p-dropdown
            id="country"
            :options="country"
            optionLabel="name"
            class="p-dropdown-sm w-100"
            placeholder="-Select-"
            aria-describedby="country-help"
            v-model="$v.formData.country.$model"
            :class="{
              'p-invalid':
                ($v.formData.country.$dirty && $v.formData.country.$invalid) ||
                (submitted && $v.formData.country.$invalid),
            }"
          />
          <small
            v-if="
              ($v.formData.country.$dirty && $v.formData.country.$invalid) ||
              (submitted && $v.formData.country.$invalid)
            "
            class="p-error"
            >Country is not available.</small
          >
        </div>
      </div>

      <div class="col-sm-12">
        <div class="p-field">
          <label for="landMark" class="heading">Land Mark </label>
          <p-input-text
            id="landMark"
            type="text"
            class="p-inputtext-sm w-100"
            aria-describedby="landMark-help"
            v-model="$v.formData.landMark.$model"
            :class="{
              'p-invalid':
                ($v.formData.landMark.$dirty &&
                  $v.formData.landMark.$invalid) ||
                (submitted && $v.formData.landMark.$invalid),
            }"
          />
          <small
            v-if="
              ($v.formData.landMark.$dirty && $v.formData.landMark.$invalid) ||
              (submitted && $v.formData.landMark.$invalid)
            "
            class="p-error"
            >Land Mark is not available.</small
          >
        </div>
      </div>

      <div class="col-sm-12">
        <label class="heading">Zone</label>
        <table
          class="table-sm borderless w-100 checkbox-table"
          style="table-layout: fixed"
        >
          <tr>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="central"
                  name="zone"
                  value="Central"
                  v-model="$v.formData.zone.$model"
                  trueValue="Central"
                  :binary="true"
                />
                <label for="central" class="mr-3">Central</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="zone-east"
                  name="zone"
                  value="East"
                  :binary="true"
                  trueValue="East"
                  v-model="$v.formData.zone.$model"
                />
                <label for="zone-east" class="mr-3">East</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="zone-waste"
                  name="zone"
                  value="Waste"
                  :binary="true"
                  trueValue="Waste"
                  v-model="$v.formData.zone.$model"
                />
                <label for="zone-waste" class="mr-3">Waste</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="zone-north"
                  name="zone"
                  value="North"
                  :binary="true"
                  trueValue="North"
                  v-model="$v.formData.zone.$model"
                />
                <label for="zone-north" class="mr-3">North</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="zone-south"
                  name="zone"
                  value="South"
                  :binary="true"
                  trueValue="South"
                  v-model="$v.formData.zone.$model"
                />
                <label for="zone-south" class="mr-3">South</label>
              </div>
            </td>
          </tr>
        </table>
          <small
          v-if="
            ($v.formData.zone.$dirty && $v.formData.zone.$invalid) ||
            (submitted && $v.formData.zone.$invalid)
          "
          class="p-error"
          >Zone is not available.</small
        >
      </div>

      <div class="col-sm-12">
        <label for="totalarea" class="heading">Total Layout Area</label>
        <p-input-text
          id="totalarea"
          type="text"
          class="p-inputtext-sm w-100"
          aria-describedby="totalarea-help"
          v-model="$v.formData.totalarea.$model"
          :class="{
            'p-invalid':
              ($v.formData.totalarea.$dirty &&
                $v.formData.totalarea.$invalid) ||
              (submitted && $v.formData.totalarea.$invalid),
          }"
        />
        <small
          v-if="
            ($v.formData.totalarea.$dirty && $v.formData.totalarea.$invalid) ||
            (submitted && $v.formData.totalarea.$invalid)
          "
          class="p-error"
          >Total Area is not available.</small
        >
      </div>

     
        
         <div class="col-sm-12 mt-3">
        <label class="heading">Layout Area Units</label>
        <div class="p-field-radiobutton">
          <p-radio-button
            id="acres"
            name="layout"
            value="Acres"
            v-model="$v.formData.layout.$model"
          />
          <label for="acres" class="mr-5">Acres</label>

          <p-radio-button
            id="feet"
            name="layout"
            value="Feet"
            v-model="$v.formData.layout.$model"
          />
          <label for="feet">Sq. Feet</label>
        </div>
      </div>
      


      <!-- Table -->
      <div class="col-sm-12">
        <label class="heading">Typologies</label>
        <p-fieldset class="custom" v-for="(typology, k) in  $v.typologies.$each.$iter" :key="k">
          <template #legend>
            <p-button
              class="p-button-rounded p-button-success mr-2"
              icon="pi pi-plus"
              @click="addtypologiesRow"
            />
            <p-button
              class="p-button-rounded p-button-danger"
              icon="pi pi-trash"
              v-if="k > 0"
              @click="deleteRow(k, typology)"
            />
          </template>
          <div class="row">
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading">
                  Typology <span>*</span>
                </label>
                <p-dropdown
                  :options="topologyDDL"
                  optionLabel="name"
                  placeholder="-Select-"
                  class="w-100 p-dropdown-sm"
                  appendTo="body"
                  v-model="typology.topologyDDL.$model"
                  :class="{
                    'p-invalid':
                      (typology.topologyDDL.$dirty &&
                        typology.topologyDDL.$invalid) ||
                      (submitted && typology.topologyDDL.$invalid),
                  }"
                />
                <small
                  v-if="
                    (typology.topologyDDL.$dirty &&
                      typology.topologyDDL.$invalid) ||
                    (submitted && typology.topologyDDL.$invalid)
                  "
                  class="p-error"
                  >Typology is not available.</small
                >
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading">
                  Possession Date
                </label>
                <p-calendar
                  id="calendar"
                  appendTo="body"
                  class="p-inputtext-sm w-100"
                  :showTime="false"
                  hourFormat="12"
                  autocomplete="off"
                  :showIcon="true"
                  v-model="typology.calendar.$model"
                  :class="{
                    'p-invalid':
                      (typology.calendar.$dirty &&
                        typology.calendar.$invalid) ||
                      (submitted && typology.calendar.$invalid),
                  }"
                />
                <small
                  v-if="
                    (typology.calendar.$dirty &&
                      typology.calendar.$invalid) ||
                    (submitted && typology.calendar.$invalid)
                  "
                  class="p-error"
                  >Possession Date is not available.</small
                >
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading"> Facing </label>
              </div>
              <p-dropdown
                id="facing"
                :options="facingDDL"
                optionLabel="name"
                placeholder="-Select-"
                class="w-100 p-dropdown-sm"
                appendTo="body"
                v-model="typology.facing.$model"
                :class="{
                  'p-invalid':
                    (typology.facing.$dirty &&
                      typology.facing.$invalid) ||
                    (submitted && typology.facing.$invalid),
                }"
              />
              <small
                v-if="
                  (typology.facing.$dirty && typology.facing.$invalid) ||
                  (submitted && typology.facing.$invalid)
                "
                class="p-error"
                >Facing is not available.</small
              >
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading">
                  Construction Status
                </label>
                <p-dropdown
                  id="constructionStatus"
                  :options="constStatusDDL"
                  optionLabel="name"
                  placeholder="-Select-"
                  class="w-100 p-dropdown-sm"
                  appendTo="body"
                  v-model="typology.constStatusDDL.$model"
                  :class="{
                    'p-invalid':
                      (typology.constStatusDDL.$dirty &&
                        typology.constStatusDDL.$invalid) ||
                      (submitted && typology.constStatusDDL.$invalid),
                  }"
                />
                <small
                  v-if="
                    (typology.constStatusDDL.$dirty &&
                      typology.constStatusDDL.$invalid) ||
                    (submitted && typology.constStatusDDL.$invalid)
                  "
                  class="p-error"
                  >Construction Status is not available.</small
                >
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading">
                  Furnishing Status
                </label>
                <p-dropdown
                  id="furnStatus"
                  :options="furnStatusDDL"
                  optionLabel="name"
                  placeholder="-Select-"
                  class="w-100 p-dropdown-sm"
                  appendTo="body"
                  v-model="typology.furnStatusDDL.$model"
                  :class="{
                    'p-invalid':
                      (typology.furnStatusDDL.$dirty &&
                        typology.furnStatusDDL.$invalid) ||
                      (submitted && typology.furnStatusDDL.$invalid),
                  }"
                />
                <small
                  v-if="
                    (typology.furnStatusDDL.$dirty &&
                      typology.furnStatusDDL.$invalid) ||
                    (submitted && typology.furnStatusDDL.$invalid)
                  "
                  class="p-error"
                  >Furnishing Status is not available.</small
                >
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading">
                  Model Flat Available
                </label>
                <p-dropdown
                  id="flatAvail"
                  :options="flatAvailDDL"
                  optionLabel="name"
                  placeholder="-Select-"
                  class="w-100 p-dropdown-sm"
                  appendTo="body"
                  v-model="typology.flatAvailDDL.$model"
                  :class="{
                    'p-invalid':
                      (typology.flatAvailDDL.$dirty &&
                        typology.flatAvailDDL.$invalid) ||
                      (submitted && typology.flatAvailDDL.$invalid),
                  }"
                />
                <small
                  v-if="
                    (typology.flatAvailDDL.$dirty &&
                      typology.flatAvailDDL.$invalid) ||
                    (submitted && typology.flatAvailDDL.$invalid)
                  "
                  class="p-error"
                  >Model Flat Available is not available.</small
                >
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading">
                  Area in Sq. Feet
                </label>
                <p-input-text
                  id="areaSqFt"
                  type="text"
                  class="p-inputtext-sm w-100"
                  aria-describedby="areaSqFt-help"
                  v-model="typology.areaSqFt.$model"
                  :class="{
                    'p-invalid':
                      (typology.areaSqFt.$dirty &&
                        typology.areaSqFt.$invalid) ||
                      (submitted && typology.areaSqFt.$invalid),
                  }"
                />
                <small
                  v-if="
                    (typology.areaSqFt.$dirty &&
                      typology.areaSqFt.$invalid) ||
                    (submitted && typology.areaSqFt.$invalid)
                  "
                  class="p-error"
                >
                  Area in Sq. Feet is not available.</small
                >
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading"> Quoted Price </label>
              </div>
              <div class="p-inputgroup">
                <p-input-text
                  id="quotPrice"
                  type="text"
                  class="p-inputtext-sm w-100"
                  aria-describedby="quotPrice-help"
                  v-model="typology.quotPrice.$model"
                  :class="{
                    'p-invalid':
                      (typology.quotPrice.$dirty &&
                        typology.quotPrice.$invalid) ||
                      (submitted && typology.quotPrice.$invalid),
                  }"
                /> 
                <span class="p-inputgroup-addon cursor-pointer">INR</span>
                
              </div>
              <small
                  v-if="
                    (typology.quotPrice.$dirty &&
                      typology.quotPrice.$invalid) ||
                    (submitted && typology.quotPrice.$invalid)
                  "
                  class="p-error"
                  >Quoted Price is not available.</small
                >
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading"> Base Price </label>
              </div>
              <div class="p-inputgroup">
                <p-input-text
                  id="basePrice"
                  type="text"
                  class="p-inputtext-sm w-100"
                  aria-describedby="basePrice-help"
                  v-model="typology.basePrice.$model"
                  :class="{
                    'p-invalid':
                      (typology.basePrice.$dirty &&
                        typology.basePrice.$invalid) ||
                      (submitted && typology.basePrice.$invalid),
                  }"
                />
                
                <span class="p-inputgroup-addon cursor-pointer">INR</span>
              </div>
              <small
                  v-if="
                    (typology.basePrice.$dirty &&
                      typology.basePrice.$invalid) ||
                    (submitted && typology.basePrice.$invalid)
                  "
                  class="p-error"
                  >Base Price is not available.</small
                >
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading">
                  Quoted Price Per Sq. Feet (Calculated)
                </label>
                <div class="p-inputgroup">
                  <p-input-text
                    id="qPPerFt"
                    type="text"
                    class="p-inputtext-sm w-100"
                    aria-describedby="qPPerFt-help"
                    v-model="typology.qPPerFt.$model"
                    :class="{
                      'p-invalid':
                        (typology.qPPerFt.$dirty &&
                          typology.qPPerFt.$invalid) ||
                        (submitted && typology.qPPerFt.$invalid),
                    }"
                  />
                  
                  <span class="p-inputgroup-addon cursor-pointer">INR</span>
                </div>
                <small
                    v-if="
                      (typology.qPPerFt.$dirty &&
                        typology.qPPerFt.$invalid) ||
                      (submitted && typology.qPPerFt.$invalid)
                    "
                    class="p-error"
                    >Quoted Price is not available.</small
                  >
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading">
                  Base Price Per Sq. Feet (Calculated)
                </label>
                <div class="p-inputgroup">
                  <p-input-text
                    id="bPPerFt"
                    type="text"
                    class="p-inputtext-sm w-100"
                    aria-describedby="qPPerFt-help"
                    v-model="typology.bPPerFt.$model"
                    :class="{
                      'p-invalid':
                        (typology.bPPerFt.$dirty &&
                          typology.bPPerFt.$invalid) ||
                        (submitted && typology.bPPerFt.$invalid),
                    }"
                  />
                  
                  <span class="p-inputgroup-addon cursor-pointer">INR</span>
                </div>
                <small
                    v-if="
                      (typology.bPPerFt.$dirty &&
                        typology.bPPerFt.$invalid) ||
                      (submitted && typology.bPPerFt.$invalid)
                    "
                    class="p-error"
                    >Base Price Per Sq. is not available.</small
                  >
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading"> Total Units </label>
              </div>
              <p-input-text
                id="totalUnit"
                type="text"
                class="p-inputtext-sm w-100"
                aria-describedby="totalUnit-help"
                v-model="typology.totalUnit.$model"
                :class="{
                  'p-invalid':
                    (typology.totalUnit.$dirty &&
                      typology.totalUnit.$invalid) ||
                    (submitted && typology.totalUnit.$invalid),
                }"
              />
              <small
                v-if="
                  (typology.totalUnit.$dirty &&
                    typology.totalUnit.$invalid) ||
                  (submitted && typology.totalUnit.$invalid)
                "
                class="p-error"
                >Total Units is not available.</small
              >
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading">
                  Available Units
                </label>
                <p-input-text
                  id="availUnit"
                  type="text"
                  class="p-inputtext-sm w-100"
                  aria-describedby="availUnit-help"
                  v-model="typology.availUnit.$model"
                  :class="{
                    'p-invalid':
                      (typology.availUnit.$dirty &&
                        typology.availUnit.$invalid) ||
                      (submitted && typology.availUnit.$invalid),
                  }"
                />
                <small
                  v-if="
                    (typology.availUnit.$dirty &&
                      typology.availUnit.$invalid) ||
                    (submitted && typology.availUnit.$invalid)
                  "
                  class="p-error"
                >
                  Available Units is not available.</small
                >
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading">
                  Total Extent in Sq. Feet
                </label>
                <p-input-text
                  id="totalExt"
                  type="text"
                  class="p-inputtext-sm w-100"
                  aria-describedby="totalExt-help"
                  v-model="typology.totalExt.$model"
                  :class="{
                    'p-invalid':
                      (typology.totalExt.$dirty &&
                        typology.totalExt.$invalid) ||
                      (submitted && typology.totalExt.$invalid),
                  }"
                />
                <small
                  v-if="
                    (typology.totalExt.$dirty &&
                      typology.totalExt.$invalid) ||
                    (submitted && typology.totalExt.$invalid)
                  "
                  class="p-error"
                  >Total Extent in Sq. Feet is not available.</small
                >
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading">
                  Available Extent in Sq. Feet
                </label>
                <p-input-text
                  id="availExt"
                  type="text"
                  class="p-inputtext-sm w-100"
                  aria-describedby="availExt-help"
                  v-model="typology.availExt.$model"
                  :class="{
                    'p-invalid':
                      (typology.availExt.$dirty &&
                        typology.availExt.$invalid) ||
                      (submitted && typology.availExt.$invalid),
                  }"
                />
                <small
                  v-if="
                    (typology.availExt.$dirty &&
                      typology.availExt.$invalid) ||
                    (submitted && typology.availExt.$invalid)
                  "
                  class="p-error"
                >
                  Available Extent in Sq. Feet is not available.</small
                >
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading">
                  Total Quoted Value
                </label>
                <div class="p-inputgroup">
                  <p-input-text
                    id="totalQuot"
                    type="text"
                    class="p-inputtext-sm w-100"
                    aria-describedby="totalQuot-help"
                    v-model="typology.totalQuot.$model"
                    :class="{
                      'p-invalid':
                        (typology.totalQuot.$dirty &&
                          typology.totalQuot.$invalid) ||
                        (submitted && typology.totalQuot.$invalid),
                    }"
                  />
                  
                  <span class="p-inputgroup-addon cursor-pointer">INR</span>
                </div>
                <small
                    v-if="
                      (typology.totalQuot.$dirty &&
                        typology.totalQuot.$invalid) ||
                      (submitted && typology.totalQuot.$invalid)
                    "
                    class="p-error"
                    >Total Quoted Value is not available.</small
                  >
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading">
                  Total Base Value
                </label>
                <div class="p-inputgroup">
                  <p-input-text
                    id="totalBase"
                    type="text"
                    class="p-inputtext-sm w-100"
                    aria-describedby="totalBase-help"
                    v-model="typology.totalBase.$model"
                    :class="{
                      'p-invalid':
                        (typology.totalBase.$dirty &&
                          typology.totalBase.$invalid) ||
                        (submitted && typology.totalBase.$invalid),
                    }"
                  />
                  
                  <span class="p-inputgroup-addon cursor-pointer">INR</span>
                </div>
                <small
                    v-if="
                      (typology.totalBase.$dirty &&
                        typology.totalBase.$invalid) ||
                      (submitted && typology.totalBase.$invalid)
                    "
                    class="p-error"
                    >Total Base Value is not available.</small
                  >
              </div>
            </div>
            <div class="col-sm-4">
              <div class="p-field">
                <label for="projectName" class="heading">
                  Available Value
                </label>
                <div class="p-inputgroup">
                  <p-input-text
                    id="availVal"
                    type="text"
                    class="p-inputtext-sm w-100"
                    aria-describedby="availVal-help"
                    v-model="typology.availVal.$model"
                    :class="{
                      'p-invalid':
                        (typology.availVal.$dirty &&
                          typology.availVal.$invalid) ||
                        (submitted && typology.availVal.$invalid),
                    }"
                  />
                  
                  <span class="p-inputgroup-addon cursor-pointer">INR</span>
                </div>
                <small
                    v-if="
                      (typology.availVal.$dirty &&
                        typology.availVal.$invalid) ||
                      (submitted && typology.availVal.$invalid)
                    "
                    class="p-error"
                    >Available Value is not available.</small
                  >
              </div>
            </div>
          </div>
        </p-fieldset>

        <div class="bg-gray table-responsive d-none">
          <table class="table-sm table-borderless" style="min-width: 3500px">
            <tbody>
              <tr>
                <td>Total Units: 0</td>
                <td>Available Units: 0</td>
                <td>Total: 0</td>
                <td>Available Total: 0</td>
                <td>Total Quoted Value: 0 INR</td>
                <td>Total Base Value: 0 INR</td>
                <td>Available Value: 0 INR</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="col-sm-12">
        <div class="p-field">
          <label for="blocks" class="heading">
            Total Number of Towers/Blocks
          </label>
          <p-input-text
            id="blocks"
            type="text"
            class="p-inputtext-sm w-50"
            aria-d
            v-model="$v.formData.blocks.$model"
            :class="{
              'p-invalid':
                ($v.formData.blocks.$dirty && $v.formData.blocks.$invalid) ||
                (submitted && $v.formData.blocks.$invalid),
            }"
          />
          <small
            v-if="
              ($v.formData.blocks.$dirty && $v.formData.blocks.$invalid) ||
              (submitted && $v.formData.blocks.$invalid)
            "
            class="p-error"
            >Total Number of Towers/Blocks is not available.</small
          >
        </div>
      </div>

      <div class="col-sm-12">
        <div class="p-field">
          <label for="floors" class="heading">Total Floors</label>
          <p-input-text
            id="floors"
            type="text"
            class="p-inputtext-sm w-50"
            aria-describedby="floors-help"
            v-model="$v.formData.floors.$model"
            :class="{
              'p-invalid':
                ($v.formData.floors.$dirty && $v.formData.floors.$invalid) ||
                (submitted && $v.formData.floors.$invalid),
            }"
          />
          <small
            v-if="
              ($v.formData.floors.$dirty && $v.formData.floors.$invalid) ||
              (submitted && $v.formData.floors.$invalid)
            "
            class="p-error"
            >Total Floors is not available.</small
          >
        </div>
      </div>

      <div class="col-sm-12 mt-3">
        <label class="heading">Plot Facing</label>
        <table
          class="table-sm borderless w-100 checkbox-table"
          style="table-layout: fixed"
        >
          <tr>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="highway"
                  name="plotfacing"
                  value="Highway"
                  v-model="$v.formData.plotfacing.$model"
                />
                <label for="highway" class="mr-3">Highway</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="villageRoad"
                  name="plotfacing"
                  value="Village Road"
                  v-model="$v.formData.plotfacing.$model"
                />
                <label for="villageRoad" class="mr-3">Village Road </label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="plot-east"
                  name="plotfacing"
                  value="plot-East"
                  v-model="$v.formData.plotfacing.$model"
                />
                <label for="plot-east" class="mr-3">East</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="waste"
                  name="plotfacing"
                  value="Waste"
                  v-model="$v.formData.plotfacing.$model"
                />
                <label for="waste" class="mr-3">Waste</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="north"
                  name="plotfacing"
                  value="North"
                  v-model="$v.formData.plotfacing.$model"
                />
                <label for="north" class="mr-3">North</label>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="south"
                  name="plotfacing"
                  value="South"
                  v-model="$v.formData.plotfacing.$model"
                />
                <label for="south" class="mr-3 mb-3">South</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="northEast"
                  name="plotfacing"
                  value="northEast"
                  v-model="$v.formData.plotfacing.$model"
                />
                <label for="northEast" class="mr-3">North East</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="northWest"
                  name="plotfacing"
                  value="northWest"
                  v-model="$v.formData.plotfacing.$model"
                />
                <label for="northWest" class="mr-3">North West</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="southEast"
                  name="plotfacing"
                  value="southEast"
                  v-model="$v.formData.plotfacing.$model"
                />
                <label for="southEast" class="mr-3">South East</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="southWest" 
                  name="plotfacing"
                  value="southWest"
                  v-model="$v.formData.plotfacing.$model"
                />
                <label for="southWest" class="mr-3">South West</label>
              </div>
            </td>
          </tr>
        </table>
        <small
            v-if="
              ($v.formData.plotfacing.$dirty &&
                $v.formData.plotfacing.$invalid) ||
              (submitted && $v.formData.plotfacing.$invalid)
            "
            class="p-error"
            >Plot Facing is not available.</small
          >
      </div>

      <div class="col-sm-12 mt-3">
        <label class="heading">
          Construction State - For No preference, leave this empty</label
        >
        <table
          class="table-sm borderless w-100 checkbox-table"
          style="table-layout: fixed"
        >
          <tr>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="readytoMove"
                  name="construction"
                  value="readytoMove"
                  v-model="$v.formData.construction.$model"
                />
                <label for="readytoMove" class="mr-3">Ready to Move</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="underconstruction"
                  name="construction"
                  value="underconstruction"
                  v-model="$v.formData.construction.$model"
                />
                <label for="underconstruction" class="mr-3"
                  >Under Construction</label
                >
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="preLaunch"
                  name="construction"
                  value="preLaunch"
                  v-model="$v.formData.construction.$model"
                />
                <label for="preLaunch" class="mr-3">Pre Launch </label>
              </div>
            </td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>

      <div class="col-sm-12 mt-3">
        <label class="heading">
          Property Type- For No preference, leave this empty</label
        >
        <table
          class="table-sm borderless w-100 checkbox-table"
          style="table-layout: fixed"
        >
          <tr>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="gatedCommunity"
                  name="propertytype"
                  value="GatedCommunity"
                  v-model="$v.formData.propertytype.$model"
                />
                <label for="gatedCommunity" class="mr-3">Gated Community</label>
              </div>
            </td>
            <td>
              <div class="p-field-checkbox">
                <p-checkbox
                  id="IndividualProperty"
                  name="propertytype"
                  value="IndividualProperty"
                  v-model="$v.formData.propertytype.$model"
                />
                <label for="IndividualProperty" class="mr-3"
                  >Individual Property
                </label>
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
        
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
  helpers,
  integer,
  maxLength,
} from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";
const alpha = helpers.regex("alpha", /^[a-zA-z]+([\s][a-zA-Z]+)*$/);
export default {
  data() {
    return {
      formData: this.getEmptyForm(),
      submitted: false,

      typologies: [
        {
          topologyDDL: "",
          calendar: "",
          facing: "",
          constStatusDDL: "",
          furnStatusDDL: "",
          flatAvailDDL: "",
          areaSqFt: "",
          quotPrice: "",
          basePrice: "",
          qPPerFt: "",
          bPPerFt: "",
          totalUnit: "",
          availUnit: "",
          totalExt: "",
          availExt: "",
          totalQuot: "",
          totalBase: "",
          availVal: "",
        },
      ],
      country: [
        { name: "Afghanistan", code: "NY" },
        { name: "Albania", code: "RM" },
        { name: "Algeria", code: "LDN" },
        { name: "Andorra", code: "IST" },
        { name: "Antigua and Barbuda", code: "PRS" },
        { name: "Bahamas", code: "BH" },
        { name: "Bahrain", code: "BN" },
        { name: "Belgium", code: "BG" },
        { name: "Belarus", code: "BL" },
        { name: "India", code: "IND" },
      ],
      topologyDDL: [
        { name: "Studio", code: "Studio" },
        { name: "1 BHK", code: "1 BHK" },
        { name: "1.5 BHK", code: "1.5 BHK" },
        { name: "2 BHK", code: "2 BHK" },
        { name: "3 BHK", code: "3 BHK" },
        { name: "4 BHK", code: "4 BHK" },
        { name: "5 BHK", code: "5 BHK" },
        { name: "6 BHK", code: "6 BHK" },
      ],
      facingDDL: [
        { name: "East", code: "east" },
        { name: "West", code: "west" },
        { name: "North", code: "north" },
        { name: "South", code: "south" },
        { name: "North East", code: "north east" },
        { name: "North West", code: "north west" },
        { name: "South East", code: "south east" },
        { name: "South West", code: "south west" },
      ],
      constStatusDDL: [
        { name: "Ready to Move", code: "readytomove" },
        { name: "Under Cunstruction", code: "undercunstruction" },
        { name: "Pre Lunch", code: "prelunch" },
      ],
      furnStatusDDL: [
        { name: "Fully Furnished", code: "FullyFurnished" },
        { name: "Semi Furnished", code: "SemiFurnished" },
        { name: "UnFurnished", code: "UnFurnished" },
      ],
      flatAvailDDL: [
        { name: "Yes", code: "Yes" },
        { name: "No", code: "No" },
        { name: "N/A", code: "N/A" },
      ],
    };
  },

  mixins: [validationMixin],
  validations: {
    formData: {
      plotAddress: {
      
        minLength: minLength(4),
        alpha,
      },
      area: {
        required,
        minLength: minLength(4),
        alpha,
      },
      city: {
        required,
        minLength: minLength(4),
        alpha,
      },
      state: {
        required,
        minLength: minLength(4),
        alpha,
      },
      postalCode: {
       
        minLength: minLength(6),
        maxLength: maxLength(6),
        integer,
      },
      country: {
        required,
      },
      landMark: {
        required,
        minLength: minLength(4),
      },
      totalarea: {
        required,
        integer,
      },
     
      blocks: {
        required,
        integer,
      },
      floors: {
        required,
        integer,
      },

      zone: { required },
      layout: { required },

      construction: {  },
      propertytype: {  },
      plotfacing: {required  },


    },

    typologies:{
      $each:{
         topologyDDL: {
        required,
      },
      calendar: {
        required,
      },
      facing: {
        required,
      },
      constStatusDDL: {
        required,
      },
      furnStatusDDL: {
        required,
      },
      flatAvailDDL: {
        required,
      },
      areaSqFt: {
        required,
        integer,
      },
      quotPrice: {
        required,
        integer,
      },
      basePrice: {
        required,
        integer,
      },
      qPPerFt: {
        required,
        integer,
      },
      bPPerFt: {
        required,
        integer,
      },
      totalUnit: {
        required,
        integer,
      },
      availUnit: {
        required,
        integer,
      },
      totalExt: {
        required,
        integer,
      },
      availExt: {
        required,
        integer,
      },
      totalQuot: {
        required,
        integer,
      },
      totalBase: {
        required,
        integer,
      },
      availVal: {
        required,
        integer,
      },
      }
    }
  },
  methods: {
    addtypologiesRow() {
      this.typologies.push({
        topologyDDL: "",
        calendar: "",
        facing: "",
        constStatusDDL: "",
        furnStatusDDL: "",
        flatAvailDDL: "",
        areaSqFt: "",
        quotPrice: "",
        basePrice: "",
        qPPerFt: "",
        bPPerFt: "",
        totalUnit: "",
        availUnit: "",
        totalExt: "",
        availExt: "",
        totalQuot: "",
        totalBase: "",
        availVal: "",
      });
    },
    deleteRow(index) {
      this.typologies.splice(index, 1);
    },
    nextPage(isFormValid) {
      this.submitted = true;
      console.log("Layout Area Units", this.$v.formData.layout)
      if (!isFormValid) {
        return;
      }
      this.$emit("nextPage", {
        formData: {
          plotAddress: this.$v.formData.plotAddress,
          area: this.$v.formData.area,
          city: this.$v.formData.city,
          state: this.$v.formData.state,
          postalCode: this.$v.formData.postalCode,
          country: this.$v.formData.country,
          landMark: this.$v.formData.landMark,
          totalarea: this.$v.formData.totalarea,
          blocks: this.$v.formData.blocks,
          floors: this.$v.formData.floors,
          zone: this.$v.formData.zone,
          layout: this.$v.formData.layout,
          construction: this.$v.formData.construction,
          propertytype: this.$v.formData.propertytype,
          plotfacing: this.$v.formData.plotfacing,
          typologies:this.typologies,
        },
        pageIndex: 2,
      });
      
    },
    prevPage() {
      this.$emit("prevPage", { pageIndex: 2 });
    },
    getEmptyForm() {
      return {
        plotAddress: "",
        area: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
        landMark: "",
        totalarea: "",
        typologies:[],
        blocks: "",
        floors: "",
        zone: "",
        layout: "Acres",
        plotfacing: "",
        construction: "",
        propertytype: "",
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