<template>
    <div
        class="relative bg-cover bg-center bg-no-repeat"
        style="
            background-image: url(https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
        "
    >
        <div
            class="from-green-500 to-green-400 absolute inset-0 z-0 bg-gradient-to-b opacity-75"
        ></div>
        <div class="mx-0 min-h-screen justify-center sm:flex sm:flex-row">
            <div
                class="z-10 mx-9 flex flex-col self-center rounded bg-color3 p-10 sm:max-w-5xl xl:max-w-2xl"
            >
                <div class="text-white flex-col self-start lg:flex">
                    <img src="" class="mb-3" />
                    <h1 class="mb-3 text-5xl font-bold">
                        Welcome to our amazing store
                    </h1>
                    <p class="pr-3">
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for previewing
                        layouts and visual mockups
                    </p>
                </div>
            </div>
            <div class="z-10 flex justify-center self-center">
                <div
                    class="mx-auto mr-44 w-96 rounded-2xl bg-color3 p-12 md:justify-center"
                >
                    <div class="mb-4">
                        <h3 class="text-gray-800 text-2xl font-semibold">
                            Sign In
                        </h3>
                        <p class="text-gray-500">
                            Please sign in to your account.
                        </p>
                    </div>
                    <div name="login" class="space-y-5">
                        <div class="space-y-2">
                            <label
                                class="text-gray-700 text-sm font-medium tracking-wide"
                                >Email</label
                            >
                            <input
                                class="border-gray-300 focus:border-green-400 w-full rounded-lg border px-4 py-2 text-base focus:outline-none"
                                type=""
                                placeholder="mail@gmail.com"
                                name="email"
                                id="loginEmail"
                                v-model="email"
                            />
                        </div>
                        <div class="space-y-2">
                            <label
                                class="text-gray-700 mb-5 text-sm font-medium tracking-wide"
                            >
                                Password
                            </label>
                            <input
                                class="border-gray-300 focus:border-green-400 w-full content-center rounded-lg border px-4 py-2 text-base focus:outline-none"
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                id="loginPass"
                                v-model="password"
                            />
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <input
                                    id="remember_me"
                                    name="remember_me"
                                    type="checkbox"
                                    class="bg-blue-500 focus:ring-blue-400 border-gray-300 h-4 w-4 rounded"
                                />
                                <label
                                    for="remember_me"
                                    class="text-gray-800 ml-2 block text-sm"
                                >
                                    Remember me
                                </label>
                            </div>
                            <div class="text-sm">
                                <a
                                    href="#"
                                    class="text -green-400 hover:text-green-500"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                class="bg-green-400 hover:bg-green-500 text-gray-100 flex w-full cursor-pointer justify-center rounded-full p-3 font-semibold tracking-wide shadow-lg transition duration-500 ease-in hover:opacity-40"
                                @click="loginUser"
                            >
                                Sign in
                            </button>
                        </div>
                    </div>
                    <div class="text-gray-400 pt-5 text-center text-xs">
                        <span> Copyright © 2021-2022</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
//Saving user credetials
//const usersEmail = [];
//const usersPassword = [];
//const { data: users } = await useFetch("https://fakestoreapi.com/users");
//for (let id = 0; id < users._rawValue.length; id++) {
//    console.log(id);
//    const { data: user } = await useFetch(
//      "https://fakestoreapi.com/users/" + id
//     );
//    usersEmail.push(user._rawValue.email);
//    usersPassword.push(user._rawValue.password);
//}
const email = ref("");
const password = ref("");
const { data: user } = await useFetch("https://fakestoreapi.com/users/1");
user.mail = user._rawValue.email;
user.password = user._rawValue.password;
function loginUser() {
    if (email.value == user.email || password.value == user.password) {
        alert("Login Successfully");
        window.location.replace("/product");
    } else {
        alert("Invalid Credentials");
    }
}
</script>

<style scoped></style>
