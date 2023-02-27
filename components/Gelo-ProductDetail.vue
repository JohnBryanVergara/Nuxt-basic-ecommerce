<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img
                    :src="product.image"
                    alt="Product Image"
                    class="mx-auto my-7"
                />
            </div>
            <div class="p-7">
                <h2 class="my-7 text-4xl">{{ product.title }}</h2>
                <p class="my-7 text-xl">Price - ${{ product.price }}</p>
                <h3 class="mb-4 border-b-2 pb-2 font-bold">
                    Product Description:
                </h3>
                <p>{{ product.description }}</p>
                <button
                    class="text-white mt-3 rounded bg-color1 py-2 px-4 font-bold hover:bg-color2"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped></style>
