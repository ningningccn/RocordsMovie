<template>
  <div class="container px-1 input-group">
    <span class="input-group-text" id="basic-addon1"
      ><i class="bi bi-search"></i
    ></span>
    <input
      type="search"
      placeholder="Search"
      class="form-control"
      v-model="searchText"
    />
  </div>
  <div class="container">
    <div class="row" v-if="userPostData.length > 0">
      <div
        class="col-6 col-md-4 col-lg-3 col-xl-2 px-1 my-1 my-sm-2"
        v-for="(item, index, key) in userPostData"
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

      <!-- <div class="col-4 col-md-2 px-1 my-1 my-sm-2">
        <img src="@/assets/poster.jpeg" alt="" class="w-100" />
      </div>
      <div class="col-4 col-md-2 px-1 my-1 my-sm-2">
        <img src="@/assets/poster.jpeg" alt="" class="w-100" />
      </div>
      <div class="col-4 col-md-2 px-1 my-1 my-sm-2">
        <img src="@/assets/poster.jpeg" alt="" class="w-100" />
      </div>
      <div class="col-4 col-md-2 px-1 my-1 my-sm-2">
        <img src="@/assets/poster.jpeg" alt="" class="w-100" />
      </div>
      <div class="col-4 col-md-2 px-1 my-1 my-sm-2">
        <img src="@/assets/poster.jpeg" alt="" class="w-100" />
      </div>
      <div class="col-4 col-md-2 px-1 my-1 my-sm-2">
        <img src="@/assets/poster.jpeg" alt="" class="w-100" />
      </div> -->
      <!-- <div class="col-4 col-md-2 px-1 my-1 my-sm-2">
        <div class="position-relative">
          <img src="@/assets/poster.jpeg" alt="" class="img-fluid" />
          <div class="mask"><span class="text-danger">123</span></div>
        </div>
      </div> -->
      <!-- <div>
        <ul>
          <li v-for="(item, key, index) in userPostData" :key="key">
            物件索引: {{ index }}, key: {{ key }}, 姓名: {{ item[0] }}
            {{ item[1] }}
          </li>
        </ul>
      </div> -->
    </div>
    <div class="my-5" v-else>
      <i class="bi bi-film no-data-pic-size"></i>
      <h1 class="my-5">尚無資料</h1>
    </div>
  </div>
</template>
<script>
// import { useRouter } from 'vue-router'
// import { db , auth} from "@/db";
// import { ref, child, get } from "firebase/database";
// import { onAuthStateChanged } from "firebase/auth";
export default {
  data() {
    return {
      searchText: "",
      page: 1,
      itemsPerPage: 24,
    };
  },
  methods: {
    pushRouter(id) {
      console.log(id);
      this.$router.push(`/post_detail/${id}`);
    },
    handleScroll() {
      const { scrollHeight, scrollTop, clientHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        this.page++;
      }
    },
    // getDbPost() {
    //   var vm = this;
    //   get(child(ref(db), `user/${vm.uid}/post/`))
    //     .then((snapshot) => {
    //       console.log(snapshot.exists());
    //       if (snapshot.exists()) {
    //         // let arr = [];
    //         // arr = snapshot.val();
    //         // console.log(typeof arr, arr);
    //         vm.postData = snapshot.val();
    //       } else {
    //         console.log("沒有資料");
    //       }
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // },
    // state() {
    //   return new Promise((resolve, reject) => {
    //     onAuthStateChanged(auth, (user) => {
    //       var vm = this;
    //       if (user) {
    //         vm.uid = user.uid;
    //         resolve(`獲取uid`);
    //       } else {
    //         reject('User is signed out: ');
    //       }
    //     });

    //   })
    // },
  },
  computed: {
    userPostData() {
      var Data = Object.entries(this.$store.getters.userPostData).reverse();

      // return Object.entries(Data)
      let filterA = Data.filter((item) => {
        return item[1].watched == 1 && item[1].movieName.match(this.searchText);
      });
      let filterB = filterA.filter((item, index) => {
        // console.log(item , index)
        console.log(6 > index);
        return this.page * this.itemsPerPage > index;
      });
      // console.log(b);
      return filterB;
    },
  },
  mounted() {
    this.$store.dispatch("getDBState");
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
/* .mask {
  position: absolute;
  z-index: 2;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.452);
  transition: 0.5s opacity;
  opacity: 0;
}

.mask:hover {
  opacity: 1;
} */
/* .yearColor {
  color: #00000099;
  font-size: 12px;
} */

.card {
  box-shadow: 3px 3px 4px rgb(0 0 0 / 20%);
  cursor: pointer;
}

.bb_red {
  border-bottom: 2px solid #f36793;
}
.bb_green {
  border-bottom: 2px solid #6fff00;
}

/* .ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
} */
/* .img-size {
  max-width: 100%;
  height: 320px;
} */
</style>
