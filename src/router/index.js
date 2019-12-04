import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import message from '@/components/personal/message'
import collection from '@/components/personal/collection'
import presents from '@/components/personal/presents'
import bin from '@/components/personal/bin'
import myArticle from '@/components/myArticle'
import chattingRoom from '@/components/chattingRoom'
import library from '../components/library'
import chief from '@/components/lead/chief'
import logistics from '@/components/lead/logistics'
import outreach from '@/components/lead/outreach'
import secretary from '@/components/lead/secretary'
import study from '@/components/lead/study'
import leftmenu from '@/components/leftmenu'
import jp from '@/components/jp'
import tp from '@/components/tp'
import sp from '@/components/sp'
import kt from '@/components/kt'


Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        keepAlive: true
      },
    },
    {
      path: '/leftmenu',
      name: 'leftmenu',
      component: leftmenu,
    },
      /*children:[*/
        {
          path: '/message',
          name:'message',
          component: message,
        },
        {
          path:'/collection',
          name:'collection',
          component:collection,
        },
        {
          path:'/presents',
          name:'presents',
          component:presents,
        },
        {
          path:'/bin',
          name:'bin',
          component:bin,
        },
        {
          path:'/myArticle',
          name:'myArticle',
          component:myArticle,
        },
        {
          path:'/chattingRoom',
          name:'chattingRoom',
          component:chattingRoom,
          children:[
            {
              path:'/kt',
              name:'kt',
              component:kt,
            },
            {
              path:'/jp',
              name:'jp',
              component:jp,
            },
            {
              path:'/tp',
              name:'tp',
              component:tp,
            },
            {
              path:'/sp',
              name:'sp',
              component:sp,
            },
          ]
        },
        {
          path:'/library',
          name:'library',
          component:library,
        },
        {
          path:'/chief',
          name:'chief',
          component:chief,
        },
        {
          path:'/logistics',
          name:'logistics',
          component:logistics,
        },
        {
          path:'/outreach',
          name:'outreach',
          component:outreach,
        },
        {
          path:'/secretary',
          name:'secretary',
          component:secretary,
        },
        {
          path:'/study',
          name:'study',
          component:study,
        },

      ]
/*    }
  ]*/
})
export default router
