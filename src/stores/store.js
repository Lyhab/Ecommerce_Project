import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    
    groups: ["Milks & Diaries", "Coffees & Teas", "Pet Foods", "Meats", "Vegetables", "Fruits"],

    productsources: [
        { id: 1, vendor: "NestMart", sku: "FWM15VKT"},
        { id: 2, vendor: "GreenGoods", sku: "BPL72XZQ" },
        { id: 3, vendor: "TechBuddy", sku: "LJN29HYP" },
        { id: 4, vendor: "GizmoWorld", sku: "RKF48DLM" },
        { id: 5, vendor: "FashionHub", sku: "PQW63BHN" },
        { id: 6, vendor: "HomeBliss", sku: "KIO87XMC" },
        { id: 7, vendor: "SmartStuff", sku: "YTC41GLO" },
        { id: 8, vendor: "KitchenKing", sku: "WZP52RUV" },
        { id: 9, vendor: "HealthHaven", sku: "MSX35PLQ" },
        { id: 10, vendor: "ElectroGear", sku: "VFD94KJA" },
    ],

  }),
});
