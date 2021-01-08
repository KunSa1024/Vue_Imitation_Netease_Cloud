<template>
    <ul class="newMusicList">
        <router-link v-for="item in newMusicList" :key="item.id" tag="li" to="/">
            <div class="left">
                <div> {{ item.name }} </div>
                
                <p>
                    <i v-if="item.song.privilege.maxbr > 320000"></i>
                    {{ item.song.artists[0].name}}-{{item.name}}
                </p>
            </div>
            <div class="right">
                <span></span>
            </div>
        </router-link>
    </ul>
    
</template>

<script>
export default {
    name:'Musiclten',
    props:{
        newMusicList: Array
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
ul.newMusicList {
    li {
        display: flex;
        margin-top: 10px;
        padding-left: 10px;
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
</style>