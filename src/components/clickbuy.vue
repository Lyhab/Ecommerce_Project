<template>
    <div>
      <button class="flex" @click="handleLogout">
        <div class="cursor-pointer w-[250px] h-[70px] bg-fuchsia-600 rounded-[50px] mt-[50px] text-white text-3xl font-normal font-['Ramaraja'] flex justify-center items-center">Start order</div>
      </button>
      <div v-if="isConfirmOpen" class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
        <div class="modal-background"></div> <!-- Add background overlay -->
        <div class="bg-blue-300 w-[400px] h-[250px] p-4 pt-2 grid gap-3 rounded shadow-md relative z-10">
          <p class="font-['Ramaraja'] text-[22px] text-center text-slate-600">Thank for shopping</p>
          <div class="w-[390px] bg-gray-300 h-[0.5px] translate-x-[-10px]"></div>
          <div class="text-slate-700 text-[40px] font-normal font-['Ramaraja'] text-center">Have a nice day</div>
          <div class="flex justify-start">
            <button @click="handleCancelLogout" class="bg-slate-100 hover:bg-gray-200 text-black mr-3 p-3 pt-1 pb-1 rounded">Done</button>
            <button @click="handleConfirmLogout" class="bg-slate-100 hover:bg-red-500 cursor-pointer text-red-500 hover:text-slate-100 rounded p-3 pt-1 pb-1 mr-2">Yes I'm sure</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isConfirmOpen: false
      };
    },
    methods: {
      handleLogout() {
        this.isConfirmOpen = true;
      },
      handleConfirmLogout() {
        this.isConfirmOpen = false;
      },
      handleCancelLogout() {
        this.isConfirmOpen = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    backdrop-filter: blur(5px); /* Apply blur effect */
    z-index: 9; /* Ensure the background overlay is behind the modal */
  }
  /* Add your other styles here */
  </style>
  