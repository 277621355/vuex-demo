<template>
  <div id="app">
    <router-link to="list">list</router-link>
    <router-link to="car">car</router-link>
    <router-view/>
    <p class="da">购物车总数{{this.$store.getters.comnum}}</p>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>


body {
  text-align: center;
}
table {
  border-collapse: collapse;
  width: 700px;
  margin: 0 auto;
  text-align: center;
}
th,
td {
  border: 1px solid #000;
  padding: 10px;
}
.w {
  width: 172px;
  box-sizing: border-box;
}
input[type="text"] {
  width: 30px;
  text-align: center;
}
input[type="checkbox"] {
  width: 25px;
  height: 25px;
}
a {
  text-decoration: none;
  color: #ccc;
}
a:hover {
  color: red;
}
p {
  width: 700px;
  margin: 20px auto;
  text-align: right;
}

p span {
  font-size: 22px;
  color: red;
  font-weight: bold;
}
.ass{
    margin: 100px auto;
}
a{
  font-size: 26px;
  margin-right: 40px;
  color: rgb(212, 64, 64);
}
.da{
  font-size: 26px;
  color:#ff0000

}
</style>
