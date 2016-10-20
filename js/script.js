document.addEventListener("deviceReady", function(){
	//scanner();
	var mapDiv = document.getElementById("mapCanvas");
	var map = plugin.google.maps.Map.getMap(mapDiv);

	//map.on(plugin.google.maps.event.MAP_READY,function onMapInit(map){
	//	center: {lat: -34.397, lng:150.644},
	//	zoom:10
	//});
});

function onMapInit(){
	var myLocation = new plugin.google.maps.LatLng(41.796875,140.757007);

}
function initMap(){
	map = new google.maps.Map(document.getElementById('mapCanvas'),{
		center: {lat: -34.397, lng: 150.644},
		zoom: 20
	});
var canvas = document.getElementById('mapCanvas');
var main = document.getElementById('main');
//main.style.height = '500px';
//main.style.width = '500px';

	 console.log(
                'Canvas size for the main page: ' +
                main.offsetWidth + 'x' +
                main.offsetHeight
            );
}

// scanner function
function scanner(){
	//alert("Here");
	cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          "preferFrontCamera" : false, // iOS and Android
          "showFlipCameraButton" : true, // iOS and Android
          "prompt" : "Place a barcode inside the scan area", // supported on Android only
          "formats" : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          "orientation" : "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
      }
   );
}