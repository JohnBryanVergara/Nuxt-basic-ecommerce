<template>
    <div class="bg-grey-lightest font-sans antialiased">
        <!-- Content -->
        <div class="bg-grey-lightest w-full" style="padding-top: 4rem">
            <div class="container mx-auto py-8">
                <div
                    class="mx-auto w-5/6 rounded-3xl bg-color3 shadow lg:w-1/2"
                >
                    <div
                        class="border-grey-lighter text-dark border-b py-4 px-8 text-xl font-bold"
                    >
                        Register for a free account
                    </div>
                    <div class="py-4 px-8">
                        <div class="mb-4 flex">
                            <div class="mr-1 w-1/2">
                                <label
                                    class="text-dark mb-2 block text-sm font-bold"
                                    for="first_name"
                                    >First Name</label
                                >
                                <input
                                    class="text-grey-darker w-full appearance-none rounded border py-2 px-3"
                                    id="first_name"
                                    type="text"
                                    placeholder="Your first name"
                                />
                            </div>
                            <div class="ml-1 w-1/2">
                                <label
                                    class="text-dark mb-2 block text-sm font-bold"
                                    for="last_name"
                                    >Last Name</label
                                >
                                <input
                                    class="text-grey-darker w-full appearance-none rounded border py-2 px-3"
                                    id="last_name"
                                    type="text"
                                    placeholder="Your last name"
                                />
                            </div>
                        </div>
                        <div class="mb-4">
                            <label
                                class="text-dark mb-2 block text-sm font-bold"
                                for="email"
                                >Email Address</label
                            >
                            <input
                                class="text-grey-darker w-full appearance-none rounded border py-2 px-3"
                                id="email"
                                type="email"
                                placeholder="Your email address"
                            />
                        </div>
                        <div class="mb-4">
                            <label
                                class="text-dark mb-2 block text-sm font-bold"
                                for="password"
                                >Password</label
                            >
                            <input
                                class="text-grey-darker w-full appearance-none rounded border py-2 px-3"
                                id="password"
                                type="password"
                                placeholder="Your secure password"
                            />
                        </div>
                        <div class="mb-4">
                            <label
                                class="text-dark mb-2 block text-sm font-bold"
                                for="confirm-password"
                                >Confirm Password</label
                            >
                            <input
                                class="text-grey-darker w-full appearance-none rounded border py-2 px-3"
                                id="con-password"
                                type="password"
                                placeholder="Your secure password"
                            />
                        </div>
                        <div class="mt-8 flex items-center justify-center">
                            <button
                                class="hover:bg-blue-dark text-dark rounded-full bg-color1 py-2 px-4 font-bold"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
