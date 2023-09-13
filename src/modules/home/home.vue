<template>
  <div >
   dashboard
  </div>
</template>



<script setup>

import { ref } from 'vue'


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
