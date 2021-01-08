<template>
  <div class="recommend">

    <Title>推荐歌单</Title>
    <ul class="recommendList">
      <router-link v-for="rem in recommendMusicList" :key="rem.id" to="/" tag="li">
        <div>
          <img :src="rem.picUrl"/>
          <span>
            <i></i>
            {{ rem.playCount|formatNum }}
          </span>
        </div>
        <p>{{ rem.name }}</p>
      </router-link>
    </ul>

    <Title>最新音乐</Title>
    <Musiclten :newMusicList="newMusicList"></Musiclten>
  </div>
</template>

<script>
import Title from '../components/Title';
import Musiclten from '../components/Musiclten';

export default {
  name: 'Recommend',
  components: {
    Title,
    Musiclten
  },
  data() {
    return{
      recommendMusicList:[],
      newMusicList:[]
    }
  },
  beforeRouteEnter(to, from, next){
    // 获取数据
    next(vm=>{
      vm.$http.get('/personalized?limit=6').then(data=>{
        console.log(data);
        vm.recommendMusicList = data.data.result;
      });

      vm.$http.get('/personalized/newsong').then(data=>{
        console.log(data);
        vm.newMusicList = data.data.result;
      });
    });
  },
  filters:{
    // 听歌人数后面加单位
    formatNum(value){
      return (value/10000).toFixed(1)+'万';
    }
  }
}
</script>

<style lang="less" scoped>
ul.recommendList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    width: 33%;
    div {
      position: relative;
      span {
        top: 2px;
        right: 3px;
        position: absolute;
        color: #fff;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        i {
          width: 17px;
          height: 15px;
          background: url(../assets/headset.svg) no-repeat;
          display: inline-block;
        }
      }
    }
    p {
      font-size: 16px;
      color: #333;
      margin-bottom: 16px;
      padding: 0px 5px;
      text-align: left;
      // 多出隐藏 显示...
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}

</style>
