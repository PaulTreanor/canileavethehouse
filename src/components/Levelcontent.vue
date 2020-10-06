<template>
    <div class="levelcontent">

    <h2 class="county"> County {{active_county}}</h2>
    <h4>LEVEL {{currentLevel}}</h4>
    <Leveldetails v-bind:active_county="active_county" v-bind:currentLevel="currentLevel" v-bind:levels="levels"/>
</div>
</template>

<script>
import Leveldetails from './Leveldetails'

export default {
    name: "Levelcontent",
    components : {
        Leveldetails
    },
    props: ["levels", "active_county", "counties"],
    computed : {
        currentLevel: function() {
            var current_level = "0"
            for (var i=0; i<26; i++){
                if (this.active_county==this.counties[i].name) {
                    current_level = this.counties[i].level
                }
            }
            return current_level
        }
    }
}
</script>