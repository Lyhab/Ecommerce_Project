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
  }),

  actions: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
});
