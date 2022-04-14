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
    <div class="row">
      <div
        class="col-4 col-md-2 px-1 my-1 my-sm-2"
        v-for="(item, key) in userPostData"
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
          <img :src="`${item[1].url}`" class="img-size" alt="..." />
          <div class="py-2 px-3">
            <!-- card movieName title -->
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
            <!-- card under content -->
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
        <!-- <div class="position-relative" @click.prevent="pushRouter(item[0])">
          <img :src="`${item[1].url}`" alt="" class="img-fluid" />
          <div class="mask">
            <span class="text-danger">{{ item[1].movieName }}</span>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
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
  },
  computed: {
    userPostData() {
      var Data = this.$store.getters.userPostData;
      // console.log(typeof(Data))
      // var Data = this.$store.getters.userPostData
      // return Data;
      let filterA = Object.entries(Data)
        .reverse()
        .filter((item) => {
          return (
            item[1].favorite == 1 && item[1].movieName.match(this.searchText)
          );
        });
      let filterB = filterA.filter((item, index) => {
        console.log(6 > index);
        return this.page * this.itemsPerPage > index;
      });
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
.bb_red {
  border-bottom: 2px solid red;
}
.bb_green {
  border-bottom: 2px solid green;
}
</style>
