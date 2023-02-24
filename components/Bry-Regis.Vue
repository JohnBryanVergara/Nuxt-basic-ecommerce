<template>
    <div class="font-mono bg-gray-400">
        <!-- Container -->
        <div class="container mx-auto">
            <div class="my-12 flex justify-center px-6">
                <!-- Row -->
                <div class="flex w-full lg:w-11/12 xl:w-3/4">
                    <!-- Col -->
                    <div
                        class="bg-gray-400 hidden h-auto w-full rounded-l-lg bg-cover lg:block lg:w-5/12"
                        style="
                            background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800');
                        "
                    ></div>
                    <!-- Col -->
                    <div
                        class="bg-white w-full rounded-lg p-5 lg:w-7/12 lg:rounded-l-none"
                    >
                        <h3 class="pt-4 text-center text-2xl">
                            Create an Account!
                        </h3>
                        <form class="bg-white mb-4 rounded px-8 pt-6 pb-8">
                            <div class="mb-4 md:flex md:justify-between">
                                <div class="mb-4 md:mr-2 md:mb-0">
                                    <label
                                        class="text-gray-700 mb-2 block text-sm font-bold"
                                        for="firstName"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        class="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight shadow focus:outline-none"
                                        id="firstName"
                                        type="text"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div class="md:ml-2">
                                    <label
                                        class="text-gray-700 mb-2 block text-sm font-bold"
                                        for="lastName"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        class="text-gray-700 focus:shadow-outline w-full appearance-none rounded border px-3 py-2 text-sm leading-tight shadow focus:outline-none"
                                        id="lastName"
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div class="mb-4">
                                <label
                                    class="text-gray-700 mb-2 block text-sm font-bold"
                                    for="email"
                                >
                                    Email
                                </label>
                                <input
                                    class="text-gray-700 focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 text-sm leading-tight shadow focus:outline-none"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div class="mb-4 md:flex md:justify-between">
                                <div class="mb-4 md:mr-2 md:mb-0">
                                    <label
                                        class="text-gray-700 mb-2 block text-sm font-bold"
                                        for="password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        class="text-gray-700 border-red-500 focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 text-sm leading-tight shadow focus:outline-none"
                                        id="password"
                                        type="password"
                                        placeholder="******************"
                                    />
                                    <p class="text-red-500 text-xs italic">
                                        Please choose a password.
                                    </p>
                                </div>
                                <div class="md:ml-2">
                                    <label
                                        class="text-gray-700 mb-2 block text-sm font-bold"
                                        for="c_password"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        class="text-gray-700 focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 text-sm leading-tight shadow focus:outline-none"
                                        id="c_password"
                                        type="password"
                                        placeholder="******************"
                                    />
                                </div>
                            </div>
                            <div class="mb-6 text-center">
                                <button
                                    class="text-white bg-blue-500 hover:bg-blue-700 focus:shadow-outline w-full rounded-full px-4 py-2 font-bold focus:outline-none"
                                    type="button"
                                >
                                    Register Account
                                </button>
                            </div>
                            <hr class="mb-6 border-t" />
                            <div class="text-center">
                                <a
                                    class="text-blue-500 hover:text-blue-800 inline-block align-baseline text-sm"
                                    href="#"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                            <div class="text-center">
                                <a
                                    class="text-blue-500 hover:text-blue-800 inline-block align-baseline text-sm"
                                    href="./index.html"
                                >
                                    Already have an account? Login!
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
