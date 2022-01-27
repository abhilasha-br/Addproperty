<template>
  <div class="page">
    <div class="container-fluid">
      <div class="row no-gutter">
        <div
          class="
            col-md-6 col-lg-6 col-xl-7
            d-none d-md-flex
            bg-primary-transparent
          "
        >
          <div class="row wd-100p mx-auto text-center">
            <div class="col-md-12 col-lg-12 col-xl-12 my-auto mx-auto wd-100p">
              <img
                src="img/media/login.png"
                class="my-auto ht-xl-80p wd-md-100p wd-xl-80p mx-auto"
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-5 bg-white">
          <div class="login d-flex align-items-center py-2">
            <div class="container p-0">
              <div class="row">
                <div class="col-md-10 col-lg-10 col-xl-9 mx-auto">
                  <div class="card-sigin">
                    <div class="mb-3 text-center">
                      <a>
                        <img
                          src="img/brand/logo.png"
                          alt="BRIC SPACES"
                        />
                      </a>
                    </div>
                    <div class="card-sigin">
                      <div class="main-signup-header">
                        <h2>Login</h2>

                        <form action="#">
                          <div class="form-group">
                            <label class="form-label">Email</label>
                            <div class="input-group-icon">
                              <i class="pi pi-user"></i>
                              <input
                                class="form-control"
                                placeholder="Enter your email"
                                type="text"
                              />
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="form-label">Password</label>
                            <div class="input-group-icon">
                              <i class="pi pi-envelope"></i>
                              <input
                                class="form-control"
                                placeholder="Enter your password"
                                type="password"
                              />
                            </div>
                          </div>
                          <a
                            href="/home/dashboard"
                            class="btn btn-dark btn-block"
                            >Sign In</a
                          >
                        </form>
                        <!-- <div class="main-signin-footer mt-5">
                          <p><a>Forgot password?</a></p>
                          <p>
                            Don't have an account?
                            <a>Create an Account</a>
                          </p>
                        </div> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
