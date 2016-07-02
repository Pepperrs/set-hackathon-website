/**
 * Created by pepper on 7/2/16.
 */


var relayr = RELAYR.init({
  appId: "27a05929-1faf-4eb6-80b8-9cdc6890c6f3",
  redirectUri: "https://pepperrs.github.io/set-hackathon-website/src/index.html"
});


var adata;
var dataa = [];


relayr.login({
  success: function(token){
            console.log(token);


        // create a new queue

        relayr.devices().getDeviceData({
        token: token,
        deviceId: "b931d888-1f4e-4b8a-a526-c781350e59db",
        incomingData: function(data) {
            adata = data;
            console.log(data.readings[0].path + " is " + data.readings[0].value);
            if (data.readings[0].value) {
                $("." + data.readings[0].path).addClass("green");

                $("." + data.readings[0].path).removeClass("red");
            }
            else {

                $("." + data.readings[0].path).addClass("red");

                $("." + data.readings[0].path).removeClass("green");
            }
            //dataa.push(adata.readings[0].value);
            }
        })
    }});
