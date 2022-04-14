<template>
  <div class="row">
    <div class="form-signin col-10 col-md-2 mx-auto">
      <form>
        <h1 class="h3 mb-3 fw-normal">免費註冊</h1>

        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            placeholder="name@example.com"
            v-model="formData.email"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            v-model="formData.password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <button class="w-100 btn mt-4 btn-primary" @click="signUp">註冊</button>
      </form>
      <button @click="signUp">123</button>
    </div>
    <div class="form-signin col-10 col-md-2 mx-auto">
      <div class="w-100 d-flex justify-content-end">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <form>
        <h1 class="h3 mb-3 fw-normal">登入</h1>

        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            placeholder="name@example.com"
            v-model="loginForm.email"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            v-model="loginForm.password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <!-- <button class="w-100 btn mt-4 btn-primary" @click="signUp">
          註冊
        </button> -->
      </form>
      <button @click="login">登入</button>
      <button @click="state">nowState</button>
    </div>
    <div><button @click="logout">登出</button></div>

    <!-- test  star -->
    <div class="box d-flex">
      <div
        v-for="n in 5"
        :key="n"
        @mouseenter="enter(n)"
        @mouseleave="out"
        @click="ok(n)"
        :class="{ active: curIndex >= n }"
      >
        <div class="d-flex">
          <div v-if="curIndex < n">
            <i class="bi bi-star"></i>
          </div>
          <div v-if="curIndex >= n">
            <i class="bi bi-star-fill"></i>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <!-- test find username -->
    <div class="d-flex">
      <input type="text" v-model="testUsername" />
      <button class=".btn" @click="searchUsername">search</button>
    </div>
    <!-- test button -->
    <button
      type="button"
      class="btn btn-primary"
      id="liveToastBtn"
      @click="toast()"
    >
      Show live toast
    </button>

    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
      <div
        id="liveToast"
        class="toast align-items-center text-white bg-primary border-0"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        data-bs-delay="5000"
      >
        <div class="toast-body">123</div>
      </div>
    </div>
    <!-- test Tooltip -->
    <button
      type="button"
      class="btn btn-secondary"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      title="Tooltip on top"
    >
      Tooltip on top
    </button>
    <button
      type="button"
      class="btn btn-secondary"
      data-bs-toggle="tooltip"
      data-bs-placement="bottom"
      title="Tooltip on bottom"
    >
      Tooltip on
    </button>
    <button class="btn btn-primary" type="button" :disabled=" isDisable" @click="spinner()">
      <span class="spinner-border-sm" role="status" :class="{'spinner-border': isLoading}" aria-hidden="true"></span>
      Loading...
    </button>
    <button class="btn btn-primary">忘記密碼</button>
  </div>
</template>
<style></style>
<script>
import { Toast } from "bootstrap";
import { db, auth } from "@/db";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  // sendPasswordResetEmail
} from "firebase/auth";
import {
  ref as fireRef,
  set,
  query,
  orderByChild,
  get,
  equalTo,
} from "firebase/database";

export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      loginForm: {
        email: "",
        password: "",
      },
      curIndex: 0, // 保存的当前鼠标经过的项目的序号
      flag: false, // false 表示鼠标没有点击过，true，表示选择过
      testUsername: "",
      isDisable: false,
      isLoading: false,
    };
  },
  methods: {
    enter(n) {
      //n 取值1-5
      if (!this.flag) {
        this.curIndex = n;
        console.log("this.curIndex: ", this.curIndex);
      }
    },
    out() {
      if (!this.flag) {
        // 没有点击过，curIndex值才会变化
        this.curIndex = -1;
      }
    },
    ok(n) {
      console.log(this.flag);
      if (this.flag == false) {
        this.flag = true;
        console.log("click");
      } else {
        this.flag = false;
        console.log("click");
      }
      this.curIndex = n; // 确认评价的星级数
    },
    signUp() {
      const vm = this;
      const email = vm.formData.email;
      const password = vm.formData.password;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user: ", user);
          set(fireRef(db, "user/" + user.uid), {
            email,
          });
          console.log(123);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("errorCode: ", errorCode);
          console.log("errorMessage: ", errorMessage);
        });
    },
    login() {
      const vm = this;
      const email = vm.loginForm.email;
      const password = vm.loginForm.password;
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user: ", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("errorCode: ", errorCode);
          console.log("errorMessage: ", errorMessage);
        });
    },
    state() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          console.log(user);
          const uid = user.uid;
          console.log("uid: ", uid);
          // ...
        } else {
          // User is signed out
          console.log("User is signed out: ");
          // ...
        }
      });
    },
    logout() {
      signOut(auth).then(() => {
        console.log(`the user signed out`);
      });
    },
    searchUsername() {
      console.log("click");
      const text = this.testUsername;
      const que = query(
        fireRef(db, "user"),
        orderByChild("username"),
        equalTo(`${text}`)
      );
      let a = {};
      get(que).then((snapshot) => {
        snapshot.forEach((item) => {
          console.log(item.val());
          a = item.val();
          console.log(a.post);
        });
      });
    },
    toast() {
      var toastLiveExample = document.getElementById("liveToast");
      var toast = new Toast(toastLiveExample);
      toast.show();
    },
    spinner(){
      this.isLoading = true;
      this.isDisable = true;
      setTimeout(() => {
        this.isLoading = false;
        this.isDisable = false;
      },3000)
    },
    forgetPassword() {
  //     sendPasswordResetEmail(auth, email)
  //     .then(() => {
  //       // Password reset email sent!
  //     })
  //     .catch((error) => {
  //       console.log('error: ', error);
  //   // ..
  // });
    }
  },
  //   mounted() {
  //     var tooltipTriggerList = [].slice.call(
  //       document.querySelectorAll('[data-bs-toggle="tooltip"]')
  //     );
  //     console.log('tooltipTriggerList: ', tooltipTriggerList);
  //     tooltipTriggerList.map(function (tooltipTriggerEl) {
  //       console.log(4444)
  //       return new Tooltip(tooltipTriggerEl);
  //     });
  // //           Array.from(document.querySelectorAll('button[data-bs-toggle="tooltip"]'))
  // //  .forEach(tooltipNode => new Tooltip(tooltipNode))
  //   },
};
</script>
