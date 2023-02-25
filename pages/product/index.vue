<template>
    <div>
        <Gelo-navbar />
        <div class="container mx-auto mt-8 grid grid-cols-4 gap-5">
            <div v-for="p in products" :key="p.id">
                <GeloProductCard :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style lang="scss" scoped></style>
