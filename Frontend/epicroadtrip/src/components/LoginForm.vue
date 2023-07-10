<template>
    <div class="con">
        <transition name="login">
        <div v-show="this.log" class="card">
            <h1>Login</h1>
            <input name="mailInput" v-model="user" placeholder="Login">
            <input name="pswInput" v-model="psw" placeholder="Password">
            <p style="color:red; margin-left: 10px">{{ this.error }}</p>
            <div>
                <button name="loginButton" @click="this.login()">Login</button>
                <button  v-on:click="this.log = false">Signup</button>
            </div>
        </div>
        </transition>
        <transition name="login">
        <div v-show="!this.log" class="card">
            <h1>Signup</h1>
            <input v-model="user" placeholder="Login">
            <input v-model="psw" placeholder="Password">
            <input v-model="confpsw" placeholder="Confirm password">
            <div>
                <button v-on:click="this.log = true">Login</button>
                <button name="signupButton" @click="this.signup()">Signup</button>
            </div>
                <router-link to="/">home</router-link>
        </div>
        </transition>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name    : 'LoginForm',
    data () {
        return {
            password: '',
            log : true,
            user : '',
            psw : '',
            confpsw : '',
            error : ''
        }
    },
    methods : {
        async signup() {
            if (this.psw != this.confpsw) {
                this.error = "Passwords don't match"
                return
            }
            await axios.post("http://localhost:8080/api/auth/signup", {
                "email": this.user,
                "password": this.psw
            })
        },
        async login() {
            var res =  await axios.post("http://localhost:8080/api/auth/signin", {
                "email": this.user,
                "password": this.psw
            }).catch(err => {
                console.log("🚀 ~ err:", err)
                this.error = "Wrong login or password"
            })
            if (res != undefined && res.status == 200)
                this.$router.push('/')
        },
    }
}
</script>

<style scoped>
.con {
    z-index: 10;
    position: relative;
    height: 100%;
    width: 100%;
    filter : drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.356));
}
.login-enter-active
{
  transition: all 1s ease;
  transition-delay: 0.1s;
}
.login-leave-active
 {
  transition: all 1s ease;
}

.login-enter-from {
  opacity: 0;
  transform: translate(-300px);
}

.login-leave-to {
  opacity: 0;
  transform: translate(300px);
}

.login-leave-from,
.login-enter-to {
  opacity: 1;
  transform: translate(0);
}


h1 {
    font-size: 400%;
}
img {
    width: auto;
    height: 20px;
    margin-right: 20px;
}
.google {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: #3f5787;
    width: 420px;
    font-weight: bold;
    margin: 10px;
    margin-top: 0px;
    text-align: center;
    padding: 10px;
}
h1 {
    text-align: center;
}
button {
    cursor: pointer;
    border: none;
    padding: 10px;
    border-radius: 50px;
    width: 200px;
    margin: 10px;
    background-color: #3f5787;
    color: white;
    transition-duration: 0.5s;
}
button:hover {
    transform: scale(1.1);
}
input {
    border: none;
    margin: 10px;
    border-radius:50px;
    height: 30px;
    width: 400px;
    padding: 5px;
    padding-left: 20px;
}
.card {
    top: 33%;
    left: 10%;
    display: flex;
    flex-direction: column;
    position: absolute;
    height: fit-content;
}
</style>