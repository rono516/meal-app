<template>
    <div class="bg-gray-100 h-full">
        <NavBar />

        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script setup>

import NavBar from '../../src/components/NavBar.vue';



</script>