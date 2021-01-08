<template>
    <div class="HotSongList">
        <div class="hot-box">
            <div class="icon-box">
                <div class="img"></div>
            <p>更新日期: 01月07日</p>
            </div>
        </div>

    <Musiclten></Musiclten>
    </div>
</template>

<script>
import Musiclten from '../components/Musiclten';


export default {
    name: 'HotSongList',
    data() {
        return {
            songID:[],
            songName:[]
        }
    },
    components:{
        Musiclten
    },
    beforeRouteEnter(to, from, next){
        // 获取数据
        next(vm=>{
            vm.$http.get('/top/list?idx=1').then(data=>{
                // console.log(data);
                // console.log(data.data.playlist.trackIds);
                // vm.songID = data.data.playlist.trackIds;
                for (let v in data.data.playlist.trackIds) {
                    vm.songID.push(data.data.playlist.trackIds[v].id);
                    vm.$http.get('/song/detail?ids='+data.data.playlist.trackIds[v].id).then(data=>{
                        console.log(data);
                    })
                }
                console.log(vm.songID);
            });
        });
    },
}
</script>

<style lang="less" scoped>
.hot-box {
    display: flex;
    flex-direction: row;
    height: 146px;
    background: url(../assets/bg1.jpg) no-repeat;
    .icon-box {
        margin-left: 20px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        .img {
            flex: 2;
            background: url(../assets/icon_01.png) no-repeat;
            background-position: -24px -30px;
            background-size: 166px 97px;
        }
        p {
            flex: 1;
        }
    }
}
</style>