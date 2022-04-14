<template>
  <Header />
  <div class="container p-1">
    <h2 class="d-flex my-4">綜藝 ( {{ getUserPostData.length }} )</h2>
    <div class="card py-4" style="background-color: #f1f1f1">
      <div class="nav">
        <h4 class="px-3">飾選</h4>
        <a href="#" class="mt-1 resetSort_size" @click="resetSort">重置飾選</a>
      </div>
      <div class="list d-flex">
        <span class="nav-link fw-bold">分類</span>
        <a
          class="nav-link"
          href="#"
          :class="{ button_selected: sort == 'all' }"
          @click.prevent="selectSort('all')"
          >全部</a
        >
        <a
          class="nav-link"
          href="#"
          :class="{ button_selected: sort == 'hk' }"
          @click.prevent="selectSort('hk')"
          >香港</a
        >
        <a
          class="nav-link"
          href="#"
          :class="{ button_selected: sort == 'tw' }"
          @click.prevent="selectSort('tw')"
          >台灣</a
        >
        <a
          class="nav-link"
          href="#"
          :class="{ button_selected: sort == 'kr' }"
          @click.prevent="selectSort('kr')"
          >韓國</a
        >
        <a
          class="nav-link"
          href="#"
          :class="{ button_selected: sort == 'jp' }"
          @click.prevent="selectSort('jp')"
          >日本</a
        >
        <a
          class="nav-link"
          href="#"
          :class="{ button_selected: sort == 'cn' }"
          @click.prevent="selectSort('cn')"
          >大陸</a
        >
        <a
          class="nav-link"
          href="#"
          :class="{ button_selected: sort == 'foreign' }"
          @click.prevent="selectSort('foreign')"
          >外國</a
        >
      </div>
    </div>
    <!-- <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#modal_login"
    >
      Launch demo modal
    </button>

    <SingUp/> -->
    <!-- {{userID}} -->
    <!-- <button @click="test">test</button> -->
  </div>
  <div class="container">
    <div class="row">
      <div
        class="col-6 col-md-4 col-lg-3 col-xl-2 px-1 my-1 my-sm-2"
        v-for="(item, key) in getUserPostData"
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
            <div class="d-flex justify-content-between">
              <div class="fw-bold ellipsis">
                {{ item[1].movieName }}
              </div>
              <div v-if="item[1].favorite == 1">
                <i class="bi bi-heart-fill text-danger"></i>
              </div>
              <div v-if="item[1].favorite == 0">
                <i class="bi bi-heart text-danger"></i>
              </div>
            </div>
            <div class="d-flex justify-content-between card-yearColor">
              <div class="d-flex">
                <div v-if="item[1].inputMainValue == 'TVShow'">綜藝</div>
                <div class="ps-1">
                  <span v-if="item[1].inputChildValue == 'tw'">台灣</span>
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
    <!-- show no data message -->
    <div v-if="getUserPostData.length == 0">
      <div v-if="sort !== 'all'" class="my-5">
        <i class="bi bi-film no-data-pic-size"></i>
        <h1 class="my-5">尚無資料</h1>
      </div>
    </div>
  </div>
  <Footer class="footer mt-5" />
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      sort: "all",
      filterPostData: {},
    };
  },
  methods: {
    selectSort(val) {
      this.sort = val;
    },
    resetSort() {
      this.sort = "all";
    },
    pushRouter(id) {
      console.log(id);
      this.$router.push(`/post_detail/${id}`);
    },
  },
  watch: {
    sort() {
      this.filterPostData = this.getUserPostData.filter((item) => {
        if (this.sort == "all") {
          return;
        }
        return item[1].inputChildValue == this.sort;
      });
    },
  },
  computed: {
    getUserPostData() {
      var Data = this.$store.getters.userPostData;
      return Object.entries(Data)
        .reverse()
        .filter((item) => {
          if (this.sort !== "all") {
            return (
              item[1].inputMainValue == "TVShow" &&
              item[1].inputChildValue == this.sort
            );
          }
          return item[1].inputMainValue == "TVShow";
        });
    },
    // userID() {
    //   return this.$store.getters.userID;
    // },
  },
  mounted() {
    this.$store.dispatch("getDBState");
  },
};
</script>

<style scoped>
.img-size {
  height: 320px;
}

.list {
  overflow-x: auto;
  white-space: nowrap;
}

a,
.nav-link {
  text-decoration: none;
  color: #032541;
}

.button_selected {
  background-color: #032541;
  color: #c0fecf;
  border-radius: 5px;
}

.bb_red {
  border-bottom: 2px solid red;
}
.bb_green {
  border-bottom: 2px solid green;
}
</style>
