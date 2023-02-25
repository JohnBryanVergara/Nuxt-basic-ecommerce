<template>
    <div>
        <Gelo-navbar />
        <div class="container mx-auto mt-8">
            <Gelo-ProductDetail :product="product" />
        </div>
    </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

const { data: product } = await useFetch(uri);
</script>

<style scoped></style>
