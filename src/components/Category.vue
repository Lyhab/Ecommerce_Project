<template>
    <div class="category" :style="{ backgroundColor: bgColor }">
        <div class="container-wrap-category">
        <img :src="image" class="image1"/>

        <div class="Container-product">
        <p class="name1">{{ name }}</p>
        <p class="discound">{{ discound }}</p>

        <div class="Discound1">
        <p class="dsprice1">{{ dsprice }}</p>
        <p class="price1">{{ price }}</p>
        
        </div>
        <div class="Box-buy1">
            
        <p class="add">{{ add }}</p>
        <p class="buy">{{ buy }}</p>
        </div>
        </div>
        </div>
    </div>   
</template>
<script>
    export default{
        name: "Category",
        props: ["id","image","name","dsprice","price","add","buy"],
        components: {
        }
    }
</script>
<style>
    .add{
        width: 70px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #006CEA;
        border-radius: 10px;
        margin-left: 5px;
        
    }
    .Box-buy1{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 230px;
        margin-top: -30px;
    }
    .price1{
        text-decoration-line: line-through;
    }
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
    .name1{
        display: flex;
        justify-content: left;
        margin-left: 5px;
        font-size: 20px;
        font-family: Georgia;
        
    }
    .dsprice1{
        font-family: Georgia;
        font-size: 30px;
        margin-top: -1px;
        
    }
    .Discound1{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: -30px;
        margin-left: 5px;
 
    }
    .container-wrap-category{
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 340px;
    background-color: aliceblue;
    border-radius: 10px;

    }
    .category{
        
        display: flex;
        flex-direction: row;
        background-color: rgb(0, 0, 0);
        gap: 10px;

    }
</style>