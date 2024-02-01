<template>
    
    <div class="Container-about">
            
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

            <div class="container-box">
                <div></div>
            <div class="container-row1">
                <div><img src="../assets/images/1.jpg" class="image"></div>
                <div><img src="../assets/images/1.jpg" class="image"></div>
               
            </div>
            <div class="container-row2">
            
                <div class="wrap-text">
                    <div>Headphones.com started with two brothers (mii jao Thy and Mii K'Hab) with a shared love for headphones and the desire to share this passion with others. They strongly believe that great sound is one of life's purest pleasures and that quality audio devices by extension lead to a better life.
                            Our 5 business principles:
                    </div>
                    <div>
                        1. Curated SelectionWe seek out and source only the world's best audio equipment by evaluating products based on performance, 
                        quality and long-term user satisfaction. Our goal is to fulfill all your audio needs while ensuring that you enjoy your purchase for years to come.
                    </div>
                    <div>
                        2. Exceptional Customer ServiceOur team of agents consist of those who are always available to help support as well as product knowledge experts. Our aim is to provide service so good that you can't help but tell people about it.
                    </div>
                    <div>
                        3. 365-Day ReturnsRead more on our 365-day return policy. You can also check out this article CNET wrote about our return policy.
                    </div>
                    <div>
                        4. CommunityWe want to engage with the audio community we love. Which meant building and supporting The HEADPHONE Community forum and publishing reviews and educational content that people can trust. We are adamant about providing honest information - even if it's unfavorable feedback about products we sell.
                    </div>
                    <div>
                        5. Giving BackMost of us take our hearing for granted and we recognize that there are many children who have hearing disabilities with families that can't afford to get them the help they need. World Wide Hearing is a fantastic organization that screens for hearing loss and provides hearing aids to children around the world. A portion of every Headphones.com sale goes toward helping a child hear.
                    </div>
                    <div>
                        If you need to get in touch, contact us, we're always happy to help.
                            Also, make sure to join us on The HEADPHONE Community forum and say hi!
                    </div>

                </div>
            </div>
            </div>
        </div>
</template>

<script>
    import TabHeader from '../components/TabHeader.vue';


    export default{
        name: "AboutPage",
        components:{
    TabHeader
}
    }
</script>

<style scoped>
    .firstname{
    font-size: 80px;
}
.lastname{
    font-size: 36px;
    display: flex;
    flex-direction: column;
    margin-top: 1px;
}
    .login{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    }

    .user_logo{
    font-size: 30px;
    }
    .login_container{
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
}
    .name_container{
    display: flex;
    font-family: Sixtyfour;
    cursor: none;
}
    
    .header_container{
    display: flex;
    gap: 200px;
    justify-content: space-between;
    align-items: center;
    color: rgb(255, 255, 255);
    margin-top: 10px;
}
    .image{
        width: 250px;
        height: 250px;
        border-radius: 100%;
    }
    .container-box{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        justify-content: center;
        width: 99%;
        height: 700px;
        background-color: rgb(238, 227, 227);
        margin-left: 5px;
        margin-top: 10px;
    }
    .wrap-text{
        color: rgb(0, 0, 0);
        width: 600px;
        height: 600px;
        /* background-color: aqua; */
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        gap: 10px;
        
    }
    .container-row2{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 600px;
        height: 650px;
        /* background-color: rgb(255, 0, 0); */
        /* margin-top: 100px; */
    }
    .container-row1{
        display: flex;
        flex-direction: column;
        /* margin-top: 100px; */
        /* justify-content: center; */
        align-items: center;
        width: 600px;
        height: 650px;
        /* background-color: blueviolet; */
    }
    .Container-about{
        
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        align-items: center;
        width: 100%;
        height: 800px;
        background-color: rgb(0, 0, 0);
        
    }


</style>