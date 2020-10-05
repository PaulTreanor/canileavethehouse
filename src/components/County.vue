<template>
    <div :id="county.name" class="markers"></div>
</template>

<script>
export default {
    name: "County",
    props:["county"]
}
</script>