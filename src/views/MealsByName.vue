<template>
  <div class="flex flex-col p-8">
    <input
      type="text"
      placeholder="Search for meals"
      v-model="keyword"
      @change="searchMeals"
      class="rounded border-2 w-full border-gray-200"
    />
  </div>

  <div>
    <pre>{{ meals }}</pre>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import store from "../../store";
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}
</script>
