<!--
 * @Author: your name
 * @Date: 2020-11-15 17:14:31
 * @LastEditTime: 2020-11-15 20:33:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week\app\src\view\Detail\index.vue
-->
<template>
  <div class="detail">
    <img :src="newList[0].img" alt="" />
    <h2>{{ newList[0].title }}</h2>
    <p>{{ newList[0].desc }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id,
      newList: []
    };
  },
  computed: {
    ...mapState({
      list: store => store.data
    })
  },
  created() {
    this.newList = this.list.filter(item => item.id === this.id);
    console.log(this.newList);
  }
};
</script>

<style></style>
