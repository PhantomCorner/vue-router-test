<template>
  <div>
    This is Path 1

    <div class="flex-box">
      <div class="content"></div>
      <div class="content"></div>
      <div class="content"></div>
      <div class="content"></div>
    </div>
  </div>
</template>
<style scoped>
.flex-box {
  width: 500px;
  height: 300px;
  display: flex;
}
.content:nth-child(even) {
  flex: 3;
  background-color: red;
}
.content:nth-child(odd) {
  flex: 2;
  width: 50px;

  background-color: green;
}
</style>
