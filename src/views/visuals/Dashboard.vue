<template>
    <div class='auth container m-auto'>

        <Card>
            <div class='logo-section mb-4 text-center'>
                <p class='text-2xl'>User Details</p>

                <p class="mt-3">
                    Email: {{ userInfo.email }}
                </p>

                <div class="flex items-center justify-center mt-8">
                    <CustomButton 
                        label="Logout"
                        @click="logout"
                    />
                </div>

            </div>
        </Card>
        
    </div>
</template>
  
<script>

    import { reactive } from 'vue';
    import { useUserStore } from '../../stores';
    import CustomButton from '../../components/button.vue';
    import Card from '../../components/card.vue';
  
    export default {
        name: "Dashboard",
        title: "FuelBuddy - Dashboard",

        components: {
            CustomButton,
            Card
        },

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
  