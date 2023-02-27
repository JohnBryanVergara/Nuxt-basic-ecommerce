<template>
    <div>
        <Gelo-Navbar />
        <div>
            <div>
                <form action="post">
                    <div class="container mx-auto mt-8 grid grid-cols-2">
                        <div
                            class="bg-white mt-8 h-full gap-10 p-3 text-center shadow-lg"
                        >
                            <img
                                src="../../img/person.jpg"
                                alt="Product Image"
                                class=""
                            />
                            <div class="mt-4 flex justify-center">
                                <label class="block">
                                    <span class="sr-only"
                                        >Choose profile photo</span
                                    >
                                    <input
                                        type="file"
                                        class="block w-full cursor-pointer text-sm file:mr-4 file:rounded-full file:border-0 file:bg-color4 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-color1 hover:opacity-70"
                                    />
                                </label>
                            </div>
                        </div>
                        <div class="mt-4 ml-12 flex flex-col">
                            <label for="price">Price: </label>
                            <input
                                id="price"
                                type="text"
                                class="rounded-full bg-color1 p-2 text-right"
                                placeholder="Price"
                            /><label for="product">Product: </label>
                            <input
                                id="product"
                                type="text"
                                class="rounded-full bg-color1 p-2 text-right"
                                placeholder="Product name"
                            />
                            <label for="description"
                                >Product Description:
                            </label>
                            <textarea
                                id="description"
                                type="text"
                                class="rounded bg-color1 p-2 text-justify"
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
            </div>
        </div>
        <div class="mt-16">
            <Bry-footer />
        </div>
    </div>
</template>

<script setup>
const { data: product } = await useFetch("https://fakestoreapi.com/products/1");
</script>

<style scoped></style>
