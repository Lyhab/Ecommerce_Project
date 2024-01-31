<template>
    <div class="tab_container">
        <Tab v-for="tab in store.tabs" :key="tab.id" :tab="tab" :active="tab.id === store.activeTab" @click="handleTabClick(tab.id)"></Tab>
    </div>
</template>

<script>
import { useStore } from '../stores/store'
import Tab from '../components/Tab.vue'

export default {
    components: {
        Tab,
    },
    setup() {
        const store = useStore();

        function handleTabClick(tabId) {
            store.setActiveTab(tabId);
        }

        return { store, handleTabClick };
    },
};
</script>

<style scoped>
.tab_container {
    display: flex;
    align-items: center;
    gap: 30px;
}
</style>
