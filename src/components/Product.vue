<template>
    
    <div class="product" :style="{ backgroundColor: bgColor }">
        <div class="container-wrap">
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
        <button class="buy">{{ buy }}</button>
        </div>
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
    .container-wrap{
        height: 250px;
        width: 489px;
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: white;
        border-radius: 10px;
        /* gap: 10px; */

    }
    .price{
        text-decoration-line: line-through;
    }
    .buy{
        width: 70px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #3a92f8;
        border-radius: 10px;
        margin-left: 50px;
        border: 0px;
        font-family: Georgia;
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
        
        
    }
    .name{
        display: flex;
        
        justify-content: center;
        font-size: 20px;
        font-family: "Times New Roman", Times, serif;
        
    }
    .title1{
        width: 150px;
        height: 55px;
        font-size: 12px;
        margin-top: -10px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    }

    .Container-product{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        width: 300px;
        height: 250px;
        color: black;       
    }
    .image1{
        width: 200px;
        height: 200px;
        
    }
    .product{
        
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        background-color: rgb(0, 0, 0);
        gap: 10px;
        margin-top: 5px;

    }
</style>