import { userLoginType } from "~~/types/user";
import {navigateTo, useCookie} from '#app';
const url_resgister = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBrspmo0uXmpz2mlNysP_FT2Bq020Q4dRc';
const url_login = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBrspmo0uXmpz2mlNysP_FT2Bq020Q4dRc'
import axios from 'axios'
export type RootState = {
    token : string,
    user : userLoginType
};

export const user = {
  namespaced : true,
  state: {
    token : null,
  },
  getters: {},
  mutations: {

    setToken(state:any, payload:string){
      state.token = payload;
      const userTokenCookie = useCookie('token');
      userTokenCookie.value = payload;
    },
    getToken(state) {
      const userTokenCookie = useCookie('token');
      const token = userTokenCookie.value;
      if (token) {
          state.token = token;
      } else {
          return navigateTo('/login');
      }
  },

  },
  actions: {
    async registerUser({commit}:any,payload:userLoginType){
    const result = await axios.post(url_resgister, {email : payload.email, password : payload.password, returnSecureToken : true});
    console.log(result);
    },

    async loginUser({commit}:any,payload:userLoginType){
      commit('getToken');
  const {data} = await axios.post(url_login, {email : payload.email, password : payload.password, returnSecureToken : true});
     commit('setToken', data.idToken);
  }
  },
};
