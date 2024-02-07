<template>
    
    <div class="container-register">

        <div class="container-register-wrap">

            <div class="register-image">
                <img src="../assets/images/12.png" class="image-size">
            </div>

            <div class="wrap-register">
                <div class="register">Register</div>
                <div class="sign">Create your account</div>
                <div class="Foruser">
                <div class="useremail">User name</div>
                <input type="text" placeholder="User name" name="email" required  class="Button-size">
                <div></div>
                <div></div>
                <div class="password">Email</div>
                <input type="text" placeholder="Email@gmail" name="email" required class="Button-size">
                <div></div>
                <div></div>
                <div class="password">Password</div>
                <input type="text" placeholder="Password" name="email" required class="Button-size">
            </div>

            <Button class="Button-signup">Sign Up</Button>
            </div>
        </div>

    </div>
</template>

<script>

export default{
    
    name: "Register",
    components:{

    },

}
</script>
<style>

    .Button-signup{
        font-family: Jura;
        width: 100px;
        height: 35px;
        background-color: rgb(255, 255, 255);
        border-radius: 5px;
        margin-top: 5px;

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
    .register{
        font-size: 50px;
        margin-top: 0px;
    }
    .wrap-register{
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
    .register-image{
        width: 550px;
        height: 500px;
        display: flex;
        align-items: center;
    }

    .container-register-wrap{
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: black;
        gap: 10px ;
        margin-top: 10px;
        
        
    }
    .container-register{
        background-color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 730px;
    }
</style>