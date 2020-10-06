<template>
  <div id="app">
    <Nav />
    <Main v-bind:levels="jsonData.levels" v-bind:counties="jsonData.counties"/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Main from './components/Main.vue'
import axios from 'axios';  

export default {
  name: 'App',
  components: {
    Nav,
    Main
  },
  data : function() {
     return {
       jsonData : "json"
     }
  },
  created() {
    //api requests
    axios.get('data.json')  //returns promise 
      .then(res => this.jsonData = res.data)
      .catch(err => console.log(err));
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: "inter", sans-serif;
  color: #333;
  background-color: #c2eaef;
}


h1 {
  font-size: 200%;
  margin: 0px;
  padding:0px;  
  justify-self: start;
}

nav {
  padding-bottom: 25px;
}

.bold {
  font-weight: 700;
}

.about {
  justify-self: end;
  padding-top: 20px;
  color: #333;
}

.navbar {
    text-align: center;
    padding-top: 20px;
    border-bottom: solid;
    border-color: #aee3ea;
}

.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }

.grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;

}

.map {
    position: relative;
    background-image: url("./images/ireland.png"); 
    background-repeat: no-repeat;
    background-size: contains;  /*contains auto*/ 
    display: block;
    width: 575px;
    height: 700px; 
    max-width: 575px;
    max-height: 700px;
    z-index: 0; 
    background-size:100% 100%;
}


/* Making the links we just added look like markers */

.markers {
    position: absolute;
    height: 14px; /* the height of the marker image */
    width: 8px;
     font-size: 0;
    background-image: url("./images/marker.png"); 
    background-repeat: no-repeat;
    z-index: 100;
}





.markers:hover {
  background-image: url("./images/hover.png");
}
.markers:active {
  background-image: url("./images/active.png");
}
#cavan {
    top: 0%;
    left: 0%;
}


@media screen and (max-width: 1000px) {
    
  .grid {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
   }

  .map, .selectedcounty {
    grid-column: auto;
    grid-row: auto;
  }
  .map {
      width: 100vw;
      background-size: 100% auto;
      max-height: 800px;
  }
  .about {
    justify-self: center;
  }
  
}

@media screen and (max-width: 768px) {
    .map {
        max-height: 700px;
    }
}



  @media screen and (max-width: 600px) {
    .map {   
        max-height: 650px;
    }
    
}

 @media screen and (max-width: 500px) {
    .map {   
        max-height: 600px;
    }
    
}

@media screen and (max-width: 400px) {
    .map {   
        max-height: 450px;
    }
    
}

@media screen and (max-width: 380px) {
    .map {   
        max-height: 430px;
    }
    
}

footer {
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 25px;
    text-align: center;
    background-color:#c2eaef;
}

/* covid level info */
.level {
    font-weight: 900;
}

.appinfo {
  padding-bottom: 20px;
  color: #555;
}

.levelcontent {
  padding-top: 20px;
}

li{
  margin: 10px 0;
}


</style>
