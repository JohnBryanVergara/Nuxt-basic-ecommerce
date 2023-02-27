<template>
    <div class="bg-white h-full rounded-md p-3 text-center shadow-md">
        <div
            class="bg-white relative h-full gap-10 overflow-hidden p-3 text-center shadow-lg"
        >
            <img :src="product.image" alt="Product Image" class="thumb h-52" />
            <div
                class="absolute top-0 right-0 mr-2 mt-2 rounded-lg bg-color2 p-2 text-xs font-bold"
            >
                <NuxtLink :to="`/dashboard/edit/${product.id}`">edit</NuxtLink>
            </div>

            <div class="relative px-6 py-4">
                <div class="mb-2 text-xl font-bold">{{ product.title }}</div>
                <p class="text-justify text-sm text-gray"></p>
                <div class="mt-4">
                    <span class="rounded-full bg-color1 p-2 font-bold"
                        >Price - ${{ product.price }}</span
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>
