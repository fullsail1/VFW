// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('yellow');

var win1 = Titanium.UI.createWindow({  
    //backgroundImage:'sushi12.jpg',
   // backgroundColor:'green',
    height:deviceH,
 });
    
  var deviceW = Ti.Platform.displayCaps.platformWidth;
console.log(deviceW);

var deviceH = Ti.Platform.displayCaps.platformHeight;
console.log(deviceH);

  
    var splashPic1 = Titanium.UI.createImageView({  
    backgroundColor:'red',
    height:(deviceH)-10 ,
    width:deviceW-10,
  	//window:win1
    
    });
 var splashPic2 = Titanium.UI.createImageView({  
   backgroundColor:'blue',
    height:deviceH-20,
    width:deviceW-20,   
	window:win1
    
    });
    
  	var imageGallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "sushi");
	var imageGalleryList= imageGallery.getDirectoryListing();
	

    
    for (var i = 0; i<imageGalleryList.length; i++){
    
 var splashPic3 = Titanium.UI.createImageView({  
    //Image:"sushi5.jpg",
    
 	Image: "africa_map.gif", 
  //  backgroundColor:'red',
    // height:400,
    // width:150,
  	// right:100,
  	window:win1
    
    });
   //console.log(imageGalleryList[i]);
   splashPic2.add(splashPic3);
    
    }
    var button = Ti.UI.createButton({
    	title: "ENTER HERE",
    	//backgroundImage: "next.jpg",
    	bottom:40,
    	right:50,
    	height:100,
    	width:200,
    	center:160,
    });
     var label = Ti.UI.createLabel({
    	text: "African Tourism and Life Center\n       A division of NADDA",
    
    	//backgroundImage: "next.jpg",
    	top:30,
    	left:30,
    	height:100,
    	width:300,
    	center:160,
    });


var animation = Titanium.UI.createAnimation();
animation.backgroundGradient = '#13blue';
animation.duration = 2000;
animation.repeat = 30;
var animationHandler = function() {
  animation.removeEventListener('complete',animationHandler);
  animation.backgroundColor = 'green';
  button.animate(animation);
};
animation.addEventListener('complete',animationHandler);
button.animate(animation);  
    console.log(button);
   // splashPic2.add(button);
    
button.addEventListener("click", function() {
  require("mainpage");
});

splashPic2.add(label);
splashPic2.add(button); 
splashPic2.add(splashPic3);
splashPic1.add(splashPic2);
win1.add(splashPic1);
win1.open();



