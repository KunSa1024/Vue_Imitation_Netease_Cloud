import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Recommend',
        component: () =>
            import ('../views/Recommend.vue')
    },
    {
        path: '/hotSongList',
        name: 'HotSongList',
        component: () =>
            import ('../views/HotSongList.vue')
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router