<template>
    <div class="HotSongList">
        <div class="hot-box">
            <div class="icon-box">
                <div class="img"></div>
            <p>更新日期: {{ updateData|formatDate }}</p>
            </div>
        </div>

        <ul class="newMusicList">
            <router-link v-for="(item, k) in songName" :key="songID[item]" tag="li" to="/">
                <div :class="k<3?'red':'num'">
                    {{ k+1|numieom }}
                </div>
                <div class="left">
                    <div> {{ item.songs[0].name }} </div>
                    
                    <p>
                        <i v-if="item.privileges[0].maxbr > 320000"></i>
                        {{ item.songs[0].ar[0].name }}-{{ item.songs[0].al.name }}
                    </p>
                </div>
                <div class="right">
                    <span></span>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
// import Musiclten from '../components/Musiclten';


export default {
    name: 'HotSongList',
    data() {
        return {
            songID:[],
            songName:[],
            updateData: new Date(),
        }
    },
    components:{
    },
    beforeRouteEnter(to, from, next){
        let musicids = [];
        // 获取数据
        next(vm=>{
            vm.$http.get('/top/list?idx=1').then(data=>{
                // 获取时间
                vm.updateData = data.data.playlist.updateTime;
                // console.log(data.data.playlist.updateTime);
                // 获取前 20个 ID
                musicids = data.data.playlist.trackIds.slice(0,20);
                for (let v in musicids) {
                    vm.songID.push(data.data.playlist.trackIds[v].id);
                    vm.$http.get('/song/detail?ids='+data.data.playlist.trackIds[v].id).then(data=>{
                        vm.songName.push(data.data)
                    })
                }
                // console.log(vm.songName); 
            });
        });
    },
    filters: {
        formatDate(value){
            let d=new Date(value);
            let month = d.getMonth() +1;
            return (month < 10 ? '0' + month : month) +'月'+ d.getDate()+'日';
        },
        numieom(value){
            return value < 10 ? '0'+value : value;
        }
    }
}
</script>

<style lang="less" scoped>
.HotSongList {
    .hot-box {
        display: flex;
        height: 25vh;
        background: url(/img/bg1.f01a2523.jpg) no-repeat;
        .icon-box {
            margin-left: 20px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            .img {
                background: url(/img/icon_01.5207a28c.png) no-repeat;
                background-position: -24px -30px;
                background-size: 166px 97px;
                width: 142px;
                height: 67px;
            }
            p {
                color: #fff;
                font-size: 15px;
                margin-top: 5px;
                text-align: left;
            }
        }
    }

    ul.newMusicList {
        li {
            display: flex;
            margin-top: 10px;
            padding-left: 10px;
            div.red {
                color: red;
                font-size: 17px;
                padding: 10px 10px 10px 0px;
            }
            div.num {
                padding: 10px 10px 10px 0px;
                font-size: 17px;
                color: #999;
            }
            
            div.left {
                flex: 1;
                text-align: left;
                border-bottom: 1px solid #dcdcdc;
                div {
                    font-size: 17px;
                    color: #000;
                }
                p {
                    font-size: 12px;
                    color: #888;
                    display: inline-block;
                    margin: 5px 0px;
                    i {
                        width: 16px;
                        height: 13px;
                        display: inline-block;
                        background: url(../assets/icon_01.png) no-repeat 0px 0px;
                        background-size: 211px 123px;
                    }
                }
            }
            div.right {
                border-bottom: 1px solid #dcdcdc;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 0px 10px;
                span {
                    background: url(../assets/icon_01.png) no-repeat -24px 0px;;
                    background-size: 166px 97px;
                    width: 22px;
                    height: 22px;
                }
            }
        }
    }
}
</style>