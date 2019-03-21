<template>
  <div class="ass">
    <!-- <button id="btn ">创建表格</button> -->
    <button id="clear" @click="sha">清空购物车</button>
    <table>
      <thead>
        <tr>
          <th>
            <!-- @click='allchange(all)' -->
            <input type="checkbox" id="all" v-model="all" @click="allchange(all)">
          </th>
          <th class="w">商品名称</th>
          <th>商品数量</th>
          <th>商品单价</th>
          <th>小计</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(v, i) in data" :key="i">
          <td>
            <input type="checkbox" v-model="v.check" class="check">
          </td>
          <td>{{v.name}}</td>
          <td>
            <button class="reduce" @click="v.num--">-</button>
            <input type="text" v-model="v.num" readonly>
            <button class="add" @click="v.num++">+</button>
          </td>
          <td class="cost">{{v.price}}</td>
          <td class="lsum">{{v.xiao =v.num*v.price}}</td>
          <td>
            <a href="javascript:" class="del" @click="del(v.id)">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      总计：
      <span class="total">{{zong}}</span>
    </p>
  </div>
</template>
<script>
export default {
  name: "car",
  data() {
    return {
      // all:false
    };
  },
  methods: {
    allchange(all) {
      this.$store.commit("allchange", all);
    },
    sha() {
      this.$store.commit("done");
    },
    del(id){
      this.$store.commit("del",id);

    }
  },

  computed: {
    data() {
      return this.$store.state.datas;
    },
    zong() {
      let num = 0;
      this.$store.state.datas.forEach(v => {
        if (v.check) {
          num += v.xiao;
        }
      });
      return num;
    },
    all:{
        get(){
        if(this.$store.state.datas !=0){
            return this.$store.state.datas.every(v => v.check);
        }else{
            return false
        }
            // return this.$store.state.datas.every(v => v.check);
        },
        set(){

        }
    }
  }
};
</script>
 <style>
</style>