<template>
    <div class="Showproduct" :style="{ backgroundColor: bgColor }">
        <div></div>
        <div></div>
        <img :src="image" class="image"/>
        <p class="title">{{ title }}</p>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>
<script>

    export default{
        name: "Showproduct",
        props:["title","image","id"],
        components: {
        }
    }
</script>
<style>
    .title{
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        width: 480px;
        height: 200px;
        font-family: "Times New Roman", Times, serif;
        font-size: 50px;
        font-family: Jura;
    }
    .Showproduct{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        height: 280px;
        margin-top: 20px;
    }
    .image{
        width: 270px;
        height: 270px;
    }
</style>