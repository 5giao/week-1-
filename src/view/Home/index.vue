<!--
 * @Author: your name
 * @Date: 2020-11-15 17:14:37
 * @LastEditTime: 2020-11-15 20:07:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \week\app\src\view\Home\index.vue
-->
<template>
  <div class="home">
      <ul>
          <li v-for="(item,index) in list" :key="index" @click="ToDetail(item.id)">
              <img :src="item.img" alt="">
              <div>
                  <h3>{{item.title}}</h3>
                  <p>{{item.desc}}</p>
              </div>
          </li>
      </ul>

  </div>
</template>

<script>
import axios from "axios"
import {mapState,mapActions} from "vuex"
export default {
    data(){
        return{
            
        }
    },
    created() {
        this.get() 
    },
    methods: {
        ...mapActions(['change_data']),
        get(){
            axios.get('/list').then((res)=>{
                // this.$store.dispatch('change_data',res.data.list)
                this.change_data(res.data.list)
            })
        },
        ToDetail(id){
            this.$router.push(`/detail/${id}`)
        },
    },
    computed: {
        ...mapState({
            list: store=>store.data
        })
    },
}
</script>

<style scoped>
.home{
    width: 100%;
    height: 100%;
}
.home ul{
    width: 100%;
    height: auto;
}
.home ul li{
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
}
</style>
