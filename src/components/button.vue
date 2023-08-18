<template>
    <button 
        class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
        @click="$emit('click')"
    >
        {{ props.label }}
    </button>
</template>
  
<script setup>

    const props = defineProps({
        label: String,
    })

</script>
  