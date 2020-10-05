<template>
    <div class="levelinfo">
    <p>{{active_county}} is currently under level {{currentLevel}} Covid restrictions.</p>
    <p>This means that you can...</p>

    <ul>
        <li v-for="item in levelDetails" :key="item">
            {{ item }}
  </li>
    </ul>
</div>
</template>

<script>

export default {
    name: "Leveldetails",
    props : ["active_county", "currentLevel", "levels"],
    
    computed : {
        levelDetails: function() {
            var level_details = []
            for (var i=0; i<1; i++){
                if (this.currentLevel==this.levels[i].level) {
                    level_details = this.levels[i].details
                }
            }
            level_details = this.levels[1].details
            return level_details
        }
    }
}
</script>