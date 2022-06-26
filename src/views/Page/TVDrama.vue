<template>
  <Header />
  <div class="container p-1">
    <h2 class="d-flex my-4">電視劇 ( {{ getUserPostData.length }} )</h2>
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
          >港劇</a
        >
        <a
          class="nav-link"
          href="#"
          :class="{ button_selected: sort == 'tw' }"
          @click.prevent="selectSort('tw')"
          >台劇</a
        >
        <a
          class="nav-link"
          href="#"
          :class="{ button_selected: sort == 'kr' }"
          @click.prevent="selectSort('kr')"
          >韓劇</a
        >
        <a
          class="nav-link"
          href="#"
          :class="{ button_selected: sort == 'us' }"
          @click.prevent="selectSort('us')"
          >美劇</a
        >
        <a
          class="nav-link"
          href="#"
          :class="{ button_selected: sort == 'cn' }"
          @click.prevent="selectSort('cn')"
          >陸劇</a
        >
      </div>
    </div>
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
          :class="{
            bb_red: item[1].watched == 0,
            bb_green: item[1].watched == 1,
          }"
          @click.prevent="pushRouter(item[0])"
        >
          <img :src="`${item[1].url}`" alt="" class="img-size" />
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
                <div v-if="item[1].inputMainValue == 'TVDrama'">電視劇</div>
                <div class="ps-1">
                  <span v-if="item[1].inputChildValue == 'tw'">台灣</span>
                  <span v-if="item[1].inputChildValue == 'hk'">香港</span>
                  <span v-if="item[1].inputChildValue == 'cn'">大陸</span>
                  <span v-if="item[1].inputChildValue == 'kr'">韓國</span>
                  <span v-if="item[1].inputChildValue == 'jp'">日本</span>
                  <span v-if="item[1].inputChildValue == 'other'">其他</span>
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
    return {
      sort: "all",
      filterPostData: {},
    };
  },
  // watch: {
  //   sort() {
  //     this.filterPostData = this.getUserPostData.filter((item) => {
  //       if (this.sort == "all") {
  //         return this.getUserPostData;
  //       }
  //         item[1].inputChildValue,
  //         item[1].inputChildValue == this.sort
  //       );
  //       return item[1].inputChildValue == this.sort;
  //     });
  //   },
  // },
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
    // test(e) {
    //   let vm = this;
    //   vm.file = e.target.files[0];
    //   console.log(this.file)
    //   console.log(this.file.name)
    //   var reader = new FileReader();
    //   reader.readAsDataURL(vm.file)
    //   reader.onload = (e) => {
    //     // console.log(e.target.result )
    //     vm.showImg= e.target.result;
    //   }
    //   // this.fileName = file.name;
    // },
    // send() {
    //   uploadBytes(ref(storage,`${this.file.name}`), this.file).then((snapshot) => {
    //     console.log(snapshot)
    //     console.log(`Uploaded a blob or file!`)
    //   });
    // },
    // getUrl() {
    //   getDownloadURL(ref(storage,`截圖 2020-11-04 下午2.27.08.png`))
    //   .then((url) => {
    //     // Insert url into an <img> tag to "download"
    //     this.url = url
    //     console.log(url)
    //   })
    //   .catch((error) => {
    //     // A full list of error codes is available at
    //     // https://firebase.google.com/docs/storage/web/handle-errors
    //     switch (error.code) {
    //       case 'storage/object-not-found':
    //         // File doesn't exist
    //         break;
    //       case 'storage/unauthorized':
    //         // User doesn't have permission to access the object
    //         break;
    //       case 'storage/canceled':
    //         // User canceled the upload
    //         break;
    //       // ...
    //       case 'storage/unknown':
    //         // Unknown error occurred, inspect the server response
    //         break;
    //     }
    //   });
    // },
    // getAllData() {
    //   listAll(ref(storage, ''))
    //     .then((res) => {
    //       console.log(res)
    //       res.items.forEach((itemRef) => {
    //         console.log(itemRef)
    //       })
    //     })
    // },
  },
  computed: {
    getUserPostData() {
      var Data = this.$store.getters.userPostData;
      return Object.entries(Data)
        .reverse()
        .filter((item) => {
          if (this.sort == "all") {
            return item[1].inputMainValue == "TVDrama";
          }
          return (
            item[1].inputMainValue == "TVDrama" &&
            item[1].inputChildValue == this.sort
          );
        });
    },
  },
  mounted() {
    this.$store.dispatch("getDBState");
  },
};
</script>

<style scoped>

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
  border-bottom: 2px solid #f36793;
}
.bb_green {
  border-bottom: 2px solid #6fff00;
}
</style>
