import { createStore } from "vuex";
import { db, auth } from "@/db";
import { ref, child, get} from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";


export default createStore({
  state: {
    userID: "",
    userPostData: {},
  },
  mutations: {
    GET_DB_STATE(state, val) {
      state.userID = val;
    },
    GET_POST_DATA(state, val) {
      state.userPostData = val;
    }
  },
  actions: {
    getDBState(context) {
      return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log(user.uid)
            context.commit("GET_DB_STATE", user.uid);
            get(child(ref(db), `user/${user.uid}/post/`))
              .then((snapshot) => {
                console.log(snapshot.exists());
                if (snapshot.exists()) {
                  context.commit("GET_POST_DATA",snapshot.val());
                } else {
                  console.log("沒有資料");
                }
              })
              .catch((error) => {
                console.error(error);
              });
            resolve(`獲取uid`);
          } else {
            reject("User is signed out: ");
          }
        });
      });
    },
    // delPostDetail(context) {
    //   return new Promise((resolve, reject) => {
    //     onAuthStateChanged(auth , (user) => {
    //       if(user) {
    //         remove(ref(db, `user/${user.uid}/`))
    //       }
    //     })
    //   })
    // }
    // delPostDetail(context) {
    //   return new Promise((resolve, reject) => {
    //     onAuthStateChanged(auth, (user) => {
    //       if (user) {
    //         console.log(`${user.uid}`)
    //         remove(ref(db, `/user/$`))
    //       }
    //     }
    //   })
    // }
  },
  getters: {
    userID: (state) => state.userID,
    userPostData: (state) => state.userPostData
  },
});