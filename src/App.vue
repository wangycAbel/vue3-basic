<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import MyProfile from "./components/myProfile.vue";
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import useMousePosition from "./hooks/useMousePosition";
import useURLLoader from "./hooks/useURLLoader";
export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    MyProfile,
  },
  setup() {
    const {loading,result} = useURLLoader("https://dog.ceo/api/breeds/image/random");

    const { x, y } = useMousePosition();
    return {
      x,
      y,
      loading,
      result
    };
  },
});
</script>

<template>
  <div>
    <h1>x:{{ x }}y:{{ y }}</h1>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <MyProfile name="Abel" :age="18" />
  <h1 v-if="loading">loading</h1>
  <img v-else :src="result"></img>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
