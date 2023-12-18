<template>
    <header class="bg-white shadow h-16 flex justify-between items-stretch">

        <router-link class="inline-flex items-center h-full px-5" :to="{ name: 'home' }">Home</router-link>
        <div class="flex items-center gap-1">
            <router-link tag="span" class="hover:bg-purple-100 h-full inline-flex items-center transition-colors px-2 "
                :to="{ name: 'byName' }">Search
                Meals</router-link>
            <router-link class="hover:bg-purple-100 h-full inline-flex items-center transition-colors px-2 "
                :to="{ name: 'byLetter' }">Meals by
                Letter</router-link>
            <router-link class="hover:bg-purple-100 h-full inline-flex items-center transition-colors px-2 "
                :to="{ name: 'byIngredient' }">Meals by
                Ingredients</router-link>
        </div>

    </header>
</template>