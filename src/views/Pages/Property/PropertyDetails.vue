<template>
  <section>
    <div class="breadcrumb-header justify-content-between">
      <div class="my-auto">
        <div class="d-flex">
          <span class="icons-list-item bg-primary"
            ><i class="pi pi-building"></i>
          </span>
          <h4 class="content-title mb-0 my-auto">
            <a class="text-muted" href="/home/property-list"> Properties</a> /
            Property Details
          </h4>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <div class="single-verified-area">
          <div class="item-title">
            <h3><a>Family House For Sale</a></h3>
          </div>
        </div>
        <div class="single-item-address">
          <ul>
            <li>
              <i class="fas fa-map-marker-alt"></i> House#18, Road #07, Albany,
              Benglore, 08525 /
            </li>
            <li><i class="fas fa-clock"></i> 7 months ago /</li>
            <li><i class="fas fa-eye"></i> Views: 1,230</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-lg-12 col-md-12">
        <p-galleria
          :value="images"
          :responsiveOptions="responsiveOptions"
          :numVisible="5"
          class="w-100"
        >
          <template #item="slotProps">
            <img
              :src="slotProps.item.itemImageSrc"
              :alt="slotProps.item.alt"
              style="width: 100%"
            />
          </template>
          <template #thumbnail="slotProps">
            <img
              :src="slotProps.item.thumbnailImageSrc"
              :alt="slotProps.item.alt"
            />
          </template>
        </p-galleria>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="single-listing-box1">
          <div class="overview-area" id="one-page2">
            <h3 class="item-title">Overview</h3>
            <div class="gallery-icon-box">
              <div class="item-icon-box">
                <div class="item-icon">
                  <i class="far fa-comment-alt"></i>
                </div>
                <ul class="item-number">
                  <li>ID No :</li>
                  <li class="deep-clr">98560</li>
                </ul>
              </div>
              <div class="item-icon-box">
                <div class="item-icon">
                  <i class="fas fa-home"></i>
                </div>
                <ul class="item-number">
                  <li>Type :</li>
                  <li class="deep-clr">Apartment</li>
                </ul>
              </div>
              <div class="item-icon-box">
                <div class="item-icon">
                  <i class="fas fa-bed"></i>
                </div>
                <ul class="item-number">
                  <li>Bed Room :</li>
                  <li class="deep-clr">04</li>
                </ul>
              </div>
              <div class="item-icon-box">
                <div class="item-icon">
                  <i class="fas fa-shower"></i>
                </div>
                <ul class="item-number">
                  <li>ID No :</li>
                  <li class="deep-clr">98560</li>
                </ul>
              </div>
            </div>
            <div class="gallery-icon-box">
              <div class="item-icon-box">
                <div class="item-icon">
                  <i class="fas fa-home"></i>
                </div>
                <ul class="item-number">
                  <li>Parking :</li>
                  <li class="deep-clr">Yes</li>
                </ul>
              </div>
              <div class="item-icon-box">
                <div class="item-icon">
                  <i class="fas fa-home"></i>
                </div>
                <ul class="item-number">
                  <li>Area :</li>
                  <li class="deep-clr">1050 sqft</li>
                </ul>
              </div>
              <div class="item-icon-box">
                <div class="item-icon">
                  <i class="fas fa-ruler-combined"></i>
                </div>
                <ul class="item-number">
                  <li>Land Size :</li>
                  <li class="deep-clr">15,000 sqft</li>
                </ul>
              </div>
              <div class="item-icon-box">
                <div class="item-icon">
                  <i class="far fa-square"></i>
                </div>
                <ul class="item-number">
                  <li>Year Build :</li>
                  <li class="deep-clr">2021</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="overview-area listing-area" id="one-page3">
            <h3 class="item-title">About This Listing</h3>
            <p>
              Praesent eros turpis, commodo vel justo at, pulvinar mollis eros.
              Mauris aliquet eu quam id ornareor bi ac quam enim. Cras vitae
              nulla condimentum, semper dolor non, faucibus dolor. Vivamus adip
              iscing eros quis orci fringilla, sed pretium lectus viverra.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
            <p>
              Praesent eros turpis, commodo vel justo at, pulvinar mollis eros.
              Mauris aliquet eu quam id ornareor bi ac quam enim. Cras vitae
              nulla condimentum, semper dolor non, faucibus dolor. Vivamus adip
              iscing eros quis orci fringilla, sed pretium lectus viverra.
            </p>
          </div>

          <div
            class="overview-area single-details-box table-responsive"
            id="one-page4"
          >
            <h3 class="item-title">Details</h3>
            <table class="table-box1">
              <tr>
                <td class="item-bold">Id No</td>
                <td>98560</td>
                <td class="item-bold">Price</td>
                <td>₹50,00,000</td>
              </tr>
              <tr>
                <td class="item-bold">Property Type</td>
                <td>Apartment</td>
                <td class="item-bold">Parking</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td class="item-bold">Rooms</td>
                <td>04</td>
                <td class="item-bold">Property Status</td>
                <td>For Sale</td>
              </tr>
              <tr>
                <td class="item-bold">Bath Rooms</td>
                <td>03</td>
                <td class="item-bold">Land Area</td>
                <td>15,000 sqft</td>
              </tr>
              <tr>
                <td class="item-bold">Size</td>
                <td>1050 sqft</td>
                <td class="item-bold">Year Build</td>
                <td>2021</td>
              </tr>
            </table>
          </div>

          <div class="overview-area ameniting-box" id="one-page5">
            <h3 class="item-title">Features & Amenities</h3>
            <div class="row">
              <div class="col-lg-4">
                <ul class="ameniting-list">
                  <li><i class="fas fa-check-circle"></i>TV Cable</li>
                  <li><i class="fas fa-check-circle"></i>Air Conditioning</li>
                  <li><i class="fas fa-check-circle"></i>Barbeque</li>
                  <li><i class="fas fa-check-circle"></i>Gym</li>
                </ul>
              </div>
              <div class="col-lg-4">
                <ul class="ameniting-list">
                  <li><i class="fas fa-check-circle"></i>Swimming Pool</li>
                  <li><i class="fas fa-check-circle"></i>Laundry</li>
                  <li><i class="fas fa-check-circle"></i>Microwave</li>
                  <li><i class="fas fa-check-circle"></i>Lawn</li>
                </ul>
              </div>
              <div class="col-lg-4">
                <ul class="ameniting-list">
                  <li><i class="fas fa-check-circle"></i>Sauna</li>
                  <li><i class="fas fa-check-circle"></i>Window Coverings</li>
                  <li><i class="fas fa-check-circle"></i>CC Camera</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="overview-area map-box" id="one-page6">
            <h3 class="item-title">Map Location</h3>
            <div class="item-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9973874144!2d77.35074421903857!3d12.95384772557775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1641636729099!5m2!1sen!2sin"
                width="100%"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div class="overview-area floor-plan-box pb-3">
            <h3 class="item-title">Floor Plans</h3>
            <p-panel header="First Floor Plan" :toggleable="true" class="bg-primary">
              <template #icons>
                <ul>
                  <li><i class="fas fa-bed"></i><span>Beds: 03</span></li>
                  <li><i class="fas fa-shower"></i><span>Baths: 02</span></li>
                  <li>
                    <i class="fas fa-ruler-combined"></i><span>931Sqft</span>
                  </li>
                </ul>
              </template>
              <div class="d-flex justify-content-center">
                <div class="item-img">
                  <img src="img/figure/floor_plan.jpg" alt="shape" />
                </div>
              </div>
            </p-panel>

            <p-panel header="Second Floor Plan" :toggleable="true" class="bg-primary" collapsed>
              <template #icons>
                <ul>
                  <li><i class="fas fa-bed"></i><span>Beds: 03</span></li>
                  <li><i class="fas fa-shower"></i><span>Baths: 02</span></li>
                  <li>
                    <i class="fas fa-ruler-combined"></i><span>931Sqft</span>
                  </li>
                </ul>
              </template>
              <div class="d-flex justify-content-center">
                <div class="item-img">
                  <img src="img/figure/floor_plan.jpg" alt="shape" />
                </div>
              </div>
            </p-panel>

            <p-panel header="Third Floor Plan" :toggleable="true" class="bg-primary" collapsed>
              <template #icons>
                <ul>
                  <li><i class="fas fa-bed"></i><span>Beds: 03</span></li>
                  <li><i class="fas fa-shower"></i><span>Baths: 02</span></li>
                  <li>
                    <i class="fas fa-ruler-combined"></i><span>931Sqft</span>
                  </li>
                </ul>
              </template>
              <div class="d-flex justify-content-center">
                <div class="item-img">
                  <img src="img/figure/floor_plan.jpg" alt="shape" />
                </div>
              </div>
            </p-panel>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          itemImageSrc: "img/property/01.jpg",
          thumbnailImageSrc: "img/property/01.jpg",
          alt: "Description for Image 1",
          title: "Title 1",
        },
        {
          itemImageSrc: "img/property/02.jpg",
          thumbnailImageSrc: "img/property/02.jpg",
          alt: "Description for Image 2",
          title: "Title 2",
        },
        {
          itemImageSrc: "img/property/03.jpg",
          thumbnailImageSrc: "img/property/03.jpg",
          alt: "Description for Image 3",
          title: "Title 3",
        },
        {
          itemImageSrc: "img/property/04.jpg",
          thumbnailImageSrc: "img/property/04.jpg",
          alt: "Description for Image 4",
          title: "Title 4",
        },
        {
          itemImageSrc: "img/property/01.jpg",
          thumbnailImageSrc: "img/property/01.jpg",
          alt: "Description for Image 5",
          title: "Title 5",
        },
        {
          itemImageSrc: "img/property/02.jpg",
          thumbnailImageSrc: "img/property/02.jpg",
          alt: "Description for Image 6",
          title: "Title 6",
        },
        {
          itemImageSrc: "img/property/03.jpg",
          thumbnailImageSrc: "img/property/03.jpg",
          alt: "Description for Image 7",
          title: "Title 7",
        },
        {
          itemImageSrc: "img/property/04.jpg",
          thumbnailImageSrc: "img/property/04.jpg",
          alt: "Description for Image 8",
          title: "Title 8",
        },
        {
          itemImageSrc: "img/property/01.jpg",
          thumbnailImageSrc: "img/property/01.jpg",
          alt: "Description for Image 9",
          title: "Title 9",
        },
      ],
      responsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 5,
        },
        {
          breakpoint: "768px",
          numVisible: 3,
        },
        {
          breakpoint: "560px",
          numVisible: 1,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
ul {
  list-style: outside none none;
  margin: 0;
  padding: 0;
}

.single-item-address li {
  display: inline-block;
  color: #878c9f;
  margin-right: 7px;
  font-weight: 400;
  font-size: 15px;
}

.single-listing-box1 .overview-area {
  background-color: #fff;
  padding: 30px 30px 0px 30px;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  margin-top: 30px;
}

.single-listing-box1 .overview-area .item-title {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
}

.single-listing-box1 .overview-area .gallery-icon-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.single-listing-box1 .overview-area .gallery-icon-box .item-icon-box {
  display: flex;
  width: 25%;
}

.single-listing-box1
  .overview-area
  .gallery-icon-box
  .item-icon-box
  .item-icon
  i {
  color: #000;
  font-size: 26px;
  height: 52px;
  width: 52px;
  border-style: solid;
  border-width: 1px;
  border-color: #e8e9f1;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0px 4px 18px 0px rgba(188, 192, 202, 26%);
  padding: 7px 7px;
  display: inline-block;
  line-height: 46px;
  text-align: center;
}

.single-listing-box1
  .overview-area
  .gallery-icon-box
  .item-icon-box
  .item-number {
  margin-left: 15px;
}

.single-listing-box1 .listing-area {
  margin-top: -1px;
  padding: 20px 30px 10px 30px;
}

.single-listing-box1 .listing-area p {
  color: #878c9f;
  line-height: 26px;
}

p {
  margin: 0 0 20px 0;
  font-weight: 400;
  font-size: 16px;
  color: #70778a;
}

.single-listing-box1 .single-details-box {
  margin-top: -1px;
  padding: 20px 30px 18px 30px;
}

.single-listing-box1 .overview-area {
  background-color: #fff;
  padding: 30px 30px 0px 30px;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  margin-top: 30px;
}

.single-listing-box1 .single-details-box .table-box1 {
  width: 100%;
}

.single-listing-box1 .single-details-box .table-box1 .item-bold {
  font-size: 15px;
  font-weight: 600;
  color: #212121;
}

.single-listing-box1 .single-details-box .table-box1 td {
  color: #878c9f;
  font-size: 15px;
  margin-left: 30px;
  padding: 10px;
  font-family: "Muli", sans-serif;
  font-weight: 500;
}

.single-listing-box1 .single-details-box .table-box1 tr:nth-child(even) {
  background-color: #f3f7ff;
}

.single-listing-box1 .ameniting-box {
  margin-top: -1px;
  padding: 20px 30px 30px 30px;
}

.single-listing-box1 .overview-area {
  background-color: #fff;
  padding: 30px 30px 0px 30px;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  margin-top: 30px;
}

.single-listing-box1 .ameniting-box .ameniting-list li {
  color: #878c9f;
  font-size: 15px;
  font-weight: 400;
  display: block;
  margin-bottom: 12px;
}

.single-listing-box1 .ameniting-box .ameniting-list li i {
  color: #007bff;
  font-size: 18px;
  margin-right: 12px;
}

.single-listing-box1 .map-box {
  margin-top: -1px;
  padding: 20px 30px 30px 30px;
}

.single-listing-box1 .overview-area {
  background-color: #fff;
  padding: 30px 30px 0px 30px;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  margin-top: 30px;
}

.single-listing-box1 .floor-plan-box {
  margin-top: -1px;
  padding: 20px 30px 30px 30px;
}

.single-listing-box1 .overview-area {
  background-color: #fff;
  padding: 30px 30px 0px 30px;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  margin-top: 30px;
}

// .single-listing-box1 .floor-plan-box .accordion .card {
//     margin-bottom: -2px;
//     border-radius: 4px;
// }

// .single-listing-box1 .floor-plan-box .accordion .card .card-header {
//     padding: 0;
//     border-radius: 4px;
//     background-color: #007bff;
//     color: #fff;
// }

// .single-listing-box1 .floor-plan-box .accordion .card .card-header .heading-title {
//     position: relative;
//     cursor: pointer;
//     padding: 10px 20px;
//     font-weight: 600;
//     font-size: 15px;
//     font-family: "Roboto", sans-serif;
//     color: #fff;
//     border: none;
//     opacity: 90%;
//     background-color: #007bff;
//     transition: all 0.3s ease-in-out;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
// }

// .single-listing-box1 .floor-plan-box .accordion .card .card-header .heading-title:before {
//     content: "\f068";
//     font-family: "Font Awesome 5 Free";
//     height: 34px;
//     width: 34px;
//     font-size: 18px;
//     font-weight: 600;
//     color: #fff;
//     background-color: transparent;
//     position: absolute;
//     top: 50%;
//     right: 5px;
//     transform: translateY(-50%);
//     text-align: center;
//     line-height: 32px;
//     border: 0;
//     border-radius: 3px;
//     transition: all 0.3s ease-in-out;
// }

// .single-listing-box1 .floor-plan-box .accordion .card .card-body {
//     padding: 30px;
//     background-color: #f3f7ff;
// }

// .single-listing-box1 .floor-plan-box .accordion .card .card-body .item-img {
//     text-align: center;
//     background-color: #fff;
//     padding: 20px 0;
// }

// .single-listing-box1 .floor-plan-box .accordion .card .card-header .heading-title .card-list {
//     position: absolute;
//     top: 14px;
//     right: 65px;
// }

.single-listing-box1 .floor-plan-box .p-panel ul {
  display: flex;
  align-items: center;
}

.single-listing-box1 .floor-plan-box .p-panel ul li {
  margin: 0 10px;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;
  font-weight: 400;
}
.single-listing-box1 .floor-plan-box .p-panel ul li i {
  margin: 0 10px;
}
</style>
