<template>
  <aside
    class="app-sidebar sidebar-scroll ps ps--active-y"
    @mouseenter="toggleSideNav"
    @mouseleave="toggleSideNav"
  >
    <div class="main-sidebar-header active">
      <a class="desktop-logo logo-light active"
        ><img src="img/brand/logo.png" class="main-logo" alt="BuyOProperty"
      /></a>
      <a class="logo-icon mobile-logo icon-light active"
        ><img src="img/brand/favicon.png" class="logo-icon" alt="BuyOProperty"
      /></a>
    </div>
    <div class="main-sidemenu">
      <div class="app-sidebar__user clearfix">
        <div class="dropdown user-pro-body">
          <div class="">
            <img
              alt="user-img"
              class="avatar avatar-xl brround"
              src="img/team/team20.png"
            /><span class="avatar-status profile-status bg-green"></span>
          </div>
          <div class="user-info">
            <h4 class="fw-semibold mt-3 mb-0">Meena Kumari</h4>
            <span class="mb-0 text-muted">Internal CP</span>
          </div>
        </div>
      </div>
      <ul class="side-menu">
        <li class="slide">
          <a class="side-menu__item" href="/home/dashboard"
            ><i class="fas fa-tachometer-alt side-menu__icon"></i>
            <span class="side-menu__label">Dashboard</span></a
          >
        </li>

        <li class="slide">
          <a class="side-menu__item" data-bs-toggle="slide"
            ><i class="fa fa-building side-menu__icon"></i
            ><span class="side-menu__label">My Properties</span
            ><i class="angle pi pi-angle-down"></i
          ></a>
          <ul class="slide-menu">
            <li>
              <a class="slide-item" href="/home/property-list"
                >New Properties</a
              >
            </li>
            <li>
              <a class="slide-item">Sold Properties</a>
            </li>
          </ul>
        </li>
        <li class="slide">
          <a class="side-menu__item"
            ><i class="fas fa-user side-menu__icon"></i
            ><span class="side-menu__label">My Profile</span></a
          >
        </li>
        <li class="slide">
          <a class="side-menu__item" href="/home/all-leads"
            ><i class="fas fa-filter side-menu__icon"></i
            ><span class="side-menu__label">All Leads</span></a
          >
        </li>
        <li class="slide">
          <a class="side-menu__item"
            ><i class="pi pi-sign-out side-menu__icon"></i
            ><span class="side-menu__label">Logout</span></a
          >
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import * as $ from "jquery";

export default {
  methods: {
    toggleSideNav() {
      if ($("body").hasClass("sidenav-toggled")) {
        if ($("body").hasClass("sidenav-toggled-open")) {
          $("body").removeClass("sidenav-toggled-open");
        } else {
          $("body").addClass("sidenav-toggled-open");
        }
      }
    },
  },
  mounted() {
    $(".app-sidebar li a").each(function () {
      var pageUrl = window.location.href.split(/[?#]/)[0];
      console.log("url", pageUrl);
      if (this.href == pageUrl) {
        $(this).addClass("active");
        $(this).parent().addClass("is-expanded");
        $(this).parent().parent().prev().addClass("active");
        $(this).parent().parent().addClass("open");
        $(this).parent().parent().prev().addClass("is-expanded");
        $(this).parent().parent().parent().addClass("is-expanded");
        $(this).parent().parent().parent().parent().addClass("open");
        $(this).parent().parent().parent().parent().prev().addClass("active");
        $(this)
          .parent()
          .parent()
          .parent()
          .parent()
          .parent()
          .addClass("is-expanded");
      }
    });
  },
};
</script>