<template>
  <div class="layout-container">
    <!-- 路由子页面 -->
    <router-view></router-view>
    <!-- 导航 -->
    <TableBar />
  </div>
</template>
<script>
import TableBar from '@/components/tableBar'
export default {
  components: {
    TableBar
  }
}
</script>
