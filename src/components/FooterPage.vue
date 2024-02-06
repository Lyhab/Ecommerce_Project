<template>
    <div class="footer_container">
        <div class="top">
            <div class="top_left_footer">
                <ul>
                    <li class="support">SUPPORT</li>
                    <li>365-day returns</li>
                    <li>Track your Order</li>
                    <li>Shipping policy</li>
                    <li>Refund policy</li>
                    <li>FAQ</li>
                    <li>Contact us</li>
                </ul>
            </div>

            <div class="top_mid_footer">
                <ul>
                    <li class="our_company">OUR COMPANY</li>
                    <li>About us</li>
                    <li>The headphone community</li>
                    <li>Buy headphone, Help a child hear </li>
                    <li>Term of service</li>
                    <li>Privacy policy</li>
                    <li>Accessibility Statement</li>
                    <li>Buy Office Headset</li>
                </ul>
            </div>

            <div class="top_right_footer">
                <ul>
                    <li class="top_brand">TOP BRANDS</li>
                    <li>Beats</li>
                    <li>Sony</li>
                    <li>69 Audio</li>
                    <li>Hifiman</li>
                    <li>JBL</li>
                    <li>Apple</li>
                </ul>
            </div>
        </div>

        <div class="bot">
            <img src="../assets/images/VISA.png" alt="">
            <img src="../assets/images/GooglePay.png" alt="">
            <img src="../assets/images/PayPal.png" alt="">
            <img src="../assets/images/ApplePay.png" alt="">
        </div>
    </div>
</template>

<script>

</script>

<style scoped>

.footer_container{
    background-color: white;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
}

.top{
    display: flex;
    gap: 100px;
}

.bot{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
}

img{
    max-width: 69px;
    cursor: pointer;
}

li{
    color: black;
    list-style-type: none;
    font-size: 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.support, .our_company, .top_brand{
    font-size: 30px;
    font-weight: bold;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>