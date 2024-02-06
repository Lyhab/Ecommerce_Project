<template>
        <div class="Showbrand" :style="{ backgroundColor: bgColor }">
        <div></div>
        <img :src="image" class="image-1"/>
        <p class="title-1">{{ title }}</p>
        <img :src="image1" class="image-2"/>
        <div></div>
        
    </div>
</template>
<script>
    export default{
        props:["title","image","id","image1"],
        components: {
        }
    }
</script>
<style>
    .title-1{
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        width: 410px;
        height: 200px;
        font-family:jura;
        font-size: 100px;
    }
    .Showbrand{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        height: 280px;
        margin-top: 20px;
    }
    .image-1{
        width: 250px;
        height: 330px;
    }
    .image-2{
        width: 250px;
        height: 260px;
    }
</style>