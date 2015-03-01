
var win1 = Titanium.UI.createWindow({  
  // backgroundImage:"sushi20.jpg",
  backgroundColor:'orange',
  height:530,
  width:300
});

var win2 = Titanium.UI.createWindow({  
  // backgroundImage:"sushi20.jpg",
  backgroundColor:'brown',
  height:400,
  width:225
});

var sushiFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "sushi");
var sushiFileContent= sushiFile.getDirectoryListing();

console.log(sushiFileContent);


//var pic = Math.round((Math.random()*sushiFileContent.length)+1);

// var pic = Math.round((Math.random()*sushiFileContent.length)+1);
// 
// 
// console.log(sushiPic1);
// 
//  
 // console.log(pic);
 // var x = pic;
 console.log(x);
// sushiPic1.image = sushiFileContent[x]; 
//var sushiPic1= sushiFileContent[x];
console.log(sushiFileContent[x]);
// console.log(sushiPic);
//for(var i = 0; i <=sushiFileContent.length; i++){
	
var pic = Math.round((Math.random()*sushiFileContent.length)+1);
var x = pic;
 
	
var sushiPic = Ti.UI.createImageView({
backgroundImage:"sushi/"+ sushiFileContent[x],
//backgroundColor:"white",
//layout:"horizontal",
top:50,
height:400,
width:225,
});

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
  	var pic = Math.round((Math.random()*sushiFileContent.length)+1);
var x = pic;
 
	
var sushiPic1 = Ti.UI.createImageView({
backgroundImage:"sushi/"+ sushiFileContent[x],
//backgroundColor:"white",
//layout:"horizontal",
top:50,
height:400,
width:225,
});
  	console.log(pic);
  	win2.add(sushiPic1);
  	win2.open();
  });
  
sushiPic.add(win2);

win1.add(button);

//win1.add(sushiPic);


win1.open();

//we want to push button that 

//// var sushirandomfunc = function(){
// 	
	// Math.round((Math.random()*sushiFileContent.length)+1);
// };


