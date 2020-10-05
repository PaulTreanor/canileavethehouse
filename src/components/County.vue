<template>
    <div :id="county.name" v-on:click="$emit('active-county', county)" class="markers"></div>
</template> 

<script>
export default {
    name: "County",
    props:["county"]
}
</script>