<template>
  <section class="container">
    <div class="col-12">
      <div class="card shadow mx-auto" style="width: 350px">
        <b class="fz-2 text-start border-bottom p-3 w-100">忘記密碼</b>
        <form class="px-3 border-bottom pb-3">
          <div class="mb-2">
            <div class="text-start py-3">
              請輸入你的電子郵件地址﹐我們將重置密碼信發至你的郵箱。
            </div>
            <div class="text-danger fz-0 mb-2" v-if="errorMsg == true">
              很抱歉，你所填寫的Email未有註冊或填寫錯誤。
            </div>
            <input
              type="email"
              class="form-control p-2"
              placeholder="name@example.com"
              v-model="email"
            />
            <button
              class="btn btn-primary w-100 mt-3 mb-5"
              @click.prevent="sdEmailReset()"
            >
              傳送登入連結
            </button>
          </div>
        </form>
        <div>
          <button class="btn btn-light w-100" @click.prevent="backToLogin()">
            返回登入
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { auth } from "@/db";
import { sendPasswordResetEmail } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      errorMsg: false,
    };
  },
  methods: {
    backToLogin() {
      this.$router.push(`/login`);
    },
    sdEmailReset() {
      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          alert('密碼重置信已發送')
          this.$router.push(`/login`);
          // Password reset email sent!
        })
        .catch((error) => {
          console.log('error: ', error);
          this.errorMsg = true;
          // ..
        });
    },
  },
};
</script>

<style scoped>
section {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
