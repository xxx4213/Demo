<template>
    <div class="ticketBox" v-if="movieinfo">
        <div class="ticketTop">
            <div class="title">
                <span class="span" @click="back">&lt;</span>{{movieinfo.nm}}
            </div>
        </div>
        <div class="ticketCon">
        <!-- <div class="ticketCon" :style="{'background-image':'url(' + movieinfo.img + ')'}"> -->
            <div class="img">
                <img :src="movieinfo.img" alt="">
            </div>
            <div class="container">
                <h2 class="h2">{{movieinfo.nm}}</h2>
                <p class="en">{{movieinfo.enm}}</p>
                <p class="p2">{{movieinfo.snum}}人想看</p>
                <p class="p3">{{movieinfo.cat}}</p>
                <p class="p4">{{movieinfo.src}}/{{movieinfo.dur}}分钟</p>
                <p class="p5">{{movieinfo.pubDesc}}</p>
            </div>
            <div class="icon">
                <img src="../assets/img/pgraderight.png" alt="">
            </div>
        </div>
        <div class="date">
            <span class="time">今天{{nowTime}}</span>
        </div>
        <div class="myselect">
            <myselect></myselect>
        </div>
        <div class="list">
            <ul class="listbox">
                <li v-for="item in list" :key="item.cinemaId">
                    <p class="listTitle">{{item.title}}<span class="price">{{item.price.n}}{{item.price.q}}</span></p>
                    <p class="addr">{{item.location}}</p>
                    <div class="lists"><span v-for="(items,index) in item.services" :key="index">{{items.text}}</span></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { getMovie,getTicket } from "@/api/ticket";
import myselect from "@/components/MySelect.vue"
export default {
    name: 'VmappMyTicket',

    data() {
        return {
            movieId:null,
            movieinfo:null,
            list:null,
            nowTime: "",
        };
    },

    mounted() {
        this.getNowDate()
    },

    methods: {
        getMovieFun(){
            getMovie({movieId:this.movieId}).then(data=>{
                //console.log(data);
                this.movieinfo = data.movie
            })
        },
        getTicketFun(){
            getTicket({cityId:20}).then(data=>{
                //console.log(data);
                this.list = data
            })
        },
        back(){
            this.$router.go(-1)
        },
        getNowDate() {
           var date = new Date();
           var month = date.getMonth() + 1;
           var day = date.getDate();
           if (month >= 1 && month <= 9) {
                month = "0" + month;
           }
            if (day >= 0 && day <= 9) {
                day = "0" + day;
            }
            this.nowTime = month + "月" + day + "日"
        }
    },
    created(){
        this.movieId = this.$route.query.movieId
        this.getMovieFun()
        this.getTicketFun()
        
    },
    components:{
        myselect
    }
};
</script>

<style lang="less" scoped>
.ticketBox{
    .ticketTop{
        height: 36px;
        font-size: 18px;
        line-height: 36px;
        text-align: center;
        background-color: #e54848;
        color: white;
        position: relative;
        .span{
            position: absolute;
            top: 0;
            left: 5%;
            font-size: 18px;
            font-family: "宋体";
            font-weight: bold;
        }
    }
    .ticketCon{
        background-color: #576263;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        //background-position: center;
        .img{
            width: 120px;
            overflow: hidden;
            margin-right: 10px;
            //padding: 10px 15px;
            img{
                display: block;
                width: 100%;
            }
        }
        .container{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .h2{
                margin-top: 5px;
                font-size: 18px;
                color: white;
                font-weight: bold;
            }
            .en{
                color: white;
                font-size: 13px;
                padding: 8px 0;
            }
            .p2{
                color: #f9c62b;
                font-size: 15px;
                font-weight: bold;
            }
            .p3{
                color: white;
                font-size: 13px;
                padding: 8px 0;
            }
            .p4{
                color: white;
                font-size: 13px;
            }
            .p5{
                color: white;
                font-size: 13px;
                padding: 8px 0;
            }
        }
        .icon{
            img{
                margin-right: -10px;
                width: 8px;
                height: 12px;
            }
        }
    }
    .date{
        text-align: center;
        padding: 8px 0;
        color: #f03d37;
        .time{
            padding: 8px;
            border-bottom: 3px solid #f03d37;
        }
    }
    .myselect{
        position: absolute;
        width: 100%;
        top: 115px;
    }
    .list{
        margin-top: 50px;
        .listbox{
            border-bottom: 1px solid #f8f8f8;
            padding: 10px;
            li{
                padding: 0 12px;
                border-bottom: 1px solid #f8f8f8;
                .listTitle{
                    font-size: 12px;
                    color: #000000;
                    .price{
                    color: #f03d37;
                    font-size: 14px;
                    margin-left: 30px;
                }

                }
                .addr{
                    color: #666666;
                    font-size: 10px;
                    padding: 5px 0;
                }
                .lists{
                    span{
                        border: 1px solid #579db7;
                        font-size: 8px;
                        color: #579daf;
                        border-radius: 3px;
                        margin-right: 5px;
                    }

                }
            }
        }
    }
}
</style>