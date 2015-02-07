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
//array
var array = ["cashewees", "peekincans", "walsnuts", "cocoloconuts"];
//views
var storeview = Ti.UI.createLabel({
	text:"Tony's Nuts.....Shop",
	font: {fontFamily: "HoeflerText-BlackItalic" },
	fontSize: 25,
	top:40,
	
});
//one view should contain a label
	//label should get text value from array
		//give unique background color, text color and font style
			//call this Array Label
			
	var picArray = ["jacket.jpg", "roseshirt.jpg", "soldiermotif.jpg", "tigershirt.jpg"];
		
			for (var p=0; p<picArray.length; p++){
				
			
				var picSwirl = Ti.UI.createView({
					backgroundImage: picArray[p],
					width:120,
					height:100,
					bottom:60,
					left:20,
					
					
				});
			}
			console.log(picArray);
			var arrayLabel = Ti.UI.createLabel({
				
				text:array[0] +" Is the featured Nut of the month",
				left:10,
				top:150,
				
			});
			
				
		
			
		//labels
		
		
		
		
		
				//two views with label next & previous(space appropriately)
		var labelprevious = Ti.UI.createView({
			backgroundImage:"previous.jpg",
			bottom : 10,
			height: 40,
			width: 115,
			left: 5,
			
		});		
				
		var labelnext = Ti.UI.createView({
			backgroundImage:"next.jpg",
			bottom : 10,
			height: 40,
			width: 115,
			right: 5,
		//	borderColor:"red",
			
		});		
		labelprevious.addEventListener('click', function() {
			console.log(picArray[p]);
		});	
//callbacks
bgc1.add(picSwirl);
bgc1.add(arrayLabel);
bgc1.add(labelnext);
bgc1.add(labelprevious);
bgc1.add(storeview);
bgc1.open();                                                                                                                                                                      