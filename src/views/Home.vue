<template>
    <div class="flex flex-col p-8">
        <div>
            <input type="text" placeholder="Search for meals" class="rounded border-2 w-full border-gray-200" />
        </div>
        <div class="flex gap-2 mt-2 justify-center">
            <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters" :key="letter">
                {{ letter }}
            </router-link>
        </div>

        <pre>{{ ingredients }}</pre>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

import axiosClient from "../../axiosClient.js";

var letters = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(",");
const ingredients = ref([]);

onMounted(async () => {
    const response = await axiosClient.get("list.php?i=list");
    console.log(response.data)
    ingredients.value = response.data
});
</script>
