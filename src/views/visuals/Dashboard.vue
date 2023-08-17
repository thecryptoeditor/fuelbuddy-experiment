<template>
    <div class='auth container m-auto'>
        <div class='login card w-full max-w-xs m-auto'>
            <div class=' bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <div class='logo-section mb-4 text-center'>
                    <p class='text-2xl'>User Details</p>

                    <p class="mt-3">
                       Email: {{ userInfo.email }}
                    </p>

                    <div class="flex items-center justify-center mt-8">
                        <button 
                            class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 w100 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            @click="logout"
                        >
                            Logout
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

    import { reactive } from 'vue';
    import { useUserStore } from '../../stores';
  
    export default {
        name: "Dashboard",
        title: "FuelBuddy - Dashboard",


        setup() {

            let userInfo = reactive({});

            const store = useUserStore();
            userInfo = store.userDetails;

            const logout = async () => {
                store.logout();
            }

            return { logout, userInfo }

        }


    }

</script>
  