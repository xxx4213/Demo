<template>
    <div class="myb">
        <div class="mineTop">
            我的
        </div>
        <div class="minehead">
            <div class="shot">
                <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fcms-bucket.ws.126.net%252F2022%252F1026%252F6657b2cfp00rkd1ln009nc000mh00l8c.png%26thumbnail%3D660x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670472875&t=f12d4a7abbc0a7f3c39a2fd316a58210" alt="">
            </div>
        </div>
        <div class="mylist">
            <p>我的订单</p>
            <div class="line"></div>
            <div class="list">
                <img src="https://obj.pipi.cn/festatic/asgard/resources/images/dpmmweb/mycenter/movie.png" alt="">
                <span>电影</span>
            </div>
        </div>
        <botmbar></botmbar>
    </div>
</template>

<script>
import botmbar from '@/components/MyBtomBar.vue';
export default {
    name: 'VmappMyMine',
    components: {
        botmbar
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="less" scoped>
    .myb {
        position: absolute;
        background: #f4f4f4;
        width: 100%;
        height: 100%;
        .mineTop {
            background: #df2d2d;
            padding: 14px 0;
            text-align: center;
            color: white;
        }
        .minehead {
            height: 150px;
            width: 100%;
            background-size: 100%;
            background-repeat: no-repeat;
            background-image: url(https://obj.pipi.cn/festatic/asgard/resources/images/dpmmweb/mycenter/bg.png);
            display: flex;
            justify-content: center;
            align-items: center;
            .shot {
                width: 66px;
                height: 66px;
                border-radius: 50%;
                border: 4px solid white;
                img {
                    width: 66px;
                    height: 66px;
                    border-radius: 50%;
                    display: inline-block;
                }
            }
        }
        .mylist {
            margin-top: 10px;
            padding: 0 15px;
            background: white;
            width: 100%;
            box-sizing: border-box;
            text-align: center;
            height: 150px;
            position: relative;
            p {
                position: relative;
                top: 13px;
                font-size: 15px;
                height: 21px;
                display: block;
                z-index: 1;
            }
            .line {
                height: 1px;
                width: 160px;
                position: absolute;
                left: 50%;
                margin-left: -80px;
                top: 23px;
                background: #f0f0f0;
            }
            .list {
                margin-top: 33px;
                display: flex;
                flex-direction: column;
                align-items: center;
                img {
                    width: 42px;
                    height: 42px;
                }
                span {
                    margin-top: 10px;
                    font-size: 15px;
                }
            }
            
        }
        
    }
</style>