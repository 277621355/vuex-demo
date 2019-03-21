<template>
  <div>
    <table class="tb" border="1" width="500">
      <tr>
        <th>id</th>
        <th>商品</th>
        <th>单价</th>
        <th>剁掉你的手</th>
      </tr>
      <tr v-for="(v,i) in data" :key="i">
        <td>{{v.id}}</td>
        <td>{{v.name}}</td>
        <td>{{v.price}}</td>
        <td>-
          <button @click="add(v)">加入购物车</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "list",
  data() {
    return {
      data: [
        { id: 1, name: "瓜子", price: "5", num: 1, check: false, xiao: 0 },
        { id: 2, name: "花生", price: "8", num: 1, check: false, xiao: 0 },
        { id: 3, name: "矿泉水", price: "2", num: 1, check: false, xiao: 0 },
        { id: 4, name: "八宝粥", price: "10", num: 1, check: false, xiao: 0 },
        { id: 5, name: "火腿肠", price: "10", num: 1, check: false, xiao: 0 },
        { id: 6, name: "脚挪一挪", price: "0", num: 1, check: false, xiao: 0 },
        { id: 7, name: "苹果X", price: "9999", num: 1, check: false, xiao: 0 },
        {
          id: 8,
          name: "苹果logo",
          price: "5000",
          num: 1,
          check: false,
          xiao: 0
        }
      ]
    };
  },
  methods: {
    add(v) {
      this.$store.commit("push", v);
    }
  }
};
</script>
<style scoped>
.tb {
  height: 700px;
  margin: 100px auto;
}
</style>
