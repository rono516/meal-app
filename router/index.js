import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import DefaultLayout from '../src/components/DefaultLayout.vue'
import Home from '../src/views/Home.vue'
import MealList from '../src/views/MealsByName.vue'
import MealsByLetter from '../src/views/MealsByLetter.vue'
import MealsByIngredient from '../src/views/MealsByIngredients.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealList
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter
            },

            {
                path: '/by-ingredient/:ingredient?',
                name: 'byIngredient',
                component: MealsByIngredient
            }
        ]
    },


];

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;