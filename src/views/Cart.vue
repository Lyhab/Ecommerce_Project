<template>
  <div class="container ">
    <div class="header_container">
      <div class="name_container">
        <div class="firstname">SO</div>
        <div class="lastname">
          <div>Hab</div>
          <div>und</div>
        </div>
      </div>

      <div class="tabheader">
        <TabHeader></TabHeader> <!-- Assuming TabHeader is a valid component -->
      </div>

      <div class="login_container">
        <div class="login">Login</div>
        <div class="user_logo">
          <i class="uil uil-user-circle"></i>
        </div>
      </div>
    </div>

    <div class="search">
      <div class="Back">
        <div>Back</div>
      </div>
      <input
        type="search"
        placeholder="Search.."
        name="gsearch"
        class="Size-Button"
      />
      <div></div>
    </div>

    <div class="bg-[#929CA8] w-[100%] mb-10 mt-10 rounded-md flex justify-between h-[1500px] ">
      <div class="flex flex-col justify-between">
        <div >
          <div ></div>
           
          <!--image display-->
          <!-- Assuming you want to bind product image dynamically -->
        </div>
        <div class='bg-[#3B4856] w-[750px] h-[670px] translate-x-[35px] mb-5 rounded-md'>dis</div>
      </div>
      <div class=" bg-[#C5D0DF] w-[640px] rounded-md m-5 mr-0 flex flex-col justify-between">
        <div>
          <div class="flex justify-between p-10">
            <div
              style="
                color: #000;
                font-family: 'Abhaya Libre SemiBold';
                font-size: 24px;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
              "
            >
              <div class=" mb-2"> Variation </div>
              <span>Total option : 4 color</span>
              <div class=" mt-4">
                1.color(4)
                <div>
                  <div class="flex flex-row justify-between w-[600px] mt-3">
                    <div><img src="../assets/images/5.png" class=" cursor-pointer w-[100px] translate-x-[-10px]" ></div>
                    <div class="translate-y-[40px] translate-x-[-90px] ">Black</div>
                    <div  class="translate-y-[40px] translate-x-[-75px] ">$</div>
                    <div class="flex translate-y-[30px]  translate-x-[-35px] h-[40px]  w-[120px] bg-blue-600 rounded-[50px] ">
                      <button @click="increase" class="w-[30px] h-[30px] mr-2 translate-x-[5px] translate-y-[5px]"><img src="../assets/icons/increase.png" alt=""></button>
                      <div class="translate-x-[15px] translate-y-[5px] text-white">{{ value }}</div> 
                      <button @click="decrease" class="w-[30px] h-[30px] ml-2 translate-x-[28px] translate-y-[5px]"><img src="../assets/icons/decrease.png" alt=""></button>
                     </div>
                  </div>
                  <div class="flex flex-row justify-between w-[600px] mt-3">
                    <div><img src="../assets/images/White_Golden_Beat.webp" class=" cursor-pointer w-[80px]" ></div>
                    <div class="translate-y-[40px]  translate-x-[-70px]">White</div>
                    <div  class="translate-y-[40px]  translate-x-[-70px]">$</div>
                    <div class="flex translate-y-[30px] translate-x-[-35px] h-[40px]  w-[120px] bg-blue-600 rounded-[50px] ">
                      <button @click="increase1" class="w-[30px] h-[30px] mr-2 translate-x-[5px] translate-y-[5px]"><img src="../assets/icons/increase.png" alt=""></button>
                      <div class="translate-x-[15px] translate-y-[5px] text-white">{{ value1 }}</div> 
                      <button @click="decrease1" class="w-[30px] h-[30px] ml-2 translate-x-[28px] translate-y-[5px]"><img src="../assets/icons/decrease.png" alt=""></button>
                     </div>
                  </div>
                  <div class="flex flex-row justify-between w-[600px] mt-3">
                    <div><img src="../assets/images/8.png" class=" cursor-pointer w-[80px]" ></div>
                    <div class="translate-y-[40px] translate-x-[-70px]">Blue</div>
                    <div  class="translate-y-[40px]  translate-x-[-70px]">$</div>
                    <div class="flex translate-y-[30px] translate-x-[-35px] h-[40px]  w-[120px] bg-blue-600 rounded-[50px] ">
                      <button @click="increase2" class="w-[30px] h-[30px] mr-2 translate-x-[5px] translate-y-[5px]"><img src="../assets/icons/increase.png" alt=""></button>
                      <div class="translate-x-[15px] translate-y-[5px] text-white">{{ value2 }}</div> 
                      <button @click="decrease2" class="w-[30px] h-[30px] ml-2 translate-x-[28px] translate-y-[5px]"><img src="../assets/icons/decrease.png" alt=""></button>
                     </div>
                  </div>
                  <div class="flex flex-row justify-between w-[600px] mt-3">
                    <div><img src="../assets/images/7.png" class=" cursor-pointer w-[80px]" ></div>
                    <div class="translate-y-[40px]  translate-x-[-70px]">Red</div>
                    <div  class="translate-y-[40px]  translate-x-[-70px]">$</div>
                    <div class="flex translate-y-[30px] translate-x-[-35px] h-[40px]  w-[120px] bg-blue-600 rounded-[50px] ">
                      <button @click="increase3" class="w-[30px] h-[30px] mr-2 translate-x-[5px] translate-y-[5px]"><img src="../assets/icons/increase.png" alt=""></button>
                      <div class="translate-x-[15px] translate-y-[5px] text-white">{{ value3 }}</div> 
                      <button @click="decrease3" class="w-[30px] h-[30px] ml-2 translate-x-[28px] translate-y-[5px]"><img src="../assets/icons/decrease.png" alt=""></button>
                     </div>
                  </div>
                 <div> 
                  <startOrder/>
                 </div>
                </div>
              </div>
            </div>
            <div class=" cursor-pointer w-[40px]">
              <img src="../assets/icons/cart.png" alt="" />
              <!-- Fixing the img tag -->
            </div>
          </div>
        </div>
        <!-- purchase detail-->
        <div class="p-10 pt-0 mb-[150px]">
          <div class=" text-black text-3xl font-bold font-['Ramaraja'] p-3 pl-0">Purchase details </div>
          <div class=" text-black text-3xl font-bold font-['Ramaraja'] p-3 pl-0">Protection with trade Assurance </div>
          <div>
            <div class="flex p-3 pl-0"><img src="../assets/icons/ship.png" class="w-[30px] cursor-pointer"><span class="ml-2 text-black text-3xl font-bold font-['Ramaraja']">Shipping</span></div>
            
            <div class="pl-[40px] text-black text-[20px] font-normal font-['Ramaraja']">Contact supplier to negotiate shipping details<br/>Enjoy On-time Dispatch Guarantee</div>
          </div>
          <div>
            <div class="flex p-3 pl-0" >
              <img src="../assets/icons/pay.png" class=" cursor-pointer w-[30px]">
              <span class="ml-2 text-black text-3xl font-bold font-['Ramaraja']">Payments</span>
            </div>
            <div class="flex p-1 pl-0"> 
              <img src="../assets/icons/visa.png" class="pl-4 cursor-pointer w-[70px]">
              <img src="../assets/icons/pp.png" class="pl-4  cursor-pointer w-[70px]">
              <img src="../assets/icons/G_pay.png" class=" ml-3 cursor-pointer w-[70px]">
              <img src="../assets/icons/A_pay.png" class="pl-2  cursor-pointer w-[70px]">
            </div>
            <p class="pl-[40px] text-black text-[20px] font-normal font-['Ramaraja'] ">Enjoy encrypted and secure payments view details</p>
          </div>
          <div>
            <div class="flex p-3 pl-0">
              <img src="../assets/icons/back.png" class="w-[30px] cursor-pointer">

              
            <span class="text-black text-3xl font-bold font-['Ramaraja'] ml-2">Returns & refunds</span>
            </div>
            <p class="pl-[40px] text-black text-[20px] font-normal font-['Ramaraja']">Eligible for refunds within 30 days of receiving products. Views details</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <FooterPage/>
    </div>
  </div>
</template>

<script>
import FooterPage from '../components/FooterPage.vue';
import startOrder from '../components/clickbuy.vue';
import TabHeader from "../components/TabHeader.vue";
import { useStore } from '../stores/store';
import { ref, computed } from "vue";

export default {
  data() {
    return {
      value: 0,
      value1: 0,
      value2: 0,
      value3: 0

    };
  },
  methods: {
    increase() {
      this.value++;
    },
    decrease() {
      if (this.value > 0) {
        this.value1--;
      }
    },increase1() {
      this.value1++;
    },
    decrease1() {
      if (this.value > 0) {
        this.value2--;
      }
    },increase2() {
      this.value2++;
    },
    decrease2() {
      if (this.value > 0) {
        this.value2--;
      }
    },
    increase3() {
      this.value3++;
    },
    decrease3() {
      if (this.value > 0) {
        this.value3--;
      }
    }
  },
  components: {
    FooterPage,
    startOrder,
    TabHeader,
  },
  setup() {
    const store = useStore;
    return {
      store,

    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap");
@import "https://unicons.iconscout.com/release/v4.0.0/css/line.css";

.Back {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 30px;
  color: black;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
}

.Size-Button {
  width: 585px;
  height: 30px;
  border-radius: 5px;
}

.search {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.name_container {
  display: flex;
  font-family: Sixtyfour;
  cursor: none;
}

.user_logo {
  font-size: 30px;
}

.firstname {
  font-size: 60px;
}

.lastname {
  font-size: 26px;
  display: flex;
  flex-direction: column;
  margin-top: 1px;
}

.login_container {
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
}

.login {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
}

.header_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container {
  background-color: black;
  color: white;
  padding: 30px;
  width: 100%;
  height: 100%;
}
</style>
