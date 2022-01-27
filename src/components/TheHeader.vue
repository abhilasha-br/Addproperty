<template>
  <div class="main-header sticky side-header nav nav-item">
    <div class="container-fluid">
      <div class="main-header-left">
        <div class="responsive-logo">
          <a href="index.html"
            ><img src="img/brand/logo.png" class="logo-1" alt="logo"
          /></a>
          <a href="index.html"
            ><img src="img/brand/favicon.png" class="logo-2" alt="logo"
          /></a>
        </div>
        <div
          class="app-sidebar__toggle"
          data-bs-toggle="sidebar"
        >
          <a class="open-toggle"
            ><i class="header-icon pi pi-align-left"></i>
          </a>
          <a class="close-toggle"
            ><i class="header-icons pi pi-times"></i
          ></a>
        </div>
        <div class="main-header-center ms-1 d-sm-none d-md-none d-lg-block">
          <small>Menu</small>
        </div>
      </div>
      <div class="main-header-right">
        <ul class="nav nav-item navbar-nav-right ms-auto">
          <li class="dropdown nav-item main-header-message">
            <a class="new nav-link"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="header-icon-svgs feather feather-mail"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                ></path>
                <polyline points="22,6 12,13 2,6"></polyline></svg
              ><span class="pulse-danger"></span
            ></a>
            <div class="dropdown-menu">
              <div class="menu-header-content bg-primary text-start">
                <div class="d-flex">
                  <h6 class="dropdown-title mb-1 tx-15 text-white fw-semibold">
                    Messages
                  </h6>
                  <span
                    class="
                      badge
                      rounded-pill
                      bg-warning
                      ms-auto
                      my-auto
                      float-end
                    "
                    >Mark All Read</span
                  >
                </div>
                <p
                  class="
                    dropdown-title-text
                    subtext
                    mb-0
                    text-white
                    op-6
                    pb-0
                    tx-12
                  "
                >
                  You have 4 unread messages
                </p>
              </div>
              <div class="main-message-list chat-scroll">
                <a class="p-3 d-flex border-bottom">
                  <div
                    class="drop-img cover-image"
                    data-bs-image-src="img/faces/3.jpg"
                  >
                    <span class="avatar-status bg-teal"></span>
                  </div>
                  <div class="wd-90p">
                    <div class="d-flex">
                      <h5 class="mb-1 name">Petey Cruiser</h5>
                    </div>
                    <p class="mb-0 desc">
                      I'm sorry but i'm not sure how to help you with that......
                    </p>
                    <p class="time mb-0 text-start float-start ms-2 mt-2">
                      Mar 15 3:55 PM
                    </p>
                  </div>
                </a>
                <a class="p-3 d-flex border-bottom">
                  <div
                    class="drop-img cover-image"
                    data-bs-image-src="img/faces/2.jpg"
                  >
                    <span class="avatar-status bg-teal"></span>
                  </div>
                  <div class="wd-90p">
                    <div class="d-flex">
                      <h5 class="mb-1 name">Jimmy Changa</h5>
                    </div>
                    <p class="mb-0 desc">
                      All set ! Now, time to get to you now......
                    </p>
                    <p class="time mb-0 text-start float-start ms-2 mt-2">
                      Mar 06 01:12 AM
                    </p>
                  </div>
                </a>
                <a class="p-3 d-flex border-bottom">
                  <div
                    class="drop-img cover-image"
                    data-bs-image-src="img/faces/9.jpg"
                  >
                    <span class="avatar-status bg-teal"></span>
                  </div>
                  <div class="wd-90p">
                    <div class="d-flex">
                      <h5 class="mb-1 name">Graham Cracker</h5>
                    </div>
                    <p class="mb-0 desc">
                      Are you ready to pickup your Delivery...
                    </p>
                    <p class="time mb-0 text-start float-start ms-2 mt-2">
                      Feb 25 10:35 AM
                    </p>
                  </div>
                </a>
                <a class="p-3 d-flex border-bottom">
                  <div
                    class="drop-img cover-image"
                    data-bs-image-src="img/faces/12.jpg"
                  >
                    <span class="avatar-status bg-teal"></span>
                  </div>
                  <div class="wd-90p">
                    <div class="d-flex">
                      <h5 class="mb-1 name">Donatella Nobatti</h5>
                    </div>
                    <p class="mb-0 desc">Here are some products ...</p>
                    <p class="time mb-0 text-start float-start ms-2 mt-2">
                      Feb 12 05:12 PM
                    </p>
                  </div>
                </a>
                <a class="p-3 d-flex border-bottom">
                  <div
                    class="drop-img cover-image"
                    data-bs-image-src="img/faces/5.jpg"
                  >
                    <span class="avatar-status bg-teal"></span>
                  </div>
                  <div class="wd-90p">
                    <div class="d-flex">
                      <h5 class="mb-1 name">Anne Fibbiyon</h5>
                    </div>
                    <p class="mb-0 desc">I'm sorry but i'm not sure how...</p>
                    <p class="time mb-0 text-start float-start ms-2 mt-2">
                      Jan 29 03:16 PM
                    </p>
                  </div>
                </a>
              </div>
              <div class="text-center dropdown-footer">
                <a href="text-center">VIEW ALL</a>
              </div>
            </div>
          </li>

          <li class="dropdown nav-item main-header-notification">
            <a class="new nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="header-icon-svgs feather feather-bell"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg
              ><span class="pulse"></span
            ></a>
            <div class="dropdown-menu">
              <div class="menu-header-content bg-primary text-start">
                <div class="d-flex">
                  <h6 class="dropdown-title mb-1 tx-15 text-white fw-semibold">
                    Notifications
                  </h6>
                  <span
                    class="
                      badge
                      rounded-pill
                      bg-warning
                      ms-auto
                      my-auto
                      float-end
                    "
                    >Mark All Read</span
                  >
                </div>
                <p
                  class="
                    dropdown-title-text
                    subtext
                    mb-0
                    text-white
                    op-6
                    pb-0
                    tx-12
                  "
                >
                  You have 4 unread Notifications
                </p>
              </div>
              <div class="main-notification-list Notification-scroll">
                <a class="d-flex p-3 border-bottom">
                  <div class="notifyimg bg-pink">
                    <i class="la la-file-alt text-white"></i>
                  </div>
                  <div class="ms-3">
                    <h5 class="notification-label mb-1">New files available</h5>
                    <div class="notification-subtext">10 hour ago</div>
                  </div>
                  <div class="ms-auto">
                    <i class="las la-angle-right text-end text-muted"></i>
                  </div>
                </a>
                <a class="d-flex p-3 border-bottom">
                  <div class="notifyimg bg-purple">
                    <i class="la la-gem text-white"></i>
                  </div>
                  <div class="ms-3">
                    <h5 class="notification-label mb-1">Updates Available</h5>
                    <div class="notification-subtext">2 days ago</div>
                  </div>
                  <div class="ms-auto">
                    <i class="las la-angle-right text-end text-muted"></i>
                  </div>
                </a>
                <a class="d-flex p-3 border-bottom">
                  <div class="notifyimg bg-success">
                    <i class="la la-shopping-basket text-white"></i>
                  </div>
                  <div class="ms-3">
                    <h5 class="notification-label mb-1">New Order Received</h5>
                    <div class="notification-subtext">1 hour ago</div>
                  </div>
                  <div class="ms-auto">
                    <i class="las la-angle-right text-end text-muted"></i>
                  </div>
                </a>
                <a class="d-flex p-3 border-bottom">
                  <div class="notifyimg bg-warning">
                    <i class="la la-envelope-open text-white"></i>
                  </div>
                  <div class="ms-3">
                    <h5 class="notification-label mb-1">New review received</h5>
                    <div class="notification-subtext">1 day ago</div>
                  </div>
                  <div class="ms-auto">
                    <i class="las la-angle-right text-end text-muted"></i>
                  </div>
                </a>
                <a class="d-flex p-3 border-bottom">
                  <div class="notifyimg bg-danger">
                    <i class="la la-user-check text-white"></i>
                  </div>
                  <div class="ms-3">
                    <h5 class="notification-label mb-1">
                      22 verified registrations
                    </h5>
                    <div class="notification-subtext">2 hour ago</div>
                  </div>
                  <div class="ms-auto">
                    <i class="las la-angle-right text-end text-muted"></i>
                  </div>
                </a>
                <a class="d-flex p-3 border-bottom">
                  <div class="notifyimg bg-primary">
                    <i class="la la-check-circle text-white"></i>
                  </div>
                  <div class="ms-3">
                    <h5 class="notification-label mb-1">
                      Project has been approved
                    </h5>
                    <div class="notification-subtext">4 hour ago</div>
                  </div>
                  <div class="ms-auto">
                    <i class="las la-angle-right text-end text-muted"></i>
                  </div>
                </a>
              </div>
              <div class="dropdown-footer">
                <a>VIEW ALL</a>
              </div>
            </div>
          </li>

          <li class="nav-item full-screen fullscreen-button">
            <a class="new nav-link full-screen-link"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="header-icon-svgs feather feather-maximize"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                ></path></svg
            ></a>
          </li>

          <li class="dropdown main-profile-menu nav nav-item nav-link">
            <a class="profile-user d-flex"
              ><img alt="" src="img/team/team20.png"
            /></a>
            <div class="dropdown-menu">
              <div class="main-header-profile bg-primary p-3">
                <div class="d-flex wd-100p">
                  <div class="main-img-user">
                    <img alt="" src="img/faces/6.jpg" class="" />
                  </div>
                  <div class="ms-3 my-auto">
                    <h6>Meena Kumari</h6>
                    <span>Internal CP</span>
                  </div>
                </div>
              </div>
              <a class="dropdown-item" 
                ><i class="bx bx-user-circle"></i>My Profile</a
              >
              <a class="dropdown-item"
                ><i class="bx bx-envelope"></i>Messages</a
              >
              <a class="dropdown-item" href="signin.html"
                ><i class="bx bx-log-out"></i> Logout</a
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

// <script>
// import * as $ from "jquery";
// export default {
//   methods: {
//     toggleSidebar() {
//       $('app').toggleClass('sidenav-toggled');
//       if ($('body').hasClass('sidenav-toggled')) {
// 			$('body').removeClass('sidenav-toggled-open');
// 		}
//     },
//   },
// };
// </script>