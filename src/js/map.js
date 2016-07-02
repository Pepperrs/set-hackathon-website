/**
 * Created by pepper on 7/2/16.
 */


var relayr = RELAYR.init({
  appId: "27a05929-1faf-4eb6-80b8-9cdc6890c6f3",
  redirectUri: "https://pepperrs.github.io/set-hackathon-website/src/index.html"
});


            console.log("init!")

relayr.login({
  success: function(token){
            console.log("small SUCCESSSSS!")
    relayr.devices().getAllDevices(function(devices){
            console.log("SUCCESSSSS!")
    });
  }
});