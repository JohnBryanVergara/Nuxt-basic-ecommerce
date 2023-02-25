<template>
    <div class="card bg-white h-full rounded-md p-3 text-center shadow-md">
        <img :src="product.image" alt="Product Image" class="thumb h-52" />
        <p class="text-gray-500 m-4 truncate font-bold">{{ product.title }}</p>
        <NuxtLink :to="`/product/${product.id}`">
            <p class="btn my-4 mt-4 rounded-md bg-color2">View Detail</p>
        </NuxtLink>
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
