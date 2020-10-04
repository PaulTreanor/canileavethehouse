<template>
    <main>
        <div class="container">
            <div class="grid">
                <Map />
                <div>
                    <Appinfo />
                    
                    <hr>

                    <Levelcontent />
                    
                    

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
    }
}
</script>

<style scoped>

</style>