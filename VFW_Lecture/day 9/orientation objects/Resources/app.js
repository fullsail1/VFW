var deviceW = Ti.Platform.displayCaps.platformWidth;
console.log(deviceW);

var deviceH = Ti.Platform.displayCaps.platformHeight;
console.log(deviceH);
var numpic = 20;


var win1 = Titanium.UI.createWindow({  
    title:'first window',
    backgroundColor:'#fff',
    orientationModes: [
    
Titanium.UI.PORTRAIT,
Titanium.UI.UPSIDE_PORTRAIT,
Titanium.UI.LANDSCAPE_LEFT,
Titanium.UI.LANDSCAPE_RIGHT,
	],
});
var carPicHolder = [];

var carScrollView = Ti.UI.createScrollView({
  bottom:120,
  layout: 'horizontal',
  contentWidth:"deviceW"
});

var carFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "cars");
var carFileContent= carFile.getDirectoryListing();
console.log(carFileContent);

for(var i = 0; i <=carFileContent.length; i++){
var carPic = Ti.UI.createImageView({
	image: "cars/"+ carFileContent[i]
	
	
});
  carScrollView.add(carPic);
  carPicHolder.push(carPic);
}




console.log(carPicHolder[0]);
win1.add(carPicHolder[0]);
win1.add(carScrollView);
win1.open();
