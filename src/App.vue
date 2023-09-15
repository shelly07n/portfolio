<template>
   <div id="app">
      <!--Sidebar with Dimmer -->
      <div class="flex flex-row h-screen fixed w-screen">
         <!-- Sidebar -->
         <div>
            <sidebar />
         </div>
         <!-- Page Content -->
         <div class="bg-gray-100  text-gray-700 h-screen w-[100%] ">
            <topbar />
            <div class="h-screen w-[100%]  p-2 pb-36 overflow-auto">
               <RouterView></RouterView>
            </div>
         </div>
      </div>
   </div>
</template>



<script setup>
import sidebar from './modules/home/sidebar.vue'
import topbar from './modules/home/topbar.vue'
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
