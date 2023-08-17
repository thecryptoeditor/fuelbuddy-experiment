<template>
    <div class='auth container m-auto'>
        <Card>
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
                    <CustomButton 
                        label="Login"
                        @click="login"
                    />
                </div>
            </form>
        </Card>
    </div>
</template>
  
<script>

    import { ref } from 'vue';
    import { useUserStore } from '../../stores';
    import CustomButton from '../../components/button.vue';
    import Card from '../../components/card.vue';
  
    export default {
        name: "LogIn",
        title: "FuelBuddy - Login",

        components: {
            CustomButton,
            Card
        },

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
  