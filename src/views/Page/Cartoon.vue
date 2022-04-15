<template>
  <Header />
  <div class="container p-1">
    <h2 class="d-flex my-4">動漫 ( {{ getUserPostData.length }} )</h2>
  </div>
  <div class="container">
    <div class="row" v-if="getUserPostData.length > 0">
      <div
        class="col-6 col-md-4 col-lg-3 col-xl-2 px-1 my-1 my-sm-2"
        v-for="(item, key) in getUserPostData"
        :key="key"
      >
        <div
          class="card card-shadow"
          @click.prevent="pushRouter(item[0])"
          :class="{
            bb_red: item[1].watched == 0,
            bb_green: item[1].watched == 1,
          }"
        >
          <img :src="`${item[1].url}`" alt="" class=" img-size" />
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
                <div v-if="item[1].inputMainValue == 'Cartoon'">動漫</div>
              </div>
              <div>
                {{ item[1].year }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="my-5">
      <i class="bi bi-film no-data-pic-size"></i>
      <h1 class="my-5">尚無資料</h1>
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
    return {};
  },
  methods: {
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
          return item[1].inputMainValue == "Cartoon";
        });
    },
  },
  mounted() {
    this.$store.dispatch("getDBState");
  },
};
</script>

<style scoped>
.bb_red {
  border-bottom: 2px solid #f36793;
}
.bb_green {
  border-bottom: 2px solid #6fff00;
}
</style>
