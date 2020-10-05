<template>
    <div class="map">
        <div v-bind:key="county.name" v-for="county in counties">
            <County v-bind:county="county" v-on:active-county="$emit('active-county', county)"/>

        </div>
    </div>
</template>

<script>
import County from "./County"
export default {
    name: "Map",
    components : {
        County
    },
    props: ["counties"]
}
</script>


<style scoped>

/*Ulster*/
#Monaghan {
    top:30%;
    left: 67%;
}

#Cavan {
  top: 36%;
  left: 62%;
}

#Donegal{
    top: 13%;
    left: 50%;
}


/* Leinster */
#Meath{
    top: 43%;
    left: 72%;
}

#Louth{
    top: 37%;
    left: 76%;
}

#Dublin{
    top: 50%;
    left: 80%;
}

#Wicklow{
    top: 59%;
    left: 78%;
}


#Wexford{
    top: 72%;
    left: 74%;
}

#Westmeath{
    top: 46%;
    left: 60%;
}


#Longford{
    top: 41%;
    left: 55%;
}

#Offaly{
    top: 53%;
    left: 55%;
}


#Laois{
    top: 59%;
    left: 60%;
}


#Kilkenny{
    top: 68%;
    left: 63%;
}


#Kildare{
    top: 54%;
    left: 70%;
}

#Carlow{
    top: 65%;
    left: 69%;
}


/*connaught*/

#Leitrim {
  top: 33%;
  left: 50%;
}

#Sligo {
  top: 31%;
  left: 40%;
}

#Mayo {
  top: 37%;
  left: 29%;
}

#Roscommon {
  top: 40%;
  left: 46%;
}

#Galway {
  top: 49%;
  left: 37%;
}

/* Munster */

#Cork {
  top: 82%;
  left: 39%;
}

#Waterford {
  top: 78%;
  left: 57%;
}

#Kerry {
  top: 80%;
  left: 20%;
}

#Limrick {
  top: 70%;
  left:37%;
}

#Clare {
  top: 62%;
  left: 33%;
}
#Tipperary {
  top: 67%;
  left: 51%;
}

</style>
