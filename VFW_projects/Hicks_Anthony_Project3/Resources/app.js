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
var sushiPicHolder = [];

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

var sushiScrollView = Ti.UI.createScrollView({
  bottom:120,
  layout: 'horizontal',
  contentWidth:"deviceW",
  
  
});
var sushiscreenswipe = Ti.UI.createView({
	layout:'horizontal',
	contentHeight:deviceH,
	contentWidth:deviceW
});
//console.log(sushiswipe);
//establish repository

var sushiFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "sushi");
var sushiFileContent= sushiFile.getDirectoryListing();
console.log(sushiFileContent);

//create image view with loop through repository for thumbnail
for(var i = 0; i <=sushiFileContent.length; i++){
var sushiPicForsushiPicHolder = Ti.UI.createImageView({
	
	image: "sushi/"+ sushiFileContent[i],
	defaultImage:"images",

    index:i,
    title:"sushi Stock",
	
});
var zoom = Ti.UI.createScrollView({
	maxZoomScale:2.0
});
zoom.add(sushiPicForsushiPicHolder);
console.log(sushiPicForsushiPicHolder);

//sushiPicHolder.push(sushiPicForsushiPicHolder);
sushiPicHolder.push(zoom);
}



for(var i = 0; i <=sushiFileContent.length; i++){
var sushiPic = Ti.UI.createImageView({
	
	image: "sushi/"+ sushiFileContent[i],
	defaultImage:"image",
	top:space*10,
	left: space,
    right: space,
    width: itemSize,
    height: itemSize,
    index:i,
    title:"sushi Inventory",
	
});
	sushiPic.addEventListener("click", function(event){
//test to see if there is an event and whats its contents
		var sushiswipe = Ti.UI.createScrollableView({
	currentPage:event.source.index,
	views:sushiPicHolder,
	showPagingControl:true,
	height:deviceH,
	width:deviceW
		
});
		console.log(sushiPic);
		console.log(sushiswipe);
		//sushiscreenswipe.add(sushiswipe);
		win2.add(sushiswipe);
		win2.open();
});
  sushiScrollView.add(sushiPic);
}

//create image view with loop through repository for bigpic


//event listener for clicking pic



	


	
//create new view for event		
	
	
	



  


 
// });

//console.log(sushiswipe);
//console.log(sushiPicHolder);

//sushiScrollView(sushiswipe);
win1.add(sushiScrollView);
win1.open();

// var nav = Ti.UI.iOS.NavigationWindow({
	// window:win1
// }),
// 
// nav.openWindow();
