<script lang="ts">
import { defineComponent, ref, reactive, computed, watch } from "vue";
interface Person {
  name: string;
  age: number;
}
export default defineComponent({
  name: "HelloWorld",
  setup() {
    const count = ref<string | number>(0);
    const user: Person = reactive({
      name: "Abel",
      age: 8,
    });
    const buttonStatus = computed(() => {
      return {
        text: user.age >= 10 ? "大于10" : "小于10",
        disable: user.age < 10,
      };
    });
    const increment = () => {
      if (typeof count.value === "number") count.value++;
      user.age++;
    };
    watch(count, (newValue, oldValue) => {
      console.log(newValue, oldValue);
      document.title = `count:${newValue}`;
    });
    watch(
      () => user.age,
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
      }
    );
    const headline = ref<HTMLElement | null>();
    return {
      count,
      increment,
      user,
      buttonStatus,
      headline,
    };
  },
});
</script>

<template>
  <div>
    <h1 ref="headline">{{ count }}</h1>
    <h1>age:{{ user.age }}</h1>
    <button @click="increment">按钮</button>
    <button :disabled="buttonStatus.disable">
      {{ buttonStatus.text }}
    </button>
  </div>
</template>

<style scoped></style>
