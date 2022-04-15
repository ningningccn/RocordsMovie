<template>
  <Header />
  <div id="movie-page">
    <!-- top Sort list -->
    <div class="container p-1">
      <h2 class="d-flex my-4">電影 ( {{ getUserPostData.length }} )</h2>
      <div class="card py-4" style="background-color: #f1f1f1">
        <div class="nav">
          <h4 class="px-3">飾選</h4>
          <a href="#" class="mt-1 resetSort_size" @click="resetSort"
            >重置飾選</a
          >
        </div>
        <div class="list py-2">
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
            :class="{ button_selected: sort == 'plot' }"
            @click.prevent="selectSort('plot')"
            >劇情</a
          >
          <a
            class="nav-link"
            href="#"
            :class="{ button_selected: sort == 'action' }"
            @click.prevent="selectSort('action')"
            >動作</a
          >
          <a
            class="nav-link"
            href="#"
            :class="{ button_selected: sort == 'science' }"
            @click.prevent="selectSort('science')"
            >科幻</a
          >
          <a
            class="nav-link"
            href="#"
            :class="{ button_selected: sort == 'love' }"
            @click.prevent="selectSort('love')"
            >愛情</a
          >
          <a
            class="nav-link"
            href="#"
            :class="{ button_selected: sort == 'war' }"
            @click.prevent="selectSort('war')"
            >戰爭</a
          >
          <a
            class="nav-link"
            href="#"
            :class="{ button_selected: sort == 'fear' }"
            @click.prevent="selectSort('fear')"
            >恐怖</a
          >
          <a
            class="nav-link"
            href="#"
            :class="{ button_selected: sort == 'cartoon' }"
            @click.prevent="selectSort('cartoon')"
            >動畫電影</a
          >
        </div>
        <div class="list py-2">
          <span class="nav-link fw-bold">地區</span>
          <a
            class="nav-link"
            href="#"
            :class="{ button_selected: area == 'ALL' }"
            @click.prevent="selectArea('ALL')"
            >全部</a
          >
          <a
            class="nav-link"
            href="#"
            :class="{ button_selected: area == 'CN' }"
            @click.prevent="selectArea('CN')"
            >大陸</a
          >
          <a
            class="nav-link"
            href="#"
            :class="{ button_selected: area == 'HK' }"
            @click.prevent="selectArea('HK')"
            >香港</a
          >
          <a
            class="nav-link"
            href="#"
            :class="{ button_selected: area == 'TW' }"
            @click.prevent="selectArea('TW')"
            >台灣</a
          >
          <a
            class="nav-link"
            href="#"
            :class="{ button_selected: area == 'US' }"
            @click.prevent="selectArea('US')"
            >美國</a
          >
          <a
            class="nav-link"
            href="#"
            :class="{ button_selected: area == 'FR' }"
            @click.prevent="selectArea('FR')"
            >法國</a
          >
          <a
            class="nav-link"
            href="#"
            :class="{ button_selected: area == 'UK' }"
            @click.prevent="selectArea('UK')"
            >英國</a
          >
          <a
            class="nav-link"
            href="#"
            :class="{ button_selected: area == 'JP' }"
            @click.prevent="selectArea('JP')"
            >日本</a
          >
          <a
            class="nav-link"
            href="#"
            :class="{ button_selected: area == 'KR' }"
            @click.prevent="selectArea('KR')"
            >韓國</a
          >
          <a
            class="nav-link"
            href="#"
            :class="{ button_selected: area == 'GM' }"
            @click.prevent="selectArea('GM')"
            >德國</a
          >
          <a
            class="nav-link"
            href="#"
            :class="{ button_selected: area == 'TH' }"
            @click.prevent="selectArea('TH')"
            >泰國</a
          >
          <a
            class="nav-link"
            href="#"
            :class="{ button_selected: area == 'Other' }"
            @click.prevent="selectArea('Other')"
            >其他</a
          >
        </div>
      </div>
    </div>
    <!-- show movie card -->
    <div class="container">
      <div class="row" v-if="getUserPostData.length > 0">
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
            <img :src="`${item[1].url}`" alt="" class="w-100 img-size" />
            <div class="py-2 px-3">
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
                </div>
                <div>
                  {{ item[1].year }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- show not have data  -->
      <div
        v-else
        class="my-5"
      >
        <i class="bi bi-film no-data-pic-size"></i>
        <h1 class="my-5">尚無資料</h1>
      </div>
    </div>
  </div>
  <Footer />
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
      area: "ALL",
      sort: "all",
    };
  },
  methods: {
    selectArea(val) {
      this.area = val;
    },
    selectSort(val) {
      this.sort = val;
    },
    resetSort() {
      this.area = "ALL";
      this.sort = "all";
    },
    pushRouter(id) {
      console.log(id);
      this.$router.push(`/post_detail/${id}`);
    },
  },
  computed: {
    getUserPostData() {
      var Data = this.$store.getters.userPostData;
      return Object.entries(Data)
        .reverse()
        .filter((item) => {
          if (this.sort !== "all" && this.area == "ALL") {
            return (
              item[1].inputMainValue == "Movie" &&
              item[1].inputChildValue == this.sort
            );
          }
          if (this.sort == "all" && this.area !== "ALL") {
            return (
              item[1].inputMainValue == "Movie" &&
              item[1].inputAreaValue == this.area
            );
          }
          if (this.sort !== "all" && this.area !== "ALL") {
            return (
              item[1].inputMainValue == "Movie" &&
              item[1].inputChildValue == this.sort &&
              item[1].inputAreaValue == this.area
            );
          }
          return item[1].inputMainValue == "Movie";
        });
    },
  },
  mounted() {
    this.$store.dispatch("getDBState");
  },
};
</script>

<style scoped>
a,
.nav-link {
  text-decoration: none;
  color: #032541;
}

.list {
  display: flex;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}

.button_selected {
  background-color: #032541;
  color: #c0fecf;
  border-radius: 5px;
}

.bb_red {
  border-bottom: 2px solid #f36793;
}
.bb_green {
  border-bottom: 2px solid #6fff00;
}

/* .yearColor {
  color: #00000099;
  font-size: 12px;
} */

/* .card_Shadow {
  box-shadow: 3px 3px 4px rgb(0 0 0 / 20%);
  cursor: pointer;
} */

/* .ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
} */
</style>
