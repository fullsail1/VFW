

var winSA = Titanium.UI.createWindow({  
    backgroundImage:'paisley.png'
});


var saPic1 = Ti.UI.createImageView({
	image:"africa_1.jpg",
	top:10,
	height:170,
	width:147.5,
	right:10
});
saPic1.addEventListener("click", function(event){
	var matrix = Ti.UI.create2DMatrix();
  matrix = matrix.rotate(150);
  matrix = matrix.scale(5, 5);
  var a = Ti.UI.createAnimation({
    transform : matrix,
    duration : 3000,
    autoreverse : true,
    repeat : 5
  
  });
  
  saPic1.animate(a);
//test to see if there is an event and whats its contents

});
var saPic2 = Ti.UI.createImageView({
	image:"africa_2.jpg",
	
	height:170,
	width:147.5,
	right:10
});
saPic2.addEventListener("click", function(event){
	var matrix = Ti.UI.create2DMatrix();
  matrix = matrix.rotate(360);
  matrix = matrix.scale(5, 0);
  var a = Ti.UI.createAnimation({
    transform : matrix,
    duration : 1000,
    autoreverse : true,
    repeat : 3
  
  });
  
  saPic2.animate(a);
//test to see if there is an event and whats its contents

});
var saPic3 = Ti.UI.createImageView({
	image:"africa_3.jpg",
	bottom:10,
	height:170,
	width:147.5,
	right:10
});
saPic3.addEventListener("click", function(event){
	var matrix = Ti.UI.create2DMatrix();
  matrix = matrix.rotate(90);
  matrix = matrix.scale(5, 5);
  var a = Ti.UI.createAnimation({
    transform : matrix,
    duration : 2000,
    autoreverse : true,
    repeat : 6
  
  });
  
  saPic3.animate(a);
//test to see if there is an event and whats its contents

});
var saPic4 = Ti.UI.createImageView({
	image:"africa_4.jpg",
	top:10,
	height:170,
	width:147.5,
	left:10
});
saPic4.addEventListener("click", function(event){
	var matrix = Ti.UI.create2DMatrix();
  matrix = matrix.rotate(270);
  matrix = matrix.scale(1, 2);
  var a = Ti.UI.createAnimation({
    transform : matrix,
    duration : 3000,
    autoreverse : true,
    repeat : 5
  
  });
  
  saPic4.animate(a);
//test to see if there is an event and whats its contents

});
var saPic5 = Ti.UI.createImageView({
	image:"africa_5.jpg", 
	
	height:170,
	width:147.5,
	left:10
});
saPic5.addEventListener("click", function(event){
	var matrix = Ti.UI.create2DMatrix();
  matrix = matrix.rotate(-300);
  matrix = matrix.scale(5, 3);
  var a = Ti.UI.createAnimation({
    transform : matrix,
    duration : 3000,
    autoreverse : false,
    repeat : 5
  
  });
  
  saPic5.animate(a);
//test to see if there is an event and whats its contents

});
var saPic6 = Ti.UI.createImageView({
	image:"africa_6.jpg", 
	
	height:170,
	width:147.5,
	left:10,
	bottom:10,
});
saPic6.addEventListener("click", function(event){
	var matrix = Ti.UI.create2DMatrix();
  matrix = matrix.rotate(-150);
  matrix = matrix.scale(2, 5);
  var a = Ti.UI.createAnimation({
    transform : matrix,
    duration : 3000,
    autoreverse : true,
    repeat : 5
  
  });
  
  saPic6.animate(a);
//test to see if there is an event and whats its contents

});


winSA.add(saPic6);
winSA.add(saPic4);
winSA.add(saPic3);
winSA.add(saPic2);
winSA.add(saPic1);
 winSA.add(saPic5);
// winSA.add(saPic);
winSA.open();