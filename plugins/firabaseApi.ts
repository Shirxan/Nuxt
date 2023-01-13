import {defineNuxtPlugin, useRuntimeConfig} from "#app";
import { initializeApp } from "firebase/app";
export default defineNuxtPlugin(nuxtApp => {
    const runtimeConfig = useRuntimeConfig();



    const firebaseConfig = {
        apiKey: runtimeConfig.FIREBASE_API_KEY,
        // authDomain: "vuelogin-72961.firebaseapp.com",
        // databaseURL: "https://vuelogin-72961-default-rtdb.firebaseio.com",
        // projectId: "vuelogin-72961",
        // storageBucket: "vuelogin-72961.appspot.com",
        // messagingSenderId: "1086223096300",
        // appId: "1:1086223096300:web:96ddf6e535ff206f4a08c9"
    };

    const app = initializeApp(firebaseConfig);


})