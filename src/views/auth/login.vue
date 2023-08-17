<template>
    <div class='auth container m-auto'>
        <div class='login card w-full max-w-xs m-auto'>
            <div class=' bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <div class='logo-section mb-4 text-center'>
                    <p class='text-2xl'>Fuel Buddy</p>
                </div>

                <form @submit.prevent="login">
                    <div class='email'>
                        <label 
                            class="block text-gray-700 text-sm mb-2" 
                            for="email"
                        >
                            Email
                        </label>

                        <input 
                            id="email"
                            type="email"
                            v-model="email"
                            placeholder='Enter email address'
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>

                    <div class='password group mb-4 mt-4'>
                        <label 
                            class="block text-gray-700 text-sm mb-2" 
                            for="password"
                        >
                            Password
                        </label>

                        <input 
                            id="password"
                            type="password" 
                            placeholder='Enter Password'
                            v-model="password"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>

                    <div class="flex items-center justify-center mt-8">
                        <button 
                            class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 w100 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>
  
<script>

    import { ref } from 'vue';
    import { useUserStore } from '../../stores';
  
    export default {
        name: "LogIn",
        title: "FuelBuddy - Login",


        setup() {

            const email = ref('');
            const password = ref('');
            const store = useUserStore();
            
            const login = async () => {
                                
                // Dispatching login payload to the store
                store.login(email.value, password.value);
                
            }

            return { login, email, password, store }

        }


    }

</script>
  