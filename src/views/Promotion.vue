<template>
    <div class="container">

        <div class="header_container">
            <div class="name_container">
                <div class="firstname">SO</div>
                    <div class="lastname">
                        <div>Hab</div>
                        <div>und</div>
                    </div>
                </div>

            <div class="tabheader">
                <TabHeader></TabHeader>
                
            </div>

            <div class="login_container">
                <div class="login">Login</div>
                <div class="user_logo">
            <i class="uil uil-user-circle"></i>
        </div>
    </div>
</div>

    <div class="search">
        
        <input type="search" placeholder="Search.." name="gsearch" class="Size-Button">
    </div>
    <div class="showproduct">
        <Showproduct v-for="showproduct in store.showproducts" 
        :id="showproduct.id"
        :image="showproduct.image" 
        :title="showproduct.title"
         />
      </div>
    <div class="product">
        <Product v-for="product in store.products" 
        :id="product.id"
        :image="product.image" 
        :name="product.name" 
        :title="product.title"
        :discound="product.discound"
        :dsprice="product.dsprice"
        :price="product.price"
        :buy="product.buy"
         />
      </div>
      <div class="Limited">Limited Promotion</div>
      <div class="Category">
        <Category v-for="category in store.categorys" 
        :id="category.id"
        :image="category.image" 
        :name="category.name" 
        :discound="category.discound"
        :dsprice="category.dsprice"
        :price="category.price"
        :add="category.add"
        :buy="category.buy"
         />
      </div>
</div>
</template>
<script>
import Category from '../components/Category.vue';
import Product from '../components/Product.vue';
import Showproduct from '../components/Showproduct.vue';
import TabHeader from '../components/TabHeader.vue';
import { useStore } from '../stores/store';
export default{
    name: "Promotion",
    components:{
    TabHeader,
    Showproduct,
    Product,
    Category
},
setup() {
        const store = useStore();

        // Set the initial active tab to "Home"
        store.setActiveTab(1);

        return {
            store,
        };
    },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap');
@import "https://unicons.iconscout.com/release/v4.0.0/css/line.css";
.Limited{
    display: flex;
    justify-content: center;
    font-size: 30px;
    font-style: oblique;
    margin-top: 10px;
}
.Size-Button{
    width: 530px;
    height: 30px;
    border-radius: 5px;
}
.search{
    display: flex;
    justify-content: center;
}
.name_container{
    display: flex;
    font-family: Sixtyfour;
    cursor: none;
}
.user_logo{
    font-size: 30px;
}
.firstname{
    font-size: 60px;
}

.lastname{
    font-size: 26px;
    display: flex;
    flex-direction: column;
    margin-top: 1px;
}

.login_container{
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
}

.login{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
}
.header_container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.container{
    background-color: black;
    color: white;
    padding: 30px;
}
</style>