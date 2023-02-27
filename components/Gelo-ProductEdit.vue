<template>
    <div>
        <form action="post">
            <div class="container mx-auto mt-8 grid grid-cols-2">
                <div
                    class="bg-white relative mt-8 h-full gap-10 overflow-hidden p-3 text-center shadow-lg"
                >
                    <img :src="product.image" alt="Product Image" class="" />
                </div>

                <div class="mt-4 ml-12 flex flex-col">
                    <label for="price">Price: </label>
                    <input
                        id="price"
                        type="text"
                        class="rounded-full bg-color1 p-2 text-right"
                        :value="'$' + product.price"
                    /><label for="product">Product: </label>
                    <input
                        id="product"
                        type="text"
                        class="rounded-full bg-color1 p-2 text-right"
                        :value="product.title"
                    />
                    <label for="description">Product Description: </label>
                    <textarea
                        id="description"
                        type="text"
                        class="h-auto rounded bg-color1 p-2 text-justify"
                        v-model="product.description"
                    ></textarea>
                    <div class="flex justify-end">
                        <button
                            class="mt-8 w-32 rounded bg-color3 px-2 py-2 hover:opacity-70"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </form>
        <div class="mt-16">
            <BryFooter />
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped></style>
