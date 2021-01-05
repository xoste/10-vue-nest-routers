import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Header from "../views/Header";
import Footer from "../views/Footer";
import OuMei from "../views/OuMei";
import GuoChan from "../views/GuoChan";
import Music from "../views/Music";


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: {
            name: 'music'
        }
    },
    {
        path: '/music',
        name: 'music',
        component: Music,
        children: [
            /**
             * path中如果写上 /xxx, 是绝对路径，/ou_mei
             * 如果不写 /，那么就是相对路径  /music/ou_mei
             * name: 'music.oumei'  表示父路由与子路由之间的关系
             * */
            {
                path: 'oumei',
                name: 'music.oumei',
                component: OuMei
            },
            {
                path: 'guochan',
                name: 'music.guochan',
                component: GuoChan
            }
        ]
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
