<template>
    <div class="product" :style="{ backgroundColor: bgColor }">

        <img :src="image" class="image1"/>

        <div class="Container-product">
        <p class="name">{{ name }}</p>
        <div class="box-title">
        <p class="title1">{{ title }}</p>
        </div>
        <p class="discound">{{ discound }}</p>

        <div class="Discound">
        <p class="dsprice">{{ dsprice }}</p>
        <p class="price">{{ price }}</p>
        </div>
        <div class="Box-buy">
        <p class="buy">{{ buy }}</p>
        </div>
        </div>

    </div>
</template>
<script>
    export default{
        name: "Product",
        props:["id", "image","name","title","discound","dsprice","price","buy"],
        components: {

        }
    }
</script>
<style>
    /* .Box-buy{
        display: flex;
        justify-content: center;
    } */
    .buy{
        width: 70px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #006CEA;
        border-radius: 10px;
        margin-left: 50px;
    }
    .dsprice{
        font-family: Georgia;
        font-size: 30px;
        margin-top: -1px;
    }
    .Discound{
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        width: 200px;
        height: 50px;
        /* background-color: aqua; */
        gap: 10px;
        margin-top: -40px;
    }
    .box-title{
        display: flex;
        justify-content: center;
    }
    .discound{
        font-family: sans-serif;
        display: flex;
        justify-content: end;
        font-family: Georgia;
        color: red;
        margin-top: -10px;
        font-size: 30px;
        
        /* position: absolute; */
    }
    .name{
        display: flex;
        /* align-items: center; */
        justify-content: center;
        font-size: 20px;
        font-family: "Times New Roman", Times, serif;
        
    }
    .title1{
        width: 150px;
        height: 55px;
        font-size: 12px;
        margin-top: -10px;

    }

    .Container-product{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        width: 300px;
        height: 250px;
        /* background-color: blueviolet; */
        color: black;
        
        
        
        
    }
    .image1{
        width: 200px;
        height: 200px;
        /* background-color: black; */
    }
    .product{
        height: 250px;
        width: 450px;
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: rgb(241, 230, 230);
        border-radius: 10px;
    }
</style>