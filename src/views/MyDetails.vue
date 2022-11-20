<template>
    <div class="detailsBox">
        <div class="container" v-if="datalist">
            <div class="topCon" :style="{'background-color':movielist.backgroundColor}">
                <div class="back" @click="back">猫眼电影&nbsp;>&nbsp;{{movielist.nm}}</div>
                <div class="top">
                    <div class="left">
                        <img :src="movielist.img" alt="">
                    </div>
                    <div class="right">
                        <h3 class="h3">{{movielist.nm}}</h3>
                        <p>{{movielist.enm}}</p>
                        <p>{{movielist.cat}}</p>
                        <p>{{movielist.star}}</p>
                        <p class="p3">{{movielist.pubDesc}}/{{movielist.dur}}分钟</p>
                        <div class="look">
                            <div class="love">
                                <img src="../assets/img/love.png" alt="">想看
                            </div>
                            <div class="star">
                                <img src="../assets/img/star.png" alt="">看过
                            </div>
                        </div>
                    </div>
                </div>
                <div class="score">
                    <div class="scoreTop">
                        <div class="scorelogo">
                            <img src="../assets/img/pgradelog.png" alt="">
                            <span class="logotext">{{movielist.scoreLabel}}</span>
                        </div>
                    <div class="num">{{movielist.wish}}人想看</div>
                    <div class="numed">{{movielist.watched}}人看过<span>&gt;</span></div>
                    </div>
                    <div class="scoreBot">
                        <div class="nums">
                            <p class="scores">{{movielist.sc}}</p>
                            <p class="count">{{movielist.snum}}人评</p>
                        </div>
                        <div class="xingxingbox">
                            <div class="xingxing">
                                <div class="star">
                                    <img src="../assets/img/white-star.png" alt="">
                                    <img src="../assets/img/white-star.png" alt="">
                                    <img src="../assets/img/white-star.png" alt="">
                                    <img src="../assets/img/white-star.png" alt="">
                                    <img src="../assets/img/white-star.png" alt="">
                                </div>
                                <div class="progress-bar">

                                </div>
                            </div>
                            <div class="xingxing">
                                <div class="star">
                                    <img src="../assets/img/grey-star.png" alt="">
                                    <img src="../assets/img/white-star.png" alt="">
                                    <img src="../assets/img/white-star.png" alt="">
                                    <img src="../assets/img/white-star.png" alt="">
                                    <img src="../assets/img/white-star.png" alt="">
                                </div>
                                <div class="progress-bar progress-bar2">

                                </div>
                            </div>
                            <div class="xingxing">
                                <div class="star">
                                    <img src="../assets/img/grey-star.png" alt="">
                                    <img src="../assets/img/grey-star.png" alt="">
                                    <img src="../assets/img/white-star.png" alt="">
                                    <img src="../assets/img/white-star.png" alt="">
                                    <img src="../assets/img/white-star.png" alt="">
                                </div>
                                <div class="progress-bar progress-bar3">

                                </div>
                            </div>
                            <div class="xingxing">
                                <div class="star">
                                    <img src="../assets/img/grey-star.png" alt="">
                                    <img src="../assets/img/grey-star.png" alt="">
                                    <img src="../assets/img/grey-star.png" alt="">
                                    <img src="../assets/img/white-star.png" alt="">
                                    <img src="../assets/img/white-star.png" alt="">
                                </div>
                                <div class="progress-bar progress-bar4">

                                </div>
                            </div>
                            <div class="xingxing">
                                <div class="star">
                                    <img src="../assets/img/grey-star.png" alt="">
                                    <img src="../assets/img/grey-star.png" alt="">
                                    <img src="../assets/img/grey-star.png" alt="">
                                    <img src="../assets/img/grey-star.png" alt="">
                                    <img src="../assets/img/white-star.png" alt="">
                                </div>
                                <div class="progress-bar progress-bar5">

                                </div>
                            </div>
                        </div>
                        <div class="date">
                            <div class="left">
                                <h4 class="h4">Top</h4>
                                <span>{{movielist.vnum}}</span>
                            </div>
                            <div class="right">
                                <div class="year">{{movielist.rt}}</div>
                                <div class="list">中国大陆票房</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="introduction">
                    <h4 class="h4">简介</h4>
                    <p class="p">{{movielist.dra}}</p>
                    <h5 class="h5">演职人员</h5>
                    <div class="listbox">
                        <div class="list">
                            <ul>
                                <li v-for="item in actorlist" :key="item.id"> 
                                    <div class="img">
                                        <img :src="item.avatar" alt="">
                                    </div>
                                    <div class="actor">{{item.cnm}}</div>
                                    <div class="actor1">{{item.desc}}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="introduction2">
                    <h4 class="h4">视频推荐</h4>
                    <div class="listbox">
                        <div class="list">
                            <ul>
                                <li v-for="items in video" :key="items.id">
                                    <div class="img">
                                        <img :src="items.img" alt="">
                                        <div class="span">
                                            <!-- <span class="iconfont icon-bofang"></span> -->
                                            <img src="../assets/img/╩╙╞╡.png" alt="">
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="introduction3">
                    <h4 class="h4">剧照</h4>
                    <div class="listbox">
                        <div class="list">
                            <ul>
                                <li v-for="(item,index) in movielist.photos" :key="index">
                                    <div class="img">
                                        <img :src="item" alt="">
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box-office">
                <h3 class="officeTitle">票房</h3>
                <ul class="officeCon">
                    <li>
                        <p class="number">{{mbox.lastDayRank}}</p>
                        <p class="info">昨日排名</p>
                    </li>
                    <li>
                        <p class="number">{{mbox.firstWeekBox}}</p>
                        <p class="info">首周票房(万)</p>
                    </li>
                    <li>
                        <p class="number">{{mbox.sumBox}}</p>
                        <p class="info">累计票房(万)</p>
                    </li>
                </ul>
            </div>
            <div class="correlation">
                <div class="correlationTitle">
                    相关资讯
                </div>
                <ul class="correlation-item">
                    <li v-for="item in newlist" :key="item.id">
                        <div class="item-top">
                            <p class="con">{{item.title}}</p>
                            <div class="img">
                                <img :src="item.previewImages[0].url" alt="">
                            </div>
                        </div>
                        <div class="item-bot">
                            <div class="left">{{item.source}}</div>
                            <div class="right">
                                <div class="look">
                                    <img src="../assets/img/browse.png" alt="">
                                    {{item.viewCount}}
                                </div>
                                <div class="count">
                                    <img src="../assets/img/comment.png" alt="">
                                    {{item.commentCount}}
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="bot-info">
                <p class="bottext">影视行业信息<span class="botspan">《免责声明》</span>违法和不良信息举报电话：400601890</p>
                <div class="img">
                    <img src="../assets/img/bottom-logo.png" alt="">
                </div>
            </div>
        </div>
        <div class="buy-ticket" v-if="datalist">
            <div class="ticket" @click="ticket(movieId)">特惠购票</div>
        </div>
        <loading v-else></loading>
    </div>
</template>

<script>
import loading  from '../components/MyonlyLoading.vue'
import { getMovieDetail } from '@/api/details';
export default {
    name: 'VmappMyDetails',

    data() {
        return {
            movieId:null,
            movielist:null,//电影基本信息
            datalist:null,
            actorlist:null,
            video:null,
            mbox:null,//票房
            newlist:null,//资讯

        };
    },

    mounted() {
        
    },

    methods: {
        getMovieDetailFun(){
            //this.movieId = this.$route.query.movieId
            getMovieDetail({
                movieId:this.movieId}).then(data=>{
                    //console.log(data);
                    this.datalist = data
                    //电影基本信息
                    this.movielist = data.movie
                    //演职人员
                    this.actorlist = data.celebrities
                    //视频推荐
                    this.video = data.relatedMovies
                    //票房
                    this.mbox = data.mbox.mbox
                    //资讯
                    this.newlist = data.newsList.newsList
                }
            )
        },
        back(){
            this.$router.push("/index/one");
        },
        ticket(id){
            this.$router.push({name:'ticket',query:{movieId:id}})
        }
    },
    created(){
        this.movieId = this.$route.query.movieId
        if(this.$route.query.movieId){
            this.getMovieDetailFun()
        }
        if(!this.datalist){
            this.flag=true
        }
    },
    components:{
        loading
    }
};
</script>

<style lang="less" scoped>
.detailsBox{
    padding-bottom: 60px;
    background-color: #f4f4f4;
    .container{
        background-color: #f4f4f4;
        .topCon{
            padding: 0 12px;
            padding-bottom: 15px;
            background-color: #66593e;
            .back{
                font-size: 15px;
                color: rgba(255, 255, 255, 0.8);
                padding: 15px 0;
            }
            .top{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .left{
                    width: 105px;
                    height: 145px;
                    margin-right: 10px;
                    img{
                        width: 100%;
                        height: 100%;
                        display: block;
                    }
                }
                .right{
                    flex: 1;
                    .h3{
                        font-size: 22px;
                        color: white;
                        padding-bottom: 10px;
                    }
                    p{
                        font-size: 13px;
                        color: #c2b8a9;
                        margin-top: 2px;
                    }
                    .p3{
                        margin-bottom: 2px;
                    }
                    .look{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .love{
                            width: 45%;
                            height: 25px;
                            padding: 4px 0;
                            background-color: rgba(255, 255, 255, 0.4);
                            border-radius: 6px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 15px;
                            color: white;
                            img{
                                width: 12px;
                                height: 12px;
                                margin-right: 5px;
                            }
                        }
                        .star{
                            width: 45%;
                            height: 25px;
                            padding: 4px 0;
                            margin-right: 14px;
                            background-color: rgba(255, 255, 255, 0.4);
                            border-radius: 6px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-size: 15px;
                            color: white;
                            img{
                                width: 12px;
                                height: 12px;
                                margin-right: 5px;
                            }
                        }
                    }
                }
            }
            .score{
                background-color: rgba(0, 0, 0, 0.15);
                padding: 8px;
                border-radius: 8px;
                margin-top: 12px;
                .scoreTop{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .scorelogo{
                        display: flex;
                        align-items: center;
                        img{
                            width: 32px;
                            height: 32px;
                            transform: scale(0.7);
                        }
                        .logotext{
                            font-size: 12px;
                            color: white;
                        }
                    }
                    .num{
                            font-size: 12px;
                            color: #bbb2a7;
                    }
                    .numed{
                            font-size: 12px;
                            color: #bbb2a7;
                    }
                }
                .scoreBot{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .nums{
                        .scores{
                            font-size: 36px;
                            text-align: right;
                            color: #ffb400;
                        }
                        .count{
                            font-size: 12px;
                            color:#bbb2a7;
                        }
                    }
                    .xingxingbox{
                        transform: scale(0.8);
                        .xingxing{
                            display: flex;
                            align-items: center;
                            .star{
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                width: 30px;
                                transform: scale(0.4);
                                img{
                                    display: block;
                                    margin-right: 4px;
                                }
                            }
                            .progress-bar{
                                width: 70px;
                                height: 4px;
                                background-color: rgba(0, 0, 0, 0.15);
                                margin-left: 20px;
                                overflow: hidden;
                                position: relative;
                                border-radius: 2px;
                                &::after{
                                    content: "";
                                    display: block;
                                    position: absolute;
                                    width: 100%;
                                    height: 100%;
                                    top: 0;
                                    left: 0;
                                    background-color: #aba49a;
                                }
                            }
                            .progress-bar2{
                                &::after{
                                    left: -20%;
                                }
                            }
                            .progress-bar3{
                                &::after{
                                    left: -40%;
                                }
                            }
                            .progress-bar4{
                                &::after{
                                    left: -60%;
                                }
                            }
                            .progress-bar5{
                                &::after{
                                    left: -80%;
                                }
                            }
                        }
                    }
                    .date{
                        display: flex;
                        align-items: center;
                        border: 1px solid #6b634f;
                        padding: 2px;
                        border-radius: 2px;
                        .left{
                            border-color: #614830;
                            border-radius: 2px;
                            margin-right: 10px;
                            .h4{
                                font-size: 14px;
                                color: #c88e38;
                            }
                            span{
                                display: block;
                                text-align: center;
                                color: #e1c969;
                                font-size: 12px;
                            }
                        }
                        .right{
                            .year{
                                font-size: 12px;
                                color: #9a8d5e;
                            }
                            .list{
                                font-size: 14px;
                                color: #d2b767;
                            }
                        }
                    }
                }
            }
            .introduction{
                
                .h4{
                    font-size: 16px;
                    color: white;
                    margin-top: 15px;
                }
                .p{
                    color: white;
                    word-break: break-all;
                    font-size: 14px;
                    padding: 12px 0;
                }
                .h5{
                    font-size: 16px;
                    color: white;
                    padding-bottom: 10px;
                }
                .listbox{
                    .list{
                        overflow: hidden;
                        height: 140px;
                        ul{
                            display: flex;
                            overflow: auto;
                            //height: 150px;
                            li{
                                margin-right: 12px;
                                .img{
                                    width: 80px;
                                    height: 100px;
                                    overflow: hidden;
                                    img{
                                        display: block;
                                        width: 100%;
                                    }
                                }
                                .actor{
                                    font-style: 14px;
                                    color: #76828c;
                                    text-align: center;
                                }
                                .actor1{
                                    font-style: 14px;
                                    color: black;
                                    text-align: center;
                                }
                            }
                        }
                    }
                }
            }
            .introduction2{
                margin-top: 12px;
                .h4{
                    font-size: 16px;
                    color: white;
                    margin-top: 15px;
                    padding-bottom: 15px;
                }
                .p{
                    color: white;
                    font-style: 12px;
                    padding: 12px 0;
                }
                .h5{
                    font-style: 12px;
                    color: white;
                    padding-bottom: 10px;
                }
                .listbox{
                    .list{
                        overflow: hidden;
                        ul{
                            display: flex;
                            overflow: auto;
                            li{
                                margin-right: 12px;
                                .img{
                                    width: 144px;
                                    height: 95px;
                                    border-radius: 10px;
                                    overflow: hidden;
                                    position: relative;
                                    img{
                                        display: block;
                                        width: 100%;
                                    }
                                    .span{
                                        position: absolute;
                                        top: 50%;
                                        left: 50%;
                                        width: 30px;
                                        height: 30px;
                                        background-color: rgba(255, 255, 255, 0.8);
                                        border-radius: 50%;
                                        transform: translate(-50%,-50%);
                                        overflow: hidden;
                                        img{
                                            display: block;
                                            width: 38px;
                                            height: 40px;
                                            margin-top: -4px;
                                            margin-left: -3px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .introduction3{
                .h4{
                    font-size: 16px;
                    color: white;
                    margin-top: 15px;
                    padding-bottom: 15px;
                }
                .p{
                    color: white;
                    font-style: 12px;
                    padding: 12px 0;
                }
                .h5{
                    font-style: 12px;
                    color: white;
                    padding-bottom: 10px;
                }
                .listbox{
                    .list{
                        overflow: hidden;
                        ul{
                            display: flex;
                            overflow: auto;
                            li{
                                margin-right: 12px;
                                .img{
                                    width: 144px;
                                    height: 95px;
                                    overflow: hidden;
                                    img{
                                        display: block;
                                        width: 100%;
                                        
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .box-office{
            padding: 12px;
            margin-top: 15px;
            background-color: #fff;
            .officeTitle{
                color:#000000;
                font-size: 16px;
                padding: 10px 12px;
            }
            .officeCon{
                display: flex;
                align-items: center;
                justify-content: space-around;
                border-radius: 8px;
                padding: 15px 0;
                background-color: #f8f8f8;
                li{
                    .number{
                        color: #f15a55;
                        font-size: 12px;
                        text-align: center;
                    }
                    .info{
                        margin-top: 2px;
                        color: #666666;
                        font-size: 12px;
                        text-align: center;
                    }
                }
            }
        }
        .correlation{
            margin-top: 15px;
            background-color: white;
            .correlationTitle{
                color: #787878;
                font-size: 12px;
                padding: 12px;
                border-bottom: 1px solid #f9f9f9;
            }
            .correlation-item{
                padding: 12px;
                li{
                    margin-top: 10px;
                    border-bottom: 1px solid #f9f9f9;
                    .item-top{
                        display: flex;
                        .con{
                            color: #202020;
                            font-size: 14px;
                            font-weight: bold;
                            word-break: break-all;
                            flex: 1;
                        }
                        .img{
                            width: 120px;
                            overflow: hidden;
                            img{
                                display: block;
                                width: 100%;
                            }
                        }
                    }
                    .item-bot{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 10px 0;
                        .left{
                            color: grey;
                            font-size: 12px;
                        }
                        .right{
                            display: flex;
                            width: 123px;
                            align-items: center;
                            justify-content: space-between;
                            color: grey;
                            font-size: 14px;
                            .look{
                                display: flex;
                                img{
                                    width: 15px;
                                    height: 15px;
                                    padding-right: 2px;
                                }
                            }
                            .count{
                                display: flex;
                                img{
                                    width: 15px;
                                    height: 15px;
                                    padding-right: 2px;
                                }
                            }
                        }
                    }
                }
            }
        }
        .bot-info{
            padding: 30px 12px;
            .bottext{
                color: #bdbdbd;
                font-size: 13px;
                text-align: center;
                .botspan{
                    color: #5e80a5;
                }
            }
            .img{
                text-align: center;
                width: 100%;
                margin-top: 10px;
                img{
                    display: block;
                    width: 100px;
                    margin: 0 auto;
                }
            }
        }
    }
    .buy-ticket{
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        height: 60px;
        background-color: white;
        .ticket{
            margin: 0 auto;
            margin-top: 10px;
            width: 85%;
            height: 36px;
            line-height: 36px;
            color: white;
            text-align: center;
            background-color: #fb383b;
            border-radius: 36px;
        }
    }
}
</style>