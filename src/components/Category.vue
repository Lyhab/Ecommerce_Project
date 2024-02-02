<template>
    <div class="category" :style="{ backgroundColor: bgColor }">

            <div class="container-wrap-category">
            <img :src="image" class="image2"/>

            <div class="Container-product1">
                <p class="name1">{{ name }}</p>
                <p class="discound">{{ discound }}</p>

                <div class="Discound1">
                    <p class="dsprice1">{{ dsprice }}</p>
                    <p class="price1">{{ price }}</p>
        
                </div>
                    <div class="Box-buy1">
                        <p class="add">{{ add }}</p>
                        <p class="buy1">{{ buy }}</p>
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
    .image2{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 180px;
        height: 180px;
    }
    .add{
        width: 60px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #006CEA;
        border-radius: 10px;
        margin-left: 2px;
        
    }
    .Box-buy1{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 220px;
        margin-top: -30px;
    }
    .price1{
        text-decoration-line: line-through;
    }
    .buy1{
        width: 60px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #006CEA;
        border-radius: 10px;
        margin-left: 30px;
    }
    .name1{
        display: flex;
        justify-content: left;
        margin-left: 5px;
        font-size: 15px;
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
    width: 230px;
    height: 310px;
    background-color: aliceblue;
    border-radius: 10px;

    }
    .Container-product1{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        width: 300px;
        height: 250px;
        color: black;       
    }
    .category{
        margin-top: 20px;
        background-color: rgb(0, 0, 0);

    }
</style>