<template>

<div class="container">

    <div class="header_container">
        <div class="tabheader">
            <TabHeader></TabHeader>
        </div>
        <div class="name_container">
            <div class="firstname">SO</div>
            <div class="lastname">
                <div>Hab</div>
                <div>und</div>
            </div>
        </div>
        <div class="login_container">
            <div class="login">Login</div>
            <div class="user_logo">
                <i class="uil uil-user-circle"></i>
            </div>
        </div>
    </div>

    <div class="body_container">
        <div class="left">
            <div class="top_left">NEW ERA OF SOUND</div>
            <div class="bottom_left">Immerse yourself in superior sound with these stylish headphones. Precision-engineered for balanced audio, they offer comfort with plush ear cups. Advanced noise-canceling tech ensures an immersive experience, perfect for on-the-go. With intuitive controls and a foldable design, they're your ideal audio companion. Elevate your music in style.</div>
        </div>
        <div class="right">
            <img src="../assets/images/White_Golden_Beat.webp" alt="">
        </div>
    </div>

    <div class="footer_container">
        <div class="privacy">@2024 SoHab Sound Entertainment</div>
        <div class="social_media">
            <i class="uil uil-facebook-f"></i>
            <i class="uil uil-instagram"></i>
            <i class="uil uil-telegram-alt"></i>
        </div>
    </div>
</div>

</template>

<script>
import { useStore } from '../stores/store';
import TabHeader from '../components/TabHeader.vue'

export default{
    components: {
        TabHeader,
    },
    setup() {
        const store = useStore();

        store.setActiveTab(5);

        return {
            store,
        };
    },
};
</script>

<style scoped>
@import "https://unicons.iconscout.com/release/v4.0.8/css/line.css";
@import url('https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&family=Sixtyfour&display=swap');


.container{
    background-color: black;
    color: white;
    padding: 30px;
}

.header_container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.name_container{
    display: flex;
    font-family: Sixtyfour;
    cursor: none;
}

.firstname{
    font-size: 80px;
}

.lastname{
    font-size: 36px;
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

.user_logo{
    font-size: 30px;
}

.body_container{
    display: flex;
    gap: 100px;
}

.left{
    width: 600px;
    display: flex;
    flex-direction: column;
    padding-top: 150px;
    padding-bottom: 150px;
    padding-left: 100px;
}

.top_left{
    font-size: 100px;
    font-weight: bold;
}

.bottom_left{
    font-size: 20px;
    font-weight: 100;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.right{
    max-width: 475px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    width: 100%;
    height: auto;
    display: block;
}

.footer_container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.privacy{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.social_media{
    display: flex;
    gap: 25px;
    font-size: 40px;
}

i{
    cursor: pointer;
}
</style>