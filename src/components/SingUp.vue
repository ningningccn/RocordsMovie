<template>
  <div>
    <div class="modal fade" id="modal_login" tabindex="-1"      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content p-4">
          <div class="d-flex justify-content-end">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <h1 class="h3 mb-3 fw-normal">登入</h1>

              <div class="form-floating">
                <input
                  type="email"
                  class="form-control"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div>

                <button class="w-100 btn mt-4 btn-primary" type="submit">
                  登入
                </button>

              </div>
            </form>
            <div class="d-flex justify-content-between mt-3">
              <a href=""
                data-bs-toggle="modal"
                data-bs-target="#Signin"
                data-bs-dismiss="modal">忘記密碼
              </a>
              <a href=""
                data-bs-toggle="modal"
                data-bs-target="#SignIn"
                data-bs-dismiss="modal">註冊
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- sign up -->
    <div class="modal fade" id="SignIn" tabindex="-1"      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content p-4">
          <div class="d-flex justify-content-end">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <h1 class="h3 mb-3 fw-normal">免費註冊</h1>

              <div class="form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div>

                <button class="w-100 btn mt-4 btn-primary" type="submit">
                  註冊
                </button>

              </div>
            </form>
            <div class="d-flex mt-3">
              <a href=""
                data-bs-toggle="modal"
                data-bs-target="#modal_login"
                data-bs-dismiss="modal">已有帳號
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    hello
  </div>


</template>
