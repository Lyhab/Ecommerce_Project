<template>
    <div class="tab" :class="{ active: active }">{{ tab.tab_letter }}</div>
</template>

<script>
export default {
    props: ["tab", "active"],
};
</script>

<style scoped>
.tab {
    font-family: Jura;
    font-size: 30px;
    font-weight: 500;
    cursor: pointer;
}

.active {
    font-weight: bold;
    text-decoration: underline;
}
</style>
