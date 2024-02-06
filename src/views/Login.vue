<template>
    
    <div class="container-login">

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
        <div class="container-login-wrap">

            <div class="login-image">
                <img src="../assets/images/12.png" class="image-size">
            </div>

            <div class="wrap-login">
                <div class="login">Login</div>
                <div class="sign">Don’t have an account? Sign up</div>
                <div class="Foruser">
                <div class="useremail">User name or email</div>
                <input type="text" placeholder="Enter Email" name="email" required  class="Button-size">
                <div></div>
                <div></div>
                <div class="password">Password</div>
                <input type="text" placeholder="Enter Password" name="email" required class="Button-size">
            </div>
            <div></div>
            <Button class="Button-signup">Sign Up</Button>
            </div>
        </div>
        <div>..</div>
        <div>..</div>
    </div>
</template>

<script>
import { useStore } from '../stores/store';
export default{
    
    name: "login",
    components:{

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
    .Button-signup{
        font-family: Jura;
        width: 100px;
        height: 35px;
        background-color: rgb(255, 255, 255);
        border-radius: 5px;

    }
    .sign{
        font-size: 21px;
        /* font-family: Jura; */
    }
    .Button-size{
        width: 300px;
        height: 40px;
        border-radius: 5px;
        font-family: Jura;
    }
    .Foruser{
        display: flex;
        flex-direction: column;
        justify-content: left;
        gap: 10px;
    }
    .login{
        font-size: 50px;
        margin-top: 20px;
    }
    .wrap-login{
        width: 400px;
        height: 500px;
        background-color: rgb(255, 255, 255);
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: Jura;
        gap: 20px;
        color: black;
    }
    .image-size{
        width: 450px;
        height: 550px;
    }
    .login-image{
        width: 550px;
        height: 500px;
        display: flex;
        align-items: center;
    }

    .container-login-wrap{
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: black;
        gap: 10px ;
        
    }
    .container-login{
        background-color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: rgb(255, 255, 255);
    }
</style>