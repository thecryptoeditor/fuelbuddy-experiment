<template>
    <button 
        class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
        @click="$emit('click')"
    >
        {{ label }}
    </button>
</template>
  
<script>
    export default {
        props: {
            label: String,
        },
    }
</script>
  