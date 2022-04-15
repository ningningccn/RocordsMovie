<template>
  <header>
    <nav
      class="navbar navbar-expand-md navbar-light"
      style="background-color: #032541"
    >
      <div class="container-md">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link class="navbar-brand text-white" to="/"
          ><img src="../assets/logo.png" width="100"
        /></router-link>
        <!-- <i class="bi bi-person-circle"></i> -->
        <div class="nav d-none d-md-flex">
          <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
          <!-- <router-link class="nav-link" to=""><i class="bi bi-plus-square"></i></router-link> -->
          <!-- <button class="btn" @click="testHide"><i class="bi bi-plus-square"></i></button> -->
          <router-link class="nav-link" to="" @click="openModal"
            ><i class="bi bi-plus-square"></i
          ></router-link>
          <router-link class="nav-link" to="/movie">電影</router-link>
          <router-link class="nav-link" to="/tvDrama">電視劇</router-link>
          <router-link class="nav-link" to="/tvShow">綜藝</router-link>
          <router-link class="nav-link" to="/cartoon">動漫</router-link>
          <div class="dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-person-circle"></i>
            </a>

            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuLink"
            >
              <a class="dropdown-item" href="#" @click.prevent="logout()"
                >登出</a
              >
            </ul>
          </div>
        </div>
        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">新增記錄</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <!-- body -->
              <div class="modal-body">
                <form @submit.prevent="addData()">
                  <div>
                    <img
                      v-if="showImg"
                      :src="showImg"
                      class="w-75 mx-auto mb-3"
                    />
                    <div class="input-group mb-3" v-if="!showImg">
                      <input
                        type="file"
                        accept="image/*"
                        class="form-control"
                        @change="handleFile"
                      />
                    </div>
                    <div class="input-group mb-3" v-else>
                      <button
                        type="button"
                        class="btn btn-primary mx-auto"
                        @click="removeImg"
                      >
                        更換照片
                      </button>
                    </div>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text">紀錄日期</span>
                    <input
                      type="date"
                      class="form-control"
                      required
                      v-model="moviePost.watchDate"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01"
                      >類別</label
                    >
                    <select
                      class="form-select"
                      id="inputGroupSelect01"
                      v-model="moviePost.inputMainValue"
                    >
                      <option value="none" selected disabled>請選擇</option>
                      <option value="Movie">電影</option>
                      <option value="TVDrama">電視劇</option>
                      <option value="TVShow">綜藝</option>
                      <option value="Cartoon">動漫</option>
                    </select>
                  </div>
                  <div
                    v-if="moviePost.inputMainValue == 'Movie'"
                    class="input-group mb-3"
                  >
                    <label class="input-group-text" for="inputGroupSelect01"
                      >分類</label
                    >
                    <select
                      class="form-select"
                      v-model="moviePost.inputChildValue"
                    >
                      <option value="none" selected disabled>請選擇</option>
                      <option value="plot">劇情</option>
                      <option value="action">動作</option>
                      <option value="science">科幻</option>
                      <option value="love">愛情</option>
                      <option value="war">戰爭</option>
                      <option value="fear">恐怖</option>
                      <option value="cartoon">動畫電影</option>
                    </select>
                  </div>
                  <div
                    v-if="moviePost.inputMainValue == 'Movie'"
                    class="input-group mb-3"
                  >
                    <label class="input-group-text" for="inputGroupSelect01"
                      >地區</label
                    >
                    <select
                      class="form-select"
                      v-model="moviePost.inputAreaValue"
                    >
                      <option value="none" selected disabled>請選擇</option>
                      <option value="CN">大陸</option>
                      <option value="HK">香港</option>
                      <option value="TW">台灣</option>
                      <option value="US">美國</option>
                      <option value="FR">法國</option>
                      <option value="UK">英國</option>
                      <option value="JP">日本</option>
                      <option value="KR">韓國</option>
                      <option value="GM">德國</option>
                      <option value="TH">泰國</option>
                      <option value="Other">其他</option>
                    </select>
                  </div>
                  <div
                    v-if="moviePost.inputMainValue == 'TVDrama'"
                    class="input-group mb-3"
                  >
                    <label class="input-group-text" for="inputGroupSelect01"
                      >類別</label
                    >
                    <select
                      class="form-select"
                      v-model="moviePost.inputChildValue"
                    >
                      <option value="none" selected disabled>請選擇</option>
                      <option value="cn">陸劇</option>
                      <option value="kr">韓劇</option>
                      <option value="us">美劇</option>
                      <option value="tw">台劇</option>
                      <option value="hk">港劇</option>
                    </select>
                  </div>
                  <div
                    v-if="moviePost.inputMainValue == 'TVShow'"
                    class="input-group mb-3"
                  >
                    <label class="input-group-text" for="inputGroupSelect01"
                      >類別</label
                    >
                    <select
                      class="form-select"
                      v-model="moviePost.inputChildValue"
                    >
                      <option value="none" selected disabled>請選擇</option>
                      <option value="tw">台灣</option>
                      <option value="hk">香港</option>
                      <option value="cn">大陸</option>
                      <option value="kr">韓國</option>
                      <option value="jp">日本</option>
                      <option value="foreign">外國</option>
                    </select>
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text">名稱</span>
                    <input
                      type="text"
                      class="form-control"
                      v-model="moviePost.movieName"
                      required
                    />
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text">年份</span>
                    <input
                      type="number"
                      class="form-control"
                      placeholder="2022"
                      v-model="moviePost.year"
                      required
                    />
                    <!-- <span class="input-group-text">集數</span>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="1集"
                    required
                    v-model="moviePost.set"
                  /> -->
                  </div>
                  <!-- <div class="input-group mb-3">
                  <span class="input-group-text">評分</span>
                  <input
                    type="number"
                    placeholder="1~10"
                    min="0"
                    max="10"
                    class="form-control"
                    v-model="moviePost.mark"
                  />
                </div> -->
                  <!-- button group -->
                  <div class="w-100 d-flex btn-group">
                    <!-- favorite -->
                    <a
                      class="btn btn-outline-dark w-50"
                      v-if="moviePost.favorite == 0"
                      @click="addFavorite"
                    >
                      <i class="bi bi-heart text-danger px-1"></i>
                      <span>加入最愛</span>
                    </a>
                    <a
                      class="btn btn-dark w-50"
                      v-if="moviePost.favorite == 1"
                      @click="addFavorite"
                    >
                      <i class="bi bi-heart-fill text-danger px-1"></i>
                      <span>已加入最愛</span>
                    </a>
                    <a
                      class="btn btn-dark w-50"
                      v-if="moviePost.watched == 1"
                      @click="addWatch"
                    >
                      <i class="bi bi-eye text-success px-1"></i>
                      <span>已觀看</span>
                    </a>
                    <a
                      class="btn btn-outline-dark w-50"
                      v-if="moviePost.watched == 0"
                      @click="addWatch"
                    >
                      <i class="bi bi-eye-slash text-success px-1"></i>
                      <span>未觀看</span>
                    </a>
                  </div>
                  <!-- star -->
                  <div class="starBox d-flex text-warning">
                    <div
                      v-for="n in 5"
                      :key="n"
                      @mouseenter="enter(n)"
                      @mouseleave="out"
                      @click="ok(n)"
                    >
                      <div class="d-flex">
                        <div v-if="moviePost.mark < n">
                          <i class="bi bi-star"></i>
                        </div>
                        <div v-if="moviePost.mark >= n">
                          <i class="bi bi-star-fill"></i>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>

                  <button
                    class="btn btn-dark mt-5 w-100"
                    type="submit"
                    :disabled="isDisable"
                  >
                    <span
                      class="spinner-border-sm"
                      role="status"
                      :class="{ 'spinner-border': isLoading }"
                      aria-hidden="true"
                    ></span>
                    新增
                  </button>
                </form>
              </div>
              <!-- <div class="modal-footer">
              <button
                type="reset"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary" @click="addDb">
                Save changes
              </button>
              <button type="button" class="btn btn-primary" @click="uploadFile">
                upload
              </button>
              <button type="button" class="btn btn-primary" @click="closeModal">
                X
              </button>
            </div> -->
            </div>
          </div>
        </div>

        <!-- offcanvas -->
        <div class="offcanvas offcanvas-start" id="navbarNavAltMarkup">
          <div class="navbar-nav h-100">
            <button
              type="button"
              class="btn-close btn-close-white ms-auto me-3 my-2"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
            <router-link class="offcanvas_link" to="/movie">電影</router-link>
            <router-link class="offcanvas_link" to="/tvDrama"
              >電視劇</router-link
            >
            <router-link class="offcanvas_link" to="/tvShow">綜藝</router-link>
            <router-link class="offcanvas_link" to="/cartoon">動漫</router-link>
            <router-link
              class="offcanvas_link mt-auto"
              to=""
              @click.prevent="logout()"
              >登出</router-link
            >
          </div>
        </div>
        <!-- RWD add new data button -->
        <router-link
          class="nav-link d-flex d-md-none fz-1"
          to=""
          @click="openModal()"
          ><i class="bi bi-plus-square"></i
        ></router-link>
      </div>
    </nav>
  </header>
</template>

<script>
// import { Toast } from "bootstrap";
import { db, auth } from "../db";
import { storage } from "../db";
// @ is an alias to /src
import { ref as fireRef, set, push, child } from "firebase/database";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Modal from "bootstrap/js/dist/modal";
export default {
  inject: ["reload"],
  data() {
    return {
      isDisable: false,
      isLoading: false,
      Modal: null,
      File: null,
      showImg: "",
      moviePost: {
        inputMainValue: "none",
        inputChildValue: "none",
        inputAreaValue: "none",
        movieName: "",
        year: "",
        mark: 0,
        favorite: 0,
        watched: 1,
        url: "",
        watchDate: new Date(+new Date() + 8 * 3600 * 1000)
          .toISOString()
          .substr(0, 10),
        uploadDate: new Date(+new Date() + 8 * 3600 * 1000)
          .toISOString()
          .substr(0, 10),
      },
      flag: false,
    };
  },
  methods: {
    logout() {
      console.log("test");
      signOut(auth).then(() => {
        console.log(`the user signed out`);
      });
      this.$router.push(`/login`);
    },
    // show Img
    handleFile(e) {
      let vm = this;
      vm.File = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(vm.File);
      reader.onload = (e) => {
        vm.showImg = e.target.result;
        var image = new Image();
        image.src = e.target.result;
        image.onload = () => {
          var width = image.width;
          var height = image.height;
          console.log("width: ", width);
          console.log("height: ", height);
          console.log(width < 420);
          console.log(height < 420);
          console.log(width < height);

          if (width > height) {
            alert("圖片比例不對");
            vm.showImg = "";
            return;
          }
          if (width < 420 && height < 500) {
            vm.showImg = "";
            alert("圖片尺寸沒有420 * 500 ");
          }
        };
      };
    },
    openModal() {
      this.Modal = new Modal(document.getElementById("exampleModal"));
      this.Modal.show();
    },
    closeModal() {
      this.Modal.hide();
    },
    // main
    addData() {
      this.addDb().then(this.getUrl).then(this.addPost);
    },
    //
    //
    addDb() {
      return new Promise((resolve, reject) => {
        if (this.File) {
          (this.isDisable = true),
            (this.isLoading = true),
            uploadBytes(storageRef(storage, `${this.File.name}`), this.File)
              .then(() => {
                resolve(`Uploaded a blob or file!`);
                // console.log(`Uploaded a blob or file!`)
              })
              .catch((error) => {
                reject(error);
              });
        } else {
          console.log("return");
          alert("error");
          return;
        }
      });
    },
    getUrl() {
      return new Promise((resolve, reject) => {
        getDownloadURL(storageRef(storage, `${this.File.name}`))
          .then((url) => {
            let vm = this;
            vm.moviePost.url = url;
            console.log(url);
            resolve("getUrl");
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addPost() {
      let vm = this;
      // var toast = new Toast(document.getElementById("liveToast"));
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const newKey = push(child(fireRef(db), "post")).key;
          set(fireRef(db, `/user/${user.uid}/post/` + newKey), vm.moviePost);
          (this.isDisable = false), (this.isLoading = false), vm.Modal.hide();
          vm.reload();
        } else {
          vm.Modal.hide();
        }
      });
    },
    removeImg() {
      this.showImg = "";
    },
    addFavorite() {
      let fav = this.moviePost.favorite;
      if (fav == "1") {
        this.moviePost.favorite = "0";
      } else {
        this.moviePost.favorite = "1";
      }
    },
    addWatch() {
      let watch = this.moviePost.watched;
      if (watch == "1") {
        this.moviePost.watched = "0";
        console.log("this.moviePost.watched1: ", this.moviePost.watched);
      } else {
        this.moviePost.watched = "1";
        console.log("this.moviePost.watched2: ", this.moviePost.watched);
      }
    },
    // add star
    enter(n) {
      //n 取值1-5
      if (!this.flag) {
        this.moviePost.mark = n;
        console.log("this.curIndex: ", this.moviePost.mark);
      }
    },
    out() {
      if (!this.flag) {
        // 没有点击过，curIndex值才会变化
        this.moviePost.mark = -1;
      }
    },
    ok(n) {
      console.log(this.flag);
      if (this.flag == false) {
        this.flag = true;
      } else {
        this.flag = false;
      }
      this.moviePost.mark = n; // 确认评价的星级数
    },
    // uploadBytes(storageRef(storage,`${this.File.name}`), this.File).then((snapshot) => {
    //   console.log(snapshot)
    //   console.log(`Uploaded a blob or file!`)
    // })
    // getDownloadURL(storageRef(storage,`${this.File.name}`))
    // .then((url) => {
    //   let vm = this
    //   vm.moviePost.url = url;
    //   console.log(url)
    // })
    // function setDb() {
    //   const newKey = push(child(fireRef(db), 'post')).key;
    //   console.log(`db`)
    //   console.log(newKey)
    //   set(fireRef(db, 'post/' + newKey), this.moviePost);
    // }

    // const newKey = push(child(fireRef(db), 'post')).key;
    // console.log(newKey)
    // set(fireRef(db, 'post/' + newKey), this.moviePost);

    //   return new Promise((resolve , reject) => {
    //   uploadBytes(storageRef(storage,`${this.File.name}`), this.File)
    //   .then((snapshot) => {
    //     resolve(snapshot)
    //     console.log(`Uploaded a blob or file!`)
    //   })
    //   .catch((error) => {
    //     reject(error)
    //   })
    // })
    //     uploadBytes(storageRef(storage,`${this.File.name}`), this.File).then((snapshot) => {
    //     console.log(snapshot)
    //     console.log(`Uploaded a blob or file!`)
    //   })
    //   getDownloadURL(storageRef(storage,`${this.File.name}`))
    //     .then((url) => {
    //       let vm = this
    //       vm.moviePost.url = url;
    //       console.log(url)
    //     })
  },
};
</script>
<style scoped>
.nav-link {
  color: white;
}
.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-light .navbar-toggler {
  border: 1px solid rgb(255, 255, 255);
}
.offcanvas {
  background-color: #032541;
}
.offcanvas_link {
  font-size: 24px;
  display: block;
  padding: 0.5rem 1rem;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}
/* star  */
.starBox {
  font-size: 30px;
}
</style>
