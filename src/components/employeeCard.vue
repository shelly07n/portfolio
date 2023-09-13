<template>
    <div class="w-[180px] p-2 bg-white rounded-lg" v-if="source">
        <div class="float-right bg-green-50 border-green-400 border rounded-sm text-green-600 ">
            <p class="text-[10px] px-2 font-medium">{{source.status}}</p>
        </div>
        <div class="mt-6">
            <div class="flex justify-center">
                <div class="rounded-full  p-2 h-16 w-16 flex justify-center items-center" :class="`${getBackgroundColor(index)}`">
                    <p class="text-gray-900 font-bold text-xl mb-2">{{ source.firstname.charAt(0) + source.lastname.charAt(0) }}
                    </p>
                </div>
            </div>
            <p class="text-gray-900 font-bold text-md text-center ">{{ source.firstname + " " + source.lastname }}</p>
            <p class="text-gray-600 text-center text-xs">{{ source.designation }}</p>

            <div class="bg-gray-50 p-2  rounded-lg mt-2">
                <div class="flex justify-between gap-4">
                    <div>
                        <p class="text-gray-600 text-center text-[10px]">Department</p>
                        <p class="text-gray-900 font-semibold text-xs">{{ source.department }}</p>
                    </div>
                    <div>
                        <p class="text-gray-600 text-center text-[10px]">doj</p>
                        <p class="text-gray-900 font-semibold text-xs">{{ source.doj }}</p>
                    </div>
                </div>
                <p class="text-gray-900 font-medium text-[10px] my-1">{{ source.email }}</p>
                <p class="text-gray-900 font-medium text-[10px]">{{ source.mobileNumber }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    source: {
        type: Object,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    },
});


const colors = [
    'bg-orange-50',
    'bg-emerald-50',
    'bg-yellow-50',
    'bg-rose-50',
    'bg-cyan-50',
    'bg-amber-50',
    'bg-red-50',
    'bg-blue-50',
    'bg-pink-50',
    'bg-green-50',
    'bg-fuchsia-50',
];

const getBackgroundColor = (index) => {
    return colors[index % colors.length];
};
</script>
