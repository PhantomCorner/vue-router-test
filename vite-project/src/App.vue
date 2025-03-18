<template>
  <nav>
    <router-link to="/">Home</router-link>|
    <router-link v-for="item in data" :key="item.id" :to="`/eggs/${item.type}`"
      >{{ item.name }}|</router-link
    >
  </nav>
  <router-view></router-view>
</template>
<script>
import data from "./data.json";
export default {
  data() {
    return {
      data,
    };
  },
};
</script>
