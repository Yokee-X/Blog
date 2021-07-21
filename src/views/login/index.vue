<!--
 * @Author: Yokee
 * @Date: 2020-11-29 11:11:56
 * @LastEditTime: 2020-12-20 21:46:56
 * @FilePath: \Ablog\src\views\login\index.vue
-->
<template>
  <div class="container">
    <input v-model="username" placeholder="姓名小写" />
    <input v-model="password" placeholder="一起时间"/>
   <button @click="login()">确定</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
     name: "Login",
  data() {
    return {
        username: "",
        password: "",
    };
  },
  methods:{
      ...mapActions(["updateUser"]),
      login(){
          if(this.username=="yyzzm" && this.password=="20140815"){
            this.updateUser({isLogin:true})
            this.$router.push({path:'/'})
          }
      }
  }
};
</script>

<style scoped>
.container{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('../../assets/image/loginback.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}
input{
  height: 40px;
  width: 20%;
  background: none;
  border-color: #FF852E;
  outline:none;
  margin-bottom: 25px;
  font-size: 18px;
  color: #FF332E;
}
input:focus{
  border-color: #FF852E;
  background-color: #FFD280;
}
input:active{
  border-color: #FF852E;
}
</style>