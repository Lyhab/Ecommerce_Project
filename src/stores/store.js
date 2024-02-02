import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    tabs: [
      { id: 1, tab_letter: "Home"},
      { id: 2, tab_letter: "Brand"},
      { id: 3, tab_letter: "Promotion"},
      { id: 4, tab_letter: "Contact"},
      { id: 5, tab_letter: "About"},
    ],
    activeTab: null,
    showproducts: [
      {
          // bg: "#3BB77E",
          id:1,
          title:"Headphone for sale! Up to 50% Off",       
          image: new URL("../assets/images/pink.png", import.meta.url),
      },
  ],
    products: [
      {
          
          id:1,      
          image: new URL("../assets/images/2.png", import.meta.url),
          name:"Bold Sound, Unplugged",
          title: "The on-ear design is revamped to provide a comfortably tight fit that keeps in rich audio and seals out distracting noises.",
          discound: "50%",
          price: "999$",
          dsprice: "499$",
          buy:"Buy"
      },
      {
          
          id:2,      
          image: new URL("../assets/images/3.png", import.meta.url),
          name:"Bold Sound, Unplugged",
          title: "The on-ear design is revamped to provide a comfortably tight fit that keeps in rich audio and seals out distracting noises.",
          discound: "50%",
          price: "999$",
          dsprice: "499$",
          buy:"Buy"
      },
      {
          
          id:3,      
          image: new URL("../assets/images/4.png", import.meta.url),
          name:"Bold Sound, Unplugged",
          title: "The on-ear design is revamped to provide a comfortably tight fit that keeps in rich audio and seals out distracting noises.",
          discound: "50%",
          price: "999$",
          dsprice: "499$",
          buy:"Buy"
      },

  ],
  categorys: [
    {
        
        id:1,      
        image: new URL("../assets/images/2.png", import.meta.url),
        name:"Bose QuietComfort Ultra",
        price: "499$",
        dsprice: "199$",
        add: "3",
        buy:"Buy",
    },
    {
        
        id:2,      
        image: new URL("../assets/images/5.png", import.meta.url),
        name:"Bose QuietComfort Ultra",
        price: "499$",
        dsprice: "199$",
        add: "3",
        buy:"Buy",
    },
    {
        
        id:3,      
        image: new URL("../assets/images/6.png", import.meta.url),
        name:"Bose QuietComfort Ultra",
        price: "499$",
        dsprice: "199$",
        add: "3",
        buy:"Buy",
    },
    {
        
        id:4,      
        image: new URL("../assets/images/4.png", import.meta.url),
        name:"Bose QuietComfort Ultra",
        price: "499$",
        dsprice: "199$",
        add: "3",
        buy:"Buy",
    },
    {
        
        id:5,      
        image: new URL("../assets/images/6.png", import.meta.url),
        name:"Bose QuietComfort Ultra",
        price: "499$",
        dsprice: "199$",
        add: "3",
        buy:"Buy",
    },
    {
        
        id:6,      
        image: new URL("../assets/images/5.png", import.meta.url),
        name:"Bose QuietComfort Ultra",
        price: "499$",
        dsprice: "199$",
        add: "3",
        buy:"Buy",
    },



],
  }),

  actions: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
});
