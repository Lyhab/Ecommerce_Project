<template>
  <div class='bg-[#C5D0DF] w-[750px] h-[780px] translate-x-[35px] mb-5 rounded-md'>
          <div class="flex">
            <div class="more-wrapper">
      <div class="more-navbar">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ 'more-button rounded-md p-2 m-2': true, 'more-active': activeTab === index, 'bg-blue-300 rounded-md p-2 m-2 ': activeTab === index }"
          @click="activeTab = index"
        >
          <button class="py-2 px-4 text-sm text-black  border-2 border-slate-400 text-[24px] font-bold rounded focus:outline-none" :class="{ 'bg-blue-400 rounded-md text-black  text-[24px] font-bold': activeTab === index }">
            {{ tab.title }}
          </button>
        </div>
      </div>
      <div class="more-content text-black text-[24px] font-normal font-['Ramaraja'] " v-show="activeTab === selectedIndex">
        {{ tabs[activeTab].content }}
      </div>
    </div>
          </div>
        </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        { title: 'Description', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nisi laudantium ipsam odit voluptate voluptas dolores non labore rerum ab dolore suscipit maxime adipisci, excepturi ducimus ratione magni explicabo facilis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nisi laudantium ipsam odit voluptate voluptas dolores non labore rerum ab dolore suscipit maxime adipisci, excepturi ducimus ratione magni explicabo facilis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nisi laudantium ipsam odit voluptate voluptas dolores non labore rerum ab dolore suscipit maxime adipisci, excepturi ducimus ratione magni explicabo facilis.' },
        { title: 'Additional info', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nisi laudantium ipsam odit voluptate voluptas dolores non labore rerum ab dolore suscipit maxime adipisci, excepturi ducimus ratione magni explicabo facilis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nisi laudantium ipsam odit voluptate voluptas dolores non labore rerum ab dolore suscipit maxime adipisci, excepturi ducimus ratione magni explicabo facilis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nisi laudantium ipsam odit voluptate voluptas dolores non labore rerum ab dolore suscipit maxime adipisci, excepturi ducimus ratione magni explicabo facilis.' },
        { title: 'Reviews (4)', content: 'Reviews content goes here.' }
      ]
    };
  },
  computed: {
    selectedIndex() {
      return this.activeTab;
    }
  }
};
</script>

<style scoped>
/* Your component-specific styles go here */
.more-button {
  display: inline-block;
}

.more-content {
  @apply border border-t-0 border-gray-300 rounded-bl rounded-br p-4;
}
</style>
