<template>
  <section class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="ms-sm-auto mx-auto w-100 p-4">
          <b class="d-flex"
            ><img src="../../assets/logo_black.png" alt="" width="100%"
          /></b>
          <b class="d-flex mt-3 fz-1"
            >你會不會有曾經看過的電影，因為時間而忘記電影名字，可以透過Records
            Video 儲存電影，讓你可以重溫自己曾經看過的電影。</b
          >
        </div>
      </div>
      <div class="col-md-6">
        <!-- login -->
        <div class="card shadow mx-auto" style="width: 350px">
          <div class="p-3">
            <form @submit.prevent="login()">
              <div class="form-floating mb-2">
                <input
                  type="email"
                  class="form-control"
                  placeholder="name@example.com"
                  v-model="loginForm.email"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-2">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  v-model="loginForm.password"
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div class="text-danger fz-0 mb-2" v-if="loginError == true">
                很抱歉，你的密碼不正確，請再次檢查密碼。
              </div>
              <button class="btn btn-primary w-100 py-2">
                <b class="fz-1">登入</b>
              </button>
            </form>
            <!-- forget password -->
            <div class="mt-3">
              <a href="#" @click="forget()"><b>忘記密碼？</b></a>
            </div>
            <hr />
            <!-- sign up -->
            <button class="btn btn-signUp py-2" @click.prevent="signupModal">
              <b class="fz-1">建立新帳號</b>
            </button>
            <!-- Modal -->
            <div
              class="modal fade"
              id="signup"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <div class="modal-title font-lg" id="exampleModalLabel">
                      註冊
                    </div>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <!-- signup error message  -->
                    <div
                      class="mb-3 p-3 errorMessage"
                      v-if="signUpError == true"
                    >
                      有重覆的電郵或電郵格式錯誤
                    </div>
                    <form>
                      <div class="form-floating mb-3">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="name@example.com"
                          v-model="signUpForm.email"
                        />
                        <label for="floatingInput">Email address</label>
                      </div>
                      <div class="form-floating">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Password"
                          v-model="signUpForm.password"
                        />
                        <label for="floatingPassword">Password</label>
                      </div>

                      <button
                        class="w-50 btn mt-4 btn-signUp p-2"
                        @click.prevent="signUp"
                      >
                        <b>註冊</b>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="position-fixed bottom-0 w-100 p-5" style="z-index: 11">
    <div
      id="liveToast"
      class="toast mx-auto align-items-center btn-signUp text-white border-0"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-bs-delay="3000"
    >
      <div class="toast-body p-3">已成功註冊</div>
    </div>
  </div>
</template>

<script>
import { db, auth } from "@/db";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ref as fireRef, set } from "firebase/database";
import { Modal, Toast } from "bootstrap";
export default {
  components: {},
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      signUpForm: {
        email: "",
        password: "",
      },
      loginError: false,
      signUpError: false,
      modal: null,
    };
  },
  methods: {
    login() {
      const vm = this;
      const email = vm.loginForm.email;
      const password = vm.loginForm.password;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          console.log(userCredential);
          const user = userCredential.user;
          console.log("user: ", user);
          this.$router.push(`/`);
          console.log(123);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.loginError = true;
          console.log("errorCode: ", errorCode);
          console.log("errorMessage: ", errorMessage);
        });
    },
    signupModal() {
      this.modal = new Modal(document.getElementById("signup"));
      this.modal.show();
      console.log("modal: ", this.modal);
    },
    signUp() {
      const vm = this;
      const email = vm.signUpForm.email;
      const password = vm.signUpForm.password;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user: ", user);
          set(fireRef(db, "user/" + user.uid), {
            email,
          });
          this.modal.hide();
          var toastLiveExample = document.getElementById("liveToast");
          var toast = new Toast(toastLiveExample);
          toast.show();
        })
        .catch((error) => {
          this.signUpError = true;
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("errorCode: ", errorCode);
          console.log("errorMessage: ", errorMessage);
        });
    },
    forget() {
      this.$router.push(`/forget`);
    }
  },
};
</script>

<style scoped>
section {
  margin-top: 100px;
  margin-bottom: 100px;
}

.btn-signUp {
  background-color: #42b72a;
  color: white;
}
.errorMessage {
  background-color: #f8d7da;
  border: 1px solid #f5c2c7;
}
</style>
