//device size
var pWidth = Ti.Platform.displayCaps.platformWidth;
console.log(pWidth);


//window
var tvscreen = Ti.UI.createWindow({
	// backgroundGradient:  {
		// type:"linear",
		// startPoint{x:"69", y: "500"}
		// endPoint{x:"500 ,y: "59"},
		// color:"red"
		
		
	backgroundColor:"ffffff",
	
});

//loops
// var myPhoto = [
// "green_cup.png",
// "paisley.png"
// ];
var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "patterns");
var gallerylist= gallery.getDirectoryListing();
console.log(gallerylist);


var myStation = Ti.UI.createScrollView({
	layout: "horizontal",
	contentWidth:pWidth

});
	
for (var i=0 ; i<gallerylist.length ; i++){
	
	//image constraints
	
	
	
	
	
		
	
var myShow = Ti.UI.createImageView({
	Image:"patterns/"+ gallerylist[i],
	height:300
	
	


});

myStation.add(myShow);

}

//images



//loop
// for (i=0; i<5; i++){
	// var channel = Ti.UI.createView({
		// var size = i*10;
// var numberOfViews = d    		
// 		
	// backgroundColor: "blue",
	// width: 100,
	// height: 100,
	// left: 10,
	// right:0,
// 	
// 	
// });
		// var newChannel=Ti.UI.createLabel({
	// color:"#000",
	// text: "square = +1,;"
	// font:{
		// fontSize:typeSize,
		// }
// })
// }
// //views
// 
// 
// //add

//open

tvscreen.add(myStation);
tvscreen.open();