<template>
  <div class="about">
    <h1 @click="clickRouter()">user</h1>
    <h2>User {{ this.$route.params.id }}</h2>
    <p>state {{this.$store.state.user}}</p>
    <!-- 嵌套路由 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "User",
  methods: {
    clickRouter() {
      console.log('/=/状态管理：',this.$store.state.user.user);
      console.log("/=/打印路由1：", this.$route);
          console.log("/=/打印路由2：", this.$router);
      // this.$router.push('Home') // 动态路由下一级 === {path:Home}
      // this.$router.push({ name: 'About'}) // 全局路由
      // this.$router.push({ name: 'User', params: { id: '123' }}) // 全局路由+动态
          this.$router.push({ path: 'profile',query: { plan: 'private' }}) // 动态路由下一级+参数
    },
  },
};
</script>
