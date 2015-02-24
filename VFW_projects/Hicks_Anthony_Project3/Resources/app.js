//find device dimensions
var deviceW = Ti.Platform.displayCaps.platformWidth;
console.log(deviceW);

var deviceH = Ti.Platform.displayCaps.platformHeight;
console.log(deviceH);

//set up global variables and math

var numpic = 20;
var space = 5;
var itemInRow= 4;
var spaceUsed = 4*2*5;
var itemSize = (deviceW- spaceUsed)/4;
var carPicHolder = [];

//create window

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
var win2 = Titanium.UI.createWindow({  
    title:'first window',
    backgroundColor:'green',
 });
//create view

var carScrollView = Ti.UI.createScrollView({
  bottom:120,
  layout: 'horizontal',
  contentWidth:"deviceW",
  
  
});
var carscreenswipe = Ti.UI.createView({
	layout:'horizontal',
	contentHeight:deviceH,
	contentWidth:deviceW
});
//console.log(carswipe);
//establish repository

var carFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "cars");
var carFileContent= carFile.getDirectoryListing();
console.log(carFileContent);

//create image view with loop through repository for thumbnail
for(var i = 0; i <=carFileContent.length; i++){
var carPicForCarPicHolder = Ti.UI.createImageView({
	
	image: "cars/"+ carFileContent[i],
	defaultImage:"images",

    index:i,
    title:"Car Stock",
	
});
var zoom = Ti.UI.createScrollView({
	maxZoomScale:2.0
});
zoom.add(carPicForCarPicHolder);
console.log(carPicForCarPicHolder);

//carPicHolder.push(carPicForCarPicHolder);
carPicHolder.push(zoom);
}



for(var i = 0; i <=carFileContent.length; i++){
var carPic = Ti.UI.createImageView({
	
	image: "cars/"+ carFileContent[i],
	defaultImage:"image",
	top:space*10,
	left: space,
    right: space,
    width: itemSize,
    height: itemSize,
    index:i,
    title:"Car Inventory",
	
});
	carPic.addEventListener("click", function(event){
//test to see if there is an event and whats its contents
		var carswipe = Ti.UI.createScrollableView({
	currentPage:event.source.index,
	views:carPicHolder,
	showPagingControl:true,
	height:deviceH,
	width:deviceW
		
});
		console.log(carPic);
		console.log(carswipe);
		//carscreenswipe.add(carswipe);
		win2.add(carswipe);
		win2.open();
});
  carScrollView.add(carPic);
}

//create image view with loop through repository for bigpic


//event listener for clicking pic



	


	
//create new view for event		
	
	
	



  


 
// });

//console.log(carswipe);
//console.log(carPicHolder);

//carScrollView(carswipe);
win1.add(carScrollView);
win1.open();
