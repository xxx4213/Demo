<template>
    <div>
        <div class="loginTop">
            <span @click="fanFun">&lt;</span>
            <p>猫眼电影</p>
            <div></div>
        </div>
        <div class="loginBot">
            <div class="log1">
                <input type="number" placeholder="请输入账号" v-model="account">
            </div>
            <div class="log2">
                <input type="password" placeholder="请输入密码" v-model="password">
            </div>
            <div class="logbtn" @click="loginFun" v-if="pwdlogin == false">
                登录
            </div>
            <div class="logbtn1" @click="loginFun" v-if="pwdlogin == true">
                登录
            </div>
            <div class="argeement">
                <input type="checkbox" v-model="bbcc">
                我已阅读并同意
                <span>《猫眼用户服务协议》</span>
                <span>《隐私政策》</span>
                客服电话
                <span>1010-5335</span>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant'
export default {
    name: 'VmappMyHome',

    data() {
        return {
            account:"",
            password:"",
            pwdlogin:false,
            bbcc:false
        }
    },

    mounted() {
        
    },

    methods: {
        fanFun(){
            this.$router.go(-1)
        },
        pwdBtnloginFun(){
            if (this.account.length != 0 && this.password.length >= 6) {
                this.pwdlogin = true
            } else {
                this.pwdlogin = false
            }
        },
        loginFun(){
            if (this.account.length != 0 && this.password.length >= 6) {
                if(this.bbcc == true){
                    Toast ({message: "登陆成功",
                    position:"buttom" });
                    localStorage.setItem("userid",88888888)
                    setTimeout(() => {
                        this.$router.push('/mine')
                    },1500)
                }else {
                    Toast({message:"请阅读并同意隐私服务协议",position:"bottom"})
                }
            }else if(this.account.length != 0 && this.password.length == "") {
                Toast ({message: "请输入密码",
                position:"buttom"})
            }else if(this.account.length == "" && this.password.length == ""){
                Toast ({message: "请输入账号密码才能登录",
                position:"buttom"})
            }
            else {
                Toast({message:"请输入6位数的密码",
                position:"bottom"})
            }
        }
    },
    watch:{
        account: function(){
            this.pwdBtnloginFun();
        },
        password:function(){
            this.pwdBtnloginFun();
        }
    }
};
</script>

<style lang="less" scoped>
    .loginTop {
        background: #df2d2d;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
        color: white;
        padding: 12px;
        span {
            font-family: "宋体";
            font-size: 20px;
        }
    }
    .loginBot {
        padding: 16px;
        .log1 {
            margin-top: 32px;
            padding: 12px 0;
            border-bottom: 1px solid #f7f7f7;
            input {
                width: 100%;
                border: 0;
                outline: none;
            }
            input::-webkit-input-placeholder {
                color: #ccc;
            }
        }
        .log2 {
            margin-top: 12px;
            padding: 12px 0;
            border: 1px solid #f7f7f7;
            input {
                width: 100%;
                border: 0;
                outline: none;
            }
            input::-webkit-input-placeholder {
                color: #ccc;
            }
        }
        .logbtn {
            background: #e5e5e5;
            text-align: center;
            font-size: 14px;
            width: 100%;
            margin-top: 14px;
            padding: 12px 0;
            border-radius: 24px;
            color: #999;
        }
        .argeement {
            font-size: 12px;
            color: #7f7f7f;
            margin-top: 30px;
            input {
                display: inline-block;
                border-radius: 50%;
            }
            span {
                color: #df2d2d;
                display: inline-block;
            }
        }
        .logbtn1 {
            background: #df2d2d;
            text-align: center;
            font-size: 14px;
            width: 100%;
            margin-top: 14px;
            padding: 12px 0;
            border-radius: 24px;
            color: #fff;
        }
    }
</style>