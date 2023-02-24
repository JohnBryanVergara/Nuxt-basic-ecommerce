<template>
    <div>
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
                    integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
                    crossorigin="anonymous"
                />
            </head>
            <body>
                <div
                    class="bg-gray-100 flex min-h-screen flex-col items-center justify-center"
                >
                    <div
                        class="bg-white w-50 flex max-w-md flex-col rounded-3xl px-4 py-8 shadow-md sm:px-6 md:px-8 lg:px-10"
                    >
                        <div
                            class="text-gray-800 self-center text-xl font-medium sm:text-3xl"
                        >
                            Join us Now
                        </div>
                        <div
                            class="text-gray-800 mt-4 self-center text-xl sm:text-sm"
                        >
                            Enter your credentials to get access account
                        </div>

                        <div class="mt-10">
                            <form action="#">
                                <div class="mb-5 flex flex-col">
                                    <label
                                        for="email"
                                        class="text-gray-600 mb-1 text-xs tracking-wide"
                                        >Name:</label
                                    >
                                    <div class="relative">
                                        <div
                                            class="text-gray-400 absolute left-0 top-0 inline-flex h-full w-10 items-center justify-center"
                                        >
                                            <i
                                                class="fas fa-user text-blue-500"
                                            ></i>
                                        </div>

                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            class="placeholder-gray-500 border-gray-400 focus:border-blue-400 w-full rounded-2xl border py-2 pl-10 pr-4 text-sm focus:outline-none"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                </div>
                                <div class="mb-5 flex flex-col">
                                    <label
                                        for="email"
                                        class="text-gray-600 mb-1 text-xs tracking-wide"
                                        >E-Mail Address:</label
                                    >
                                    <div class="relative">
                                        <div
                                            class="text-gray-400 absolute left-0 top-0 inline-flex h-full w-10 items-center justify-center"
                                        >
                                            <i
                                                class="fas fa-at text-blue-500"
                                            ></i>
                                        </div>

                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            class="placeholder-gray-500 border-gray-400 focus:border-blue-400 w-full rounded-2xl border py-2 pl-10 pr-4 text-sm focus:outline-none"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>
                                <div class="mb-6 flex flex-col">
                                    <label
                                        for="password"
                                        class="text-gray-600 mb-1 text-xs tracking-wide sm:text-sm"
                                        >Password:</label
                                    >
                                    <div class="relative">
                                        <div
                                            class="text-gray-400 absolute left-0 top-0 inline-flex h-full w-10 items-center justify-center"
                                        >
                                            <span>
                                                <i
                                                    class="fas fa-lock text-blue-500"
                                                ></i>
                                            </span>
                                        </div>

                                        <input
                                            id="password"
                                            type="password"
                                            name="password"
                                            class="placeholder-gray-500 border-gray-400 focus:border-blue-400 w-full rounded-2xl border py-2 pl-10 pr-4 text-sm focus:outline-none"
                                            placeholder="Enter your password"
                                        />
                                    </div>
                                </div>

                                <div class="flex w-full">
                                    <button
                                        type="submit"
                                        class="text-white bg-blue-500 hover:bg-blue-600 mt-2 flex w-full items-center justify-center rounded-2xl py-2 text-sm transition duration-150 ease-in focus:outline-none sm:text-base"
                                    >
                                        <span class="mr-2 uppercase"
                                            >Sign Up</span
                                        >
                                        <span>
                                            <svg
                                                class="h-6 w-6"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="mt-6 flex items-center justify-center">
                        <a
                            href="#"
                            target="_blank"
                            class="text-gray-700 inline-flex items-center text-center text-xs font-medium"
                        >
                            <span class="ml-2"
                                >You have an account?
                                <a
                                    href="#"
                                    class="text-blue-500 ml-2 text-xs font-semibold"
                                    >Login here</a
                                ></span
                            >
                        </a>
                    </div>
                </div>
            </body>
        </html>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
