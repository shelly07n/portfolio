<template>
    <!-- Component Start -->
    <div
        class="flex flex-col  w-full h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-50 via-indigo-50 to-pink-50">
        <div class="px-2 mt-6">
            <h1 class="text-2xl font-bold">Leads Management</h1>
        </div>
        <div class="flex flex-grow px-2 mt-4 space-x-6 overflow-auto w-screen">
            <div class="flex flex-col flex-shrink-0 w-72">
                <div class="flex items-center flex-shrink-0 h-10 px-2">
                    <span class="block text-sm font-semibold">Follow up</span>
                    <span
                        class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">6</span>
                    <button
                        class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                    </button>
                </div>
                <div class="flex flex-col pb-2 overflow-auto">
                    <div v-for="data in 5"
                        class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                        draggable="true">
                        <button
                            class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                            <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                        </button>
                        <div class="flex gap-4 items-center">
                            <img class="w-6 h-6 ml-auto rounded-full"
                                src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60' />
                            <p class="block text-md font-semibold">Shelton</p>
                        </div>
                        <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be
                            done.</h4>
                        <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="relative w-4 h-4 text-gray-400 fill-current">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                </svg>
                                <span class="ml-1 leading-none">8248025344</span>
                            </div>
                            <div class="relative flex items-center ml-4">
                                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="relative w-4 h-4 text-gray-400 fill-current">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg> -->
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                                <span class="ml-1 leading-none">sheltonfdo23@gmai.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col flex-shrink-0 w-72">
                <div class="flex items-center flex-shrink-0 h-10 px-2">
                    <span class="block text-sm font-semibold">Interested</span>
                    <span
                        class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">5</span>
                    <button
                        class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                    </button>
                </div>

                <div class="flex flex-col pb-2 overflow-auto">
                    <div v-for="data in 5"
                        class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                        draggable="true">
                        <button
                            class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                            <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                        </button>
                        <div class="flex gap-4 items-center">
                            <img class="w-6 h-6 ml-auto rounded-full"
                                src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60' />
                            <p class="block text-md font-semibold">Shelton</p>
                        </div>
                        <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be
                            done.</h4>
                        <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="relative w-4 h-4 text-gray-400 fill-current">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                </svg>
                                <span class="ml-1 leading-none">8248025344</span>
                            </div>
                            <div class="relative flex items-center ml-4">
                                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="relative w-4 h-4 text-gray-400 fill-current">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg> -->
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                                <span class="ml-1 leading-none">sheltonfdo23@gmai.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col flex-shrink-0 w-72">
                <div class="flex items-center flex-shrink-0 h-10 px-2">
                    <span class="block text-sm font-semibold">Converted</span>
                    <span
                        class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">4</span>
                    <button
                        class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                    </button>
                </div>
                <div class="flex flex-col pb-2 overflow-auto">
                    <div v-for="data in 4"
                        class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                        draggable="true">
                        <button
                            class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                            <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                        </button>
                        <div class="flex gap-4 items-center">
                            <img class="w-6 h-6 ml-auto rounded-full"
                                src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60' />
                            <p class="block text-md font-semibold">Shelton</p>
                        </div>
                        <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be
                            done.</h4>
                        <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="relative w-4 h-4 text-gray-400 fill-current">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                </svg>
                                <span class="ml-1 leading-none">8248025344</span>
                            </div>
                            <div class="relative flex items-center ml-4">
                                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="relative w-4 h-4 text-gray-400 fill-current">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg> -->
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                                <span class="ml-1 leading-none">sheltonfdo23@gmai.com</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="flex flex-col flex-shrink-0 w-72">
                <div class="flex items-center flex-shrink-0 h-10 px-2">
                    <span class="block text-sm font-semibold">Not interested</span>
                    <span
                        class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">2</span>
                    <button
                        class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                    </button>
                </div>
                <div class="flex flex-col pb-2 overflow-auto">
                    <div v-for="data in 2"
                        class="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                        draggable="true">
                        <button
                            class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                            <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                        </button>
                        <div class="flex gap-4 items-center">
                            <img class="w-6 h-6 ml-auto rounded-full"
                                src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60' />
                            <p class="block text-md font-semibold">Shelton</p>
                        </div>
                        <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be
                            done.</h4>
                        <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="relative w-4 h-4 text-gray-400 fill-current">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                </svg>
                                <span class="ml-1 leading-none">8248025344</span>
                            </div>
                            <div class="relative flex items-center ml-4">
                                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="relative w-4 h-4 text-gray-400 fill-current">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg> -->
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                                <span class="ml-1 leading-none">sheltonfdo23@gmai.com</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="flex flex-col flex-shrink-0 w-72">
                <div class="flex items-center flex-shrink-0 h-10 px-2">
                    <span class="block text-sm font-semibold">Connection losted</span>
                    <span
                        class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">1</span>
                    <button
                        class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                    </button>
                </div>
                <div class="flex flex-col pb-2 overflow-auto">
                    <div v-for="data in 1"
                        class="relative flex flex-col items-start p-4 mt-3 bg-red-50 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                        draggable="true">
                        <button
                            class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                            <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                        </button>
                        <div class="flex gap-4 items-center">
                            <img class="w-6 h-6 ml-auto rounded-full"
                                src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60' />
                            <p class="block text-md font-semibold">Shelton</p>
                        </div>
                        <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be
                            done.</h4>
                        <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="relative w-4 h-4 text-gray-400 fill-current">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                </svg>
                                <span class="ml-1 leading-none">8248025344</span>
                            </div>
                            <div class="relative flex items-center ml-4">
                                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="relative w-4 h-4 text-gray-400 fill-current">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg> -->
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                                <span class="ml-1 leading-none">sheltonfdo23@gmai.com</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="flex flex-col flex-shrink-0 w-72">
                <div class="flex items-center flex-shrink-0 h-10 px-2">
                    <span class="block text-sm font-semibold">Done</span>
                    <span
                        class="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">2</span>
                    <button
                        class="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                    </button>
                </div>
                <div class="flex flex-col pb-2 overflow-auto">
                    <div v-for="data in 2"
                        class="relative flex flex-col items-start p-4 mt-3 bg-green-50 rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
                        draggable="true">
                        <button
                            class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
                            <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                        </button>
                        <div class="flex gap-4 items-center">
                            <img class="w-6 h-6 ml-auto rounded-full"
                                src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60' />
                            <p class="block text-md font-semibold">Shelton</p>
                        </div>
                        <h4 class="mt-3 text-sm font-medium">This is the title of the card for the thing that needs to be
                            done.</h4>
                        <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="relative w-4 h-4 text-gray-400 fill-current">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                </svg>
                                <span class="ml-1 leading-none">8248025344</span>
                            </div>
                            <div class="relative flex items-center ml-4">
                                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="relative w-4 h-4 text-gray-400 fill-current">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg> -->
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                                <span class="ml-1 leading-none">sheltonfdo23@gmai.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-shrink-0 w-6"></div>
        </div>




    </div>
</template>


<style>.group:hover .group-hover\:flex {
    display: flex !important;
}</style>