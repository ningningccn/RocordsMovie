<template>
  <Header />
  <div
    :style="{
      backgroundImage: 'url(' + postData.url + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }"
  >
    <div class="mask">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4">
            <img :src="`${postData.url}`" class="img-fluid" />
          </div>
          <div
            class="col-9 col-sm-6 col-md-8 mx-auto text-start text-white ps-md-5 my-5 my-sm-0"
          >
            <!-- button dropdown -->
            <div>
              <button
                class="btn btn_background btn_setting_color"
                data-bs-toggle="dropdown"
              >
                <i class="bi bi-three-dots"></i>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#" @click="delPost"
                    >刪除資料</a
                  >
                </li>
              </ul>
            </div>
            <!--  -->
            <div class="fz-5 mt-5">
              <span class="fw-bold">
                {{ postData.movieName }}
              </span>
              <span class="fz-3"> ( {{ postData.year }} ) </span>
            </div>
            <div class="fz-3 mt-3">
              <div v-if="postData.inputMainValue == 'Movie'">
                <div>
                  <span> 電影: </span>
                  <span v-if="postData.inputChildValue == 'plot'"> 劇情 </span>
                  <span v-if="postData.inputChildValue == 'action'">
                    動作
                  </span>
                  <span v-if="postData.inputChildValue == 'science'">
                    科幻
                  </span>
                  <span v-if="postData.inputChildValue == 'love'"> 愛情 </span>
                  <span v-if="postData.inputChildValue == 'war'"> 戰爭 </span>
                  <span v-if="postData.inputChildValue == 'fear'"> 恐怖 </span>
                  <span v-if="postData.inputChildValue == 'cartoon'">
                    動畫電影
                  </span>
                </div>
                <div>
                  <span>地區: </span>
                  <span v-if="postData.inputAreaValue == 'CN'">大陸</span>
                  <span v-if="postData.inputAreaValue == 'HK'">香港</span>
                  <span v-if="postData.inputAreaValue == 'TW'">台灣</span>
                  <span v-if="postData.inputAreaValue == 'US'">美國</span>
                  <span v-if="postData.inputAreaValue == 'FR'">法國</span>
                  <span v-if="postData.inputAreaValue == 'UK'">英國</span>
                  <span v-if="postData.inputAreaValue == 'JP'">日本</span>
                  <span v-if="postData.inputAreaValue == 'KR'">韓國</span>
                  <span v-if="postData.inputAreaValue == 'GM'">德國</span>
                  <span v-if="postData.inputAreaValue == 'TH'">泰國</span>
                  <span v-if="postData.inputAreaValue == 'Other'">其他</span>
                </div>
              </div>
              <div v-else>
                <div>
                  <span v-if="postData.inputMainValue == 'TVDrama'">
                    電視劇
                  </span>
                  <span v-if="postData.inputMainValue == 'TVShow'"> 綜藝 </span>
                  <span v-if="postData.inputMainValue == 'Cartoon'">
                    卡通
                  </span>
                </div>
              </div>
            </div>
            <!-- star -->
            <div class="fz-3 my-5">
              <div class="d-flex">
                個人評分:
                <div class="starBox d-flex text-warning ms-1">
                  <div v-for="n in 5" :key="n">
                    <span v-if="postData.mark < n">
                      <i class="bi bi-star"></i>
                    </span>
                    <span v-if="postData.mark >= n">
                      <i class="bi bi-star-fill"></i>
                    </span>
                    <div></div>
                  </div>
                </div>
              </div>

              <div>觀看日期: {{ postData.watchDate }}</div>
            </div>
            <!-- watched or favorite-->
            <div class="fz-0 d-flex">
              <div v-if="postData.watched == 0" class="mx-2">
                <button
                  class="btn btn_background btn_not_watched"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover focus"
                  data-bs-html="true"
                  data-bs-placement="top"
                  title="設定已觀看"
                  @click="addWatched(0)"
                >
                  <i class="bi bi-eye-slash-fill fz-2"></i>
                </button>
              </div>
              <div v-if="postData.watched == 1" class="mx-2">
                <button
                  class="btn btn_background btn_watched"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover focus"
                  data-bs-html="true"
                  data-bs-placement="top"
                  title="設定未觀看"
                  @click="addWatched(1)"
                >
                  <i class="bi bi-eye-fill fz-2"></i>
                </button>
              </div>
              <div v-if="postData.favorite == 0" class="mx-2">
                <button
                  class="btn btn_background btn_not_favorite"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover focus"
                  data-bs-html="true"
                  data-bs-placement="top"
                  title="增加最愛"
                  @click="addFavorite(0)"
                >
                  <i class="bi bi-heart-fill fz-2"></i>
                </button>
              </div>
              <div v-if="postData.favorite == 1" class="mx-2">
                <button
                  class="btn btn_background btn_favorite"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover focus"
                  data-bs-html="true"
                  data-bs-placement="top"
                  title="取消最愛"
                  @click="addFavorite(1)"
                >
                  <i class="bi bi-heart-fill fz-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- {{ postData }} -->
    </div>
  </div>
  <!-- other Movie -->
  <div class="container mt-3">
    <h2 class="text-start p-4">相關類別</h2>
    <!-- Movie Card -->
    <div class="row px-3">
      <div
        class="col-6 col-md-4 col-lg-3 col-xl-2 px-1 my-1 my-sm-2"
        v-for="(item, key) in aboutMovie"
        :key="key"
      >
        <div
          class="card card-shadow"
          :class="{
            bb_red: item[1].watched == 0,
            bb_green: item[1].watched == 1,
          }"
          @click.prevent="pushRouter(item[0])"
        >
          <img :src="`${item[1].url}`" alt="" class="img-size" />
          <div class="py-2 px-3">
            <!-- movie name title -->
            <div class="d-flex justify-content-between">
              <div class="fw-bold card-ellipsis">
                {{ item[1].movieName }}
              </div>
              <div v-if="item[1].favorite == 1">
                <i class="bi bi-heart-fill text-danger"></i>
              </div>
              <div v-if="item[1].favorite == 0">
                <i class="bi bi-heart text-danger"></i>
              </div>
            </div>
            <!-- card under context -->
            <div class="d-flex justify-content-between card-yearColor">
              <div class="d-flex">
                <div v-if="item[1].inputMainValue == 'Movie'">
                  <span>電影</span>
                </div>
                <div v-if="item[1].inputMainValue == 'TVDrama'">電視劇</div>
                <div v-if="item[1].inputMainValue == 'TVShow'">綜藝</div>
                <div v-if="item[1].inputMainValue == 'Cartoon'">動漫</div>
                <div class="ps-1">
                  <span v-if="item[1].inputAreaValue == 'CN'">大陸</span>
                  <span v-if="item[1].inputAreaValue == 'HK'">香港</span>
                  <span v-if="item[1].inputAreaValue == 'TW'">台灣</span>
                  <span v-if="item[1].inputAreaValue == 'US'">美國</span>
                  <span v-if="item[1].inputAreaValue == 'FR'">法國</span>
                  <span v-if="item[1].inputAreaValue == 'UK'">英國</span>
                  <span v-if="item[1].inputAreaValue == 'JP'">日本</span>
                  <span v-if="item[1].inputAreaValue == 'KR'">韓國</span>
                  <span v-if="item[1].inputAreaValue == 'GM'">德國</span>
                  <span v-if="item[1].inputAreaValue == 'TH'">泰國</span>
                  <span v-if="item[1].inputAreaValue == 'Other'">其他</span>
                </div>
                <div class="ps-1">
                  <span v-if="item[1].inputChildValue == 'tw'">大陸</span>
                  <span v-if="item[1].inputChildValue == 'hk'">香港</span>
                  <span v-if="item[1].inputChildValue == 'cn'">大陸</span>
                  <span v-if="item[1].inputChildValue == 'kr'">韓國</span>
                  <span v-if="item[1].inputChildValue == 'jp'">日本</span>
                  <span v-if="item[1].inputChildValue == 'foreign'">外國</span>
                </div>
              </div>
              <div>
                {{ item[1].year }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Toast -->
  <div class="position-fixed bottom-0 w-100 p-5" style="z-index: 11">
    <div
      id="favoriteToast"
      class="toast mx-auto align-items-center bg-success text-white border-0"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-bs-delay="3000"
    >
      <div class="toast-body mx-auto">
        <span class="w-100" v-if="postData.favorite == 1">
          <i class="bi bi-heart-fill"></i> 已加入最愛
        </span>
        <span v-if="postData.favorite == 0"
          ><i class="bi bi-heart"></i> 已取消最愛
        </span>
      </div>
    </div>
  </div>
  <!-- Toast -->
  <div class="position-fixed bottom-0 w-100 p-5" style="z-index: 11">
    <div
      id="watchedToast"
      class="toast mx-auto align-items-center bg-success text-white border-0"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-bs-delay="3000"
    >
      <div class="toast-body mx-auto">
        <span class="w-100" v-if="postData.watched == 1">
          <i class="bi bi-eye-fill"></i> 已設定觀看
        </span>
        <span v-if="postData.watched == 0">
          <i class="bi bi-eye-slash-fill"></i> 設定未觀看
        </span>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { Tooltip, Toast } from "bootstrap";
import { db, auth } from "@/db";
import { ref, child, get, set, remove } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      postData: {},
      number: "",
      uid: "",
      page: 1,
      itemsPerPage: 12,
    };
  },
  methods: {
    getDetail() {
      const dbRef = ref(db);
      get(child(dbRef, `/user/${this.uid}/post/${this.number}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.postData = snapshot.val();
            console.log(this.postData);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    state() {
      return new Promise((resolve, reject) => {
        var vm = this;
        onAuthStateChanged(auth, (user) => {
          if (user) {
            vm.uid = user.uid;
            resolve(`獲取uid`);
          } else {
            reject("User is signed out: ");
          }
        });
      });
    },
    delPost() {
      const vm = this;
      console.log("del");
      console.log(`user/${vm.uid}/post/${vm.number}`);
      remove(ref(db, `user/${vm.uid}/post/${vm.number}`));
      this.$router.push("/");
    },
    addFavorite(val) {
      var toastLiveExample = document.getElementById("favoriteToast");
      var toast = new Toast(toastLiveExample);
      let data = this.postData;
      if (val == 0) {
        data.favorite = 1;
      }
      if (val == 1) {
        data.favorite = 0;
      }
      set(ref(db, `/user/${this.uid}/post/${this.number}`), data);
      console.log(`updated`);
      toast.show();
    },
    addWatched(val) {
      var toastLiveExample = document.getElementById("watchedToast");
      var toast = new Toast(toastLiveExample);
      let data = this.postData;
      if (val == 0) {
        data.watched = 1;
      }
      if (val == 1) {
        data.watched = 0;
      }
      set(ref(db, `/user/${this.uid}/post/${this.number}`), data);
      toast.show();
      console.log(`updated`);
    },
    handleScroll() {
      const { scrollHeight, scrollTop, clientHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        this.page++;
      }
    },
  },
  computed: {
    aboutMovie() {
      let type = this.postData.inputMainValue;
      let postID = this.number;
      var Data = this.$store.getters.userPostData;
      let filterA = Object.entries(Data)
        .reverse()
        .filter((item) => {
          return item[1].inputMainValue == type && item[0] != postID;
        });
      let filterB = filterA.filter((item, index) => {
        console.log(6 > index);
        return this.page * this.itemsPerPage > index;
      });
      return filterB;
    },
  },
  created() {
    this.number = this.$route.params.postId;
    this.state().then(this.getDetail);
    this.$store.dispatch("getDBState");
  },
  updated() {
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    console.log(tooltipTriggerList);
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl, { container: tooltipTriggerEl });
    });
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.font-sm {
  font-size: 28px;
}

.mask {
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  padding-top: 100px;
  padding-bottom: 120px;
}
.btn_background {
  background: #021a2e;
  border-radius: 50%;
}
.btn_setting_color {
  color: #ffffff;
}
.btn_setting_color:hover {
  color: #0fec0f;
}
/* not favorite */
.btn_not_favorite {
  color: white;
}
.btn_not_favorite:hover {
  color: red;
}
/* is favorite */
.btn_favorite {
  color: red;
}
.btn_watched {
  color: green;
}
.btn_favorite:hover,
.btn_watched:hover,
.btn_not_watched {
  color: white;
}
.btn_not_watched:hover {
  color: green;
}

.bb_red {
  border-bottom: 2px solid red;
}
.bb_green {
  border-bottom: 2px solid green;
}
</style>
