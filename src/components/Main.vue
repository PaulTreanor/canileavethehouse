<template>
    <main>
        <div class="container">
            <div class="grid">
                <Map v-bind:counties="counties" v-on:active-county='activeCounty'/>
                <div>
                    <Levelcontent v-bind:levels='levels' v-bind:active_county="active_county" v-bind:counties="counties"/>     
                    <hr />
                    <Appinfo />
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
    props: ["levels", "counties"],
    data: function() {
        return  {
            "active_county": "Dublin"
        }
    },
    methods: {
        activeCounty(county) {
            this.active_county = county.name
        }
    }
}
</script>

<style scoped>

</style>