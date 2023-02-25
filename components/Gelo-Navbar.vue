<template>
    <nav class="bg-color4 px-4 py-3">
        <div class="mb-2 flex items-center justify-between">
            <a href="#" class="text-white text-lg font-semibold text-color1"
                >Logo</a
            >
            <div class="flex items-center">
                <input
                    type="text"
                    placeholder="Search"
                    class="bg-gray-700 text-white mr-2 rounded-full py-1 px-2"
                />
                <button
                    class="hover:bg-blue-600 rounded py-1 px-2 text-color1 hover:opacity-75 md:justify-center"
                >
                    Search
                </button>
            </div>
        </div>
        <ul class="flex items-center">
            <li class="mr-6">
                <!-- <a href="#" class="text-white hover:text-gray-400">Home</a> -->
                <NuxtLink to="/" class="text-color1 hover:opacity-75"
                    >Home</NuxtLink
                >
            </li>
            <li class="mr-6">
                <NuxtLink to="/product" class="text-color1 hover:opacity-75"
                    >Product</NuxtLink
                >
            </li>
            <li class="mr-6">
                <NuxtLink to="/" class="text-color1 hover:opacity-75"
                    >Contact</NuxtLink
                >
            </li>
        </ul>
    </nav>
</template>
