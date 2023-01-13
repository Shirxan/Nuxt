<template>
  <div class="container">
    <div class="row">
      <div class="col-7 pt-5">
        <form @submit.prevent="Send">
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="email" v-model="user.mail" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="text" v-model="user.id" class="form-control" id="exampleFormControlInput1" placeholder="İstifadəçinin İD-si">
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea class="form-control" v-model="user.mezmun" id="exampleFormControlTextarea1" placeholder="Məqalə" rows="3"></textarea>
          </div>
          <button class="btn btn-primary" type="submit">Əlavə Et</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script setup>
import axios from "axios";

definePageMeta({
  layout: "meqale",
});
const user={
  mail : '',
  id: '',

  mezmun : ''
};


// const { data, pending, error, refresh } = await useAsyncData(
//     'Meqale',
//     () => $fetch('https://globaltalk-ee0c1-default-rtdb.firebasio.com/user.json')
// )
// const { data, pending, error, refresh } = await useAsyncData(
//     'Meqale',
//     () => $fetch('https://nuxtlogin-58d16-default-rtdb.firebaseio.com/user.json')
// )
async function Send(){
//   const { data, pending, error, refresh } = await useAsyncData(
//     'Meqale',
//     () => $fetch('https://nuxtlogin-58d16-default-rtdb.firebaseio.com/user.json',user)
// )
  let response =  axios.post('https://nuxtlogin-58d16-default-rtdb.firebaseio.com/user.json',user)
//   let response =  axios.post('https://globaltalk-ee0c1-default-rtdb.firebasio.com/user.json',user)
}


</script>


<style scoped>

</style>