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

</div>
</template>
<script>
import TabHeader from '../components/TabHeader.vue';

export default{
    name: "Promotion",
    components:{
    TabHeader
    }
}
</script>
<style>
.name_container{
    display: flex;
    font-family: Sixtyfour;
    cursor: none;
}
.user_logo{
    font-size: 30px;
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