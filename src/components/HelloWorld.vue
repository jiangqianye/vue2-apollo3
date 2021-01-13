<template>
  <div class="hello">
    <button @click="handleGet()">点击获取</button>
    <div>这是真的 {{ test2 }}</div>
    <h1>{{ msg }}</h1>
    <button @click="handleTest()">点击测试</button>
  </div>
</template>

<script>
import gql from "../apollo/apollo";
import { set_fetchPolicyStatus, http_query_interceptor } from "../vue-apollo";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      test2: "222",
    };
  },

  methods: {
    handleGet() {
      const obj_gql = {
        // query: gql.GET_WEB_BANNERS,
        // variables: {
        //   locationKey: "homePageWebBannerConfig",
        //   distributionPlatform: "PC",
        //   cubeListCategory: "DISCOVERY",
        //   type: "ALBUM",
        //   page: 1,
        //   pageSize: 9,
        // },

        query: gql.GET_USER_DETAIL,
        variables: {
          infoType: 1,
          userId: "4329705",
        },
      };
      const val = http_query_interceptor(this, obj_gql).then((res) => {
        console.log("/=/这样获取结果222：", res);
      });
      console.log("/=/这样获取结果：", val);
      // this.$apollo
      //   .query({
      //     // query: gql.GET_WEB_BANNERS,
      //     // variables: {
      //     //   locationKey: "homePageWebBannerConfig",
      //     //   distributionPlatform: "PC",
      //     //   cubeListCategory: "DISCOVERY",
      //     //   type: "ALBUM",
      //     //   page: 1,
      //     //   pageSize: 9,
      //     // },

      //     query: gql.GET_USER_DETAIL,
      //     variables: {
      //       infoType: 1,
      //       userId: "4329705",
      //     },
      //   })
      //   .then((res) => {
      //     console.log("/=/成功1:", res);
      //   })
      //   .catch((err) => {
      //     console.log("/=/erCUO错误:", err);
      //   });
    },
    handleTest() {
      set_fetchPolicyStatus(this, "no-cache");
      console.log("/=/打印测试:", this.$apollo);
      // this.$apollo.provider.clients.defaultClient.defaultOptions = {
      // this.$apollo.provider.defaultClient.defaultOptions = {
      //   query: {
      //     fetchPolicy: "no-cache", //  'network-only'  // 'cache-and-network',
      //   },
      // };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
