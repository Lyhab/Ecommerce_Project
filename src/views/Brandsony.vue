<template>
    <div class="brand-wrap">
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
                <div class="login">Logout</div>
                <div class="user_logo">
            <i class="uil uil-user-circle"></i>
        </div>
    </div>
</div>
<div class="search">       
        <!-- <div class="Back">
            <button class="button-Back">Back</button>
        </div> -->
        <input type="search" placeholder="Search.." name="gsearch" class="Size-Button">
        <div></div>
    </div>
    <div>
        <Showbrand v-for="showbrand in store.showbrands" 
        :id="showbrand.id"
        :image="showbrand.image" 
        :image1="showbrand.image1" 
        :title="showbrand.title"/>
    </div>
    <div class="Categorys">
        <Category1 v-for="category1 in store.category1s" 
        :id="category1.id"
        :image="category1.image" 
        :name="category1.name" 
        :title="category1.title"
        :discound="category1.discound"
        :dsprice="category1.dsprice"
        :price="category1.price"
        :buy="category1.buy"/>
    </div>
    

</div>
</template>
<script>

import Category1 from '../components/Category1.vue';
import Showbrand from '../components/Showbrand.vue';
import TabHeader from '../components/TabHeader.vue';
import { useStore } from '../stores/store';
export default{
    name: "Brandsony",
    components: {
    TabHeader,
    Showbrand,
    Category1
},
setup() {
        const store = useStore();

        // Set the initial active tab to "Home"
        store.setActiveTab(2);

        return {
            store,
        };
    },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap');
@import "https://unicons.iconscout.com/release/v4.0.0/css/line.css";

.Categorys{
    display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        margin-top: 10px;
        background-color: rgb(0, 0, 0);
        gap: 10px;
        
}
.Size-Button{
    width:644px;
    height: 30px;
    border-radius: 5px;
    margin-left: 55px;
}


.search{
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-left: 47px;
}
.brand-wrap{
    background-color: black;
    color: white;
    padding: 15px;
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
    color: aliceblue;
}
</style>