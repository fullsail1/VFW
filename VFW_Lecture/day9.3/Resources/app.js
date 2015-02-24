
var win1 = Titanium.UI.createWindow({  
    
    backgroundColor:'#fff'
});


var view = Ti.UI.createView({
	width:150,
	height:150,
	borderColor:"ccc",	
	
});
var photo = Ti.UI.createImageView({
	image:"images14.jpeg",
	width:'40',
	height:200
});

win1.add(view);
win1.add(photo);
win1.open();



var pWidth = Ti.Platform.displayCaps.platformWidth;
console.log(pWidth);
var numOfItems = 20;
var itemSize = pWidth/4;


var win1 = Titanium.UI.createWindow({  
 //   title:"My first Window",
    backgroundColor:'#fff'
});
//what is the goal?

//Create a window that displays an image gallery that opens when the app is loaded.

//Images should be pulled directly from the applications resources (or a subdirectory) 
 //folder using appropriate methods.

//whats feeding the viewer....the location of the pictures of the cars..


var carGallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "cars");
var carGalleryList= carGallery.getDirectoryListing();
console.log(carGalleryList);



//Gallery must be composed of no less than 20 thumbnails. 
//Gallery must be scrollable.

// create scroll view
var myCarInventoryView = Ti.UI.createScrollView({
	layout: "horizontal",
	contentWidth:pWidth+10
});
//what are we looking at in this scroll view
// below is the veiwer..or window to the inventory

//loop through 

 for (var i = 0; i<carGalleryList.length; i++){

var myCarShower = Ti.UI.createImageView({
	Image:"cars/"+ carGalleryList[i],
	height:100,
	width:75




});

myCarInventoryView.add(myCarShower);

}








win1.add(myCarInventoryView);


// var label1 = Titanium.UI.createLabel({
	// color:'#999',
	// text:'I am Window 1',
	// font:{fontSize:20,fontFamily:'Helvetica Neue'},
	// textAlign:'center',
	// width:'auto'
// });

//win1.add(label1);
// 
// //
// // create controls tab and root window
// //
// var win2 = Titanium.UI.createWindow({  
    // title:'Tab 2',
    // backgroundColor:'#fff'
// });


win1.open();


