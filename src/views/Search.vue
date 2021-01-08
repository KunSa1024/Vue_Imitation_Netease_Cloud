<template>
    <div class="search">
        <div class="searchBox">
            <form action="">
                <div class="box">
                <i class="fa fa-search"></i>
                <input type="search" placeholder="" autocomplete="off" @input="input" value="" ref="input">
                <label class="text" ref="label">搜索歌曲、歌手、专辑</label>
                </div>
            </form>
        </div>
        <ul>
            <li></li>

        </ul>
    </div>
</template>

<script>
export default {
    name:'Search',
    data(){
        return {
            keyword:[],
            keywordIdName:[],
        }
    },
    components:{

    },
    methods: {
        input(){
            // console.log(this.$refs.label)
            if (this.$refs.input.value != '') {
                this.$refs.label.style.display = 'none';
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm=>{
            vm.$http.get('/search?keywords=海阔天空').then(data=>{
                console.log(JSON.parse(data.request.response))
                vm.keywords = JSON.parse(data.request.response);
                for (let k in vm.keywords.result.songs) {
                    // console.log(k)
                    console.log(vm.keywords.result.songs[k])
                    vm.keywordIdName = vm.keywords.result.songs[k];
                }
            })
        })
    }
}
</script>

<style lang="less" scoped>
div.search {
    display: flex;
    div.searchBox {
        padding: 15px 11px;
        border-bottom: 1px solid #e1e2e3;
        width: 100%;
        div.box {
            position: relative;
            width: 100%;
            height: 30px;
            padding: 0 30px;
            box-sizing: border-box;
            background: #ebecec;
            border-radius: 30px;
            i {
                margin: 5px 8px 4px;
                position: absolute;
                top: 0;
                left: 0;
            }
            input {
                width: 100%;
                height: 30px;
                line-height: 18px;
                background: rgba(0,0,0,0);
                font-size: 14px;
                color: #333;
                border: 0;
                outline: none;
            }
            .text {
                position: absolute;
                left: 30px;
                top: 5px;
                font-size: 14px;
                color: #c9c9c9;
                background: rgba(0,0,0,0);
                pointer-events: none;
            }
        }
    }
}
</style>