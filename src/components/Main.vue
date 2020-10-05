<template>
    <main>
        <div class="container">
            <div class="grid">
                <Map v-bind:counties="counties"/>
                <div>
                    <Appinfo />     
                    <hr>
                    <Levelcontent v-bind:levels="levels"/>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Map from "./Map"
import Appinfo from "./AppInfo"
import Levelcontent from "./Levelcontent"

export default {
    name: "Main",
    components: {
        Map,
        Appinfo,
        Levelcontent
    },
    props: ["levels", "counties"]
}
</script>

<style scoped>

</style>