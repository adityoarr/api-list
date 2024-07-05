<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: 'API List',
        items: [
            {
                label: 'Islam',
                icon: 'pi pi-fw pi-bookmark',
                to: '/islam'
            },
            {
                label: 'Indonesia',
                icon: 'pi pi-fw pi-bookmark',
                to: '/indonesia'
            },
            {
                label: 'Dunia',
                icon: 'pi pi-fw pi-bookmark',
                to: '/dunia'
            }
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
