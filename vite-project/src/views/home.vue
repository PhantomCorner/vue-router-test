<template>
  <div>
    <h1>Home page</h1>

    <p class="test">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
      repudiandae modi porro adipisci placeat et delectus! Temporibus impedit
      totam inventore in excepturi aperiam quibusdam vero! Placeat explicabo
      pariatur sunt eaque?
    </p>
  </div>
</template>
<style scoped>
.test:hover {
  color: red;
}
.test:hover::after {
  content: "new content";
  margin-left: 2em;
  color: green;
}
.test:hover::before {
  content: "before content";
  margin-right: 2em;
  color: blue;
}
.test::first-letter {
  color: yellow;
  font-size: 3rem;
}
.test::selection {
  color: cadetblue;
}
</style>
