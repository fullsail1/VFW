//create window
var day3win = Titanium.UI.createWindow({
	backgroundColor: "#ddd472",
	height: 560,
	width:315,	
});
//add a custom color



//create view
var day3view = Ti.UI.createView({
					backgroundColor:"#72d2dd",
					width:250,
					height:300,
					bottom:60,
					left:20,
		});
//add event listener

day3view.addEventListener('click',function(event){
	alert("bring it!");
	console.log(event);
});

//add view to window
day3win.add(day3view);
//open window
day3win.open();

