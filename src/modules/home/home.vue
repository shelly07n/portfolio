<template>
    <div id="app">
       <!--Sidebar with Dimmer -->
       <div class="flex flex-row h-screen fixed w-screen">
          <!-- Sidebar -->
          <div>
             <sidebar />
 
          </div>
 
          <!-- Page Content -->
          <div class="bg-gray-50  text-gray-700 h-screen w-[100%] main-content">
             <topbar />
             <div class="h-full overflow-auto p-2 mb-14">
                <div class="card flex justify-content-center">
                    <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
                </div>
             </div>
          </div>
       </div>
    </div>
 </template>



 <script setup>
 import sidebar from './sidebar.vue'
 import topbar from './topbar.vue'
 import { ref } from 'vue'
 const open = ref(false)
 const dimmer = ref(true)
 const right = (false)
 
 function toggle() {
    open.value = !open.value;
 }
 

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

 
 </script>
 
 <style>
 .fade-enter-active,
 .fade-leave-active {
    transition: opacity 1s ease-out;
 }
 
 .fade-enter,
 .fade-leave-to {
    opacity: 0;
 }
 </style>

<style>
html {
	background: #efefef;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 1s ease-out;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
