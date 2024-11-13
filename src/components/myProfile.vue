<template>
  <div class="profile-components">
    <h1>Name:{{ name }}</h1>
    <h1>Age:{{ age }}</h1>
    <h1>double:{{ doubleAge }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
interface User {
  name: string;
  age: number;
}
export default defineComponent({
  name: "myProfile",
  props: {
    name: {
      type: String,
    },
    age: {
      type: Number,
      required: true,
    },
    user: {
      type: Object as PropType<User>,
    },
  },
  setup(props) {
    console.log(props.user?.age)
    const doubleAge = computed(() => props.age * 2);

    return {
      doubleAge,
    };
  },
});
</script>

<style scoped></style>
