/**
 * Created by pepper on 7/2/16.
 */


var relayr = RELAYR.init({
  appId: "27a05929-1faf-4eb6-80b8-9cdc6890c6f3",
  redirectUri: "https://pepperrs.github.io/set-hackathon-website/src/index.html"
});


$("#map").append("<div id='path_1' class='box red' ></div>");
$("#map").append("<div id='path_2' class='box red' ></div>");
$("#map").append("<div id='path_3' class='box red' ></div>");
$("#map").append("<div id='path_4' class='box red' ></div>");

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
            //dataa.push(adata.readings[0].value);
            }
        })
    }});
