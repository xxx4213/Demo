<template>
    <div class="mysearch">
        <div class="Searchtop">
            <div class="title"><span class="black" @click="back"><img src="../assets/img/pgraderight.png" alt=""></span>猫眼电影</div>
        </div>
        <div class="searchBox">
            <div class="searchCon">
                <input v-model.lazy="vuell" type="text" class="input" placeholder="搜电影、搜影院">
                <span class="text" @click="back">取消</span>
            </div>
        </div>
        <div class="content" v-if="listdata">
            <div class="list">
                <ul>
                    <li v-for="item in listdata" :key="item.id">
                        <div class="left">
                            <div class="image">
                                <img :src="item.poster" alt="">
                            </div>
                        </div>
                        <div class="right">
                            <div class="title"><span class="span1">{{item.name}}</span><span class="span2">{{item.score==''?'':item.score+"分"}}</span></div>
                            <p class="p1">{{item.ename}}</p>
                            <p class="p2">{{item.catogary}}</p>
                            <p class="time">{{item.release}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { searchMovie } from '@/api/search.js'
export default {
    name: 'VmappMySearch',
    props:['cityip'],
    data() {
        return {
            vuell:null,
            listdata:null,
        };
    },
    created(){
       
    },

    mounted() {
        
    },
    watch:{
        vuell(){
            this.searchMovieFun()
        }
    },

    methods: {
        searchMovieFun(){
            searchMovie({
                keyword:this.vuell,
                ci:this.sityip,
                limit:10
            }).then(data => {
                this.listdata = data
            })
        },
        back(){
            this.$router.go(-1);
        }
    },
};
</script>

<style lang="less" scoped>
.mysearch{
    //padding: 0 12px;
    .Searchtop{
        background-color: #e54847;
        padding: 12px;
        .title{
            font-size: 18px;
            color: white;
            text-align: center;
            position: relative;
            .black{
            position: absolute;
            top: 0;
            left: 5%;
            font-size: 12px;
            margin-top: 6px;
            transform: scale(0.8) rotate(180deg);
        }
        }
    }
    .searchBox{
        padding: 12px;
        background-color: #f5f5f5;
        .searchCon{
        display: flex;
        align-items: center;
        padding: 0 12px;
        
        .input{
            flex: 1;
            outline: none;
            border: 0;
            background-color: white;
            height: 24px;
            // background-image: url(../assets/img/search.png);
            // background-size: 14px 14px;
            // background-position: 6px 5px;
            // background-repeat: no-repeat;
            font-size: 13px;
        }
        .text{
            font-size: 14px;
            margin-left: 8px;
            color: #f0485e;
        }
    }
    }
    .content{
        .list{
            ul{
                li{
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #e6e6e6;
                    padding: 12px;
                    .image{
                        width: 65px;
                        img{
                            display: flex;
                            width: 100%;
                        }
                    }
                    .right{
                        flex: 1;
                        .title{
                            display: flex;
                            justify-content: space-between;
                            .span1{
                                color: #222222;
                                font-family: "黑体";
                                font-weight: bold;
                                font-size: 20px;
                                margin-left: 10px;
                            }
                            .span2{
                                color: #ffaa84;
                                font-size: 14px;
                            }
                        }
                        p{
                            font-size: 13px;
                            color: #666666;
                            margin-left: 10px;
                            margin-top: 4px;
                        }
                    }
                }
            }
        }
    }
    
}
</style>