<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item v-for="item in icons" :key="item.name" :to="{name: item.path}" icon="home-o">
      <span>{{item.name}}</span>
      <template #icon="props">
        <i :class="['icon',`icon-${item.active}`,props.active ? 'primary':'' ]"></i>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  name: 'tabbar',
  data () {
    return {
      active: 0,
      icons: [
        {
          name: '首页',
          path: 'home',
          active: 'shouye'
        },
        {
          name: '问答',
          path: 'qa',
          active: 'wenda'
        },
        {
          name: '视频',
          path: 'video',
          active: 'shipin'
        },
        {
          name: '我的',
          path: 'my',
          active: 'wode'
        }
      ]
    }
  }
}
</script>
