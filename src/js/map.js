/**
 * Created by pepper on 7/2/16.
 */


var relayr = RELAYR.init({
  appId: "27a05929-1faf-4eb6-80b8-9cdc6890c6f3",
  redirectUri: "https://pepperrs.github.io/set-hackathon-website/src/index.html"
});


var adata;
var dataa = [];

var redStyle = {
  strokeColor: 'red',
  fillColor: 'rgba(255, 0, 0, 0.5',
  lineWidth: 1,
  lineCap: 'square',
  lineJoin: 'bevel'
};

var greentyle = {
  strokeColor: 'green',
  fillColor: 'rgba(0, 255, 0, 0.5',
  lineWidth: 1,
  lineCap: 'square',
  lineJoin: 'bevel'
};

// initialize map
var platform = new H.service.Platform({
    'app_id': 'vsQZSmhujvOERj1pbKY8',
    'app_code': 'ZxL5RxiGcIISDFlQ7V3irQ',
    useHTTPS: true
});



// Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
  document.getElementById('map'),
  defaultLayers.normal.map,
  {
    zoom: 17,
    center: { lat: 52.505672, lng: 13.392763 }
  });


// Create a rectangle and pass the custom style as an options parameter:
var smartSpace_1 = new H.map.Rect(new H.geo.Rect(52.505672, 13.392763, 52.505692, 13.392783),
  { style: redStyle });
// Add the rectangle to the map:
map.addObject(smartSpace_1);







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
                $("#" + data.readings[0].path).addClass("green");

                $("#" + data.readings[0].path).removeClass("red");
            }
            else {

                $("#" + data.readings[0].path).addClass("red");

                $("#" + data.readings[0].path).removeClass("green");
            }
            //dataa.push(adata.readings[0].value);
            }
        })
    }});
