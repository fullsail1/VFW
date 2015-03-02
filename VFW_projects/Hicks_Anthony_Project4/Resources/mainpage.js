var pWidth = Ti.Platform.displayCaps.platformWidth;
console.log(pWidth);

var pHeight = Ti.Platform.displayCaps.platformHeight;
console.log(pHeight);

// create base UI tab and root window
//
var winMainPage = Titanium.UI.createWindow({  
    backgroundColor:'gray',
    height:pHeight,
    width:pWidth
});


 
     var label = Ti.UI.createLabel({
    	text: "African Tourism and Life Center\n       A division of NADDA",
    
    	//backgroundImage: "next.jpg",
    	top:20,
    	left:30,
    	height:100,
    	width:300,
   	//center:160,
    });


var label1 = Titanium.UI.createLabel({
	
	color:'green',
	text:'UPCOMING EVENTS',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'200',
	height:"155",
	top:50
});

			
		//labels
		label1.addEventListener('dblclick',function(){
	alert("Please check out some upcoming community events!");
	require("imagbin");
	
});

 
 var label2 = Titanium.UI.createLabel({ 	
 	 color:"red",
	 text:'RESOURCE NETWORK',
	 font:{fontSize:20,fontFamily:'Helvetica Neue'},
	 textAlign:'center',
	 width:'200',
	 heigth:"155"
});
var enterLabel = Ti.UI.createLabel({
		backgroundImage:"squirrel.png",
		width:75,
		height:75,
		left:100,
		bottom:150,	
	});	
			
		//labels
		enterLabel.addEventListener('dblclick',function(){
	alert("WELCOME TO TONY'S\nWe LOOOOVVVEEE NUTS'!");
	require("project1");
	
	
});

 var label3 = Titanium.UI.createLabel({
	 color:'black',
	 text:'SPECIAL ATTRIBUTES',
	 font:{fontSize:20,fontFamily:'Helvetica Neue'},
	 textAlign:'center',
	 width:'200',
	 height:"155",
	 bottom:75
 });
 
// var gotoPageLabel = Ti.UI.createLabel({
		// backgroundImage:"openicon1.jpg",
		// width:75,
		// height:75,
		// left:100,
		// bottom:150,	
	// });	
			
		//labels
		label3.addEventListener('dblclick',function(){
	//alert("Now for some FUN!!!\n Please Press any image you like!");
	require("special");
	
	
});
 
 
 
 
//winMainPage.add(gotoPageLabel); 
winMainPage.add(label); 
winMainPage.add(label3);
winMainPage.add(label2);
winMainPage.add(label1);

winMainPage.open();
