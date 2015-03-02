var win1 = Titanium.UI.createWindow({  
  backgroundImage:"tree_bark.png",
  backgroundColor:'orange',
  height:530,
  width:300
});

var win2 = Titanium.UI.createWindow({  
  // backgroundImage:"africa20.jpg",
  //backgroundColor:'brown',
  height:400,
  width:225
});

var africaFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "africa");
var africaFileContent= africaFile.getDirectoryListing();

console.log(africaFileContent);
 console.log(x);
console.log(africaFileContent[x]);

var pic = Math.round((Math.random()*africaFileContent.length)+1);
var x = pic;
 


var button = Ti.UI.createButton({
    	title: "CLICK HERE",
    	backgroundColor: "green",
    	bottom:15,
    	right:50,
    	height:50,
    	width:130,
    	center:160
  });
  
  button.addEventListener("click", function(pic){
  	var pic = Math.round((Math.random()*africaFileContent.length)+1);
var x = pic;
 
	
var africaPic1 = Ti.UI.createImageView({
backgroundImage:"africa/"+ africaFileContent[x],
//backgroundColor:"white",
//layout:"horizontal",
top:50,
height:400,
width:225,
});
  	console.log(pic);
  	win2.add(africaPic1);
  	win2.open();
  });

win1.add(button);

win1.open();
