<template>
  <div><Header /></div>
  <div class="home">
    <!-- <User/> -->
    <div id="nav">
      <div>
        <router-link to="/"><i class="bi bi-grid-3x3"></i>  全部</router-link>
        <router-link to="/watched"><i class="bi bi-eye"></i>  已觀看</router-link>
        <router-link to="/expect"><i class="bi bi-eye-slash"></i>  未觀看</router-link>
        <router-link to="/favorite"> <i class="bi bi-heart"></i> 最愛</router-link>
      </div>
    </div>

    <!-- <button class="btn" @click="addDb">add</button>
    <button class="btn" @click="getDb">get</button>
    <input type="text" v-model="id">
    <button class="btn" @click="deleteDb">del</button> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <router-view />
  </div>
  <Footer class="footer mt-5"/>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
// @ is an alias to /src
import { db } from "../db";
import {
  // getDatabase, ref, set, update, push, child
  ref, set, push ,child, get , remove
} from "firebase/database";
// import User from "@/components/Home/User.vue"
export default {
  name: "Home",
  components: {
    // User,
    Header,
    Footer,

  },
  data() {
    return {
      id: "",
      list: [],
    }
  },
  methods: {
    addDb() {
      const newKey = push(child(ref(db), 'users')).key;
      console.log(newKey )
      set(ref(db, 'users/' + newKey), {
      username: 'set-username',
      });

        // const docRef = addDoc(collection(db, "users"), {
        //   first: "Ada",
        //   last: "Lovelace",
        //   born: 1815,
        //   Date: Date(),
        // });
        // console.log(docRef.id)
        // console.log("Document written with ID: ", docRef.id);
    },
    getDb() {
      get(child(ref(db), 'post/')).then((snapshot) => {
        console.log(snapshot)
        if(snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log('沒有資料');
        }
        }).catch((error) => {
          console.error(error);
        })
    },
      // getDocs(collection(db, "users"))
      // .then((snapshot) => {
      //   console.log(snapshot.docs)
      //   let users = [];
      //   snapshot.docs.forEach((doc)=> {
      //     // let vm = this// console.log(doc)
      //     // console.log(vm.list)
      //     users.push({ ...doc.data(), id: doc.id})
      //   })
      //   console.log(users)
      //   this.list =  users;
      // })
    deleteDb() {
      // remove(ref(db,`user/-Mx5iziO3-_4gQjUw0uy`));
      remove(ref(db, `users/${this.id}`));
      console.log(1)
      // deleteDoc(doc(db, "users", this.id))
      // console.log(this.id)
      // this.id = ""
      // getDocs(collection(db, "users"))
      // .then((snapshot) => {
      //   let users = [];
      //   snapshot.docs.forEach((doc)=> {
      //     // console.log(doc)
      //     users.push({ ...doc.data(), id: doc.id})
      //   })
      //   console.log(users)
      // })
    },
  },
};
</script>

<style scoped>
#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration:none;
  padding-left: 10px;
  padding-right: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
