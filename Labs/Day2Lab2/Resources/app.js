//what are we doing

//create : variable, Array, Object, function, 

//application
//Tony's Nuts..... Shop
//title & background color or image
var bgc1 = Titanium.UI.createWindow({
	backgroundColor: "#D8CEF6",
	height: 560,
	width:315,	
});
var bgc = Titanium.UI.createWindow({
	backgroundColor: "#D8CEF6",
	height: 560,
	width:315,	
});

//array
var nutArray = ["cashewees", "peekincans", "walsnuts", "cocoloconuts"];
var picArray = ["cashews.png", "pecans.png", "walnuts.png", "coconuts.png"];
var count = 0;
//views
var storeview = Ti.UI.createLabel({
	text:"Tony's Nuts.....Shop",
	font: {fontFamily: "HoeflerText-BlackItalic" },
	fontSize: 25,
	top:40,
	
});
var storeview1 = Ti.UI.createLabel({
	text:"Tony's Nuts.....Shop",
	font: {fontFamily: "HoeflerText-BlackItalic" },
	fontSize: 25,
	top:40,
	
});
//one view should contain a label
	//label should get text value from array
		//give unique background color, text color and font style
			//call this Array Label
			
	
		
				
			
				var picSwirl = Ti.UI.createView({
					backgroundImage: picArray[0],
					width:120,
					height:100,
					bottom:250,
					left:100,
					
					
				});
		
//			console.log(picArray);
			var arrayLabel1 = Ti.UI.createLabel({
				
				text:nutArray[0] +" Is the featured Nut of the month",
				left:10,
				top:150,
				
			});
			var arrayLabel = Ti.UI.createLabel({
				
				text:nutArray[0] +" Is the featured Nut of the month",
				left:10,
				top:150,
				
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
bgc.add(picSwirl);
bgc.add(arrayLabel1);
bgc.add(enterLabel);
bgc.add(storeview1);
bgc.open();
//require("project1");

		
		
		
		
                                                                                                                                                           