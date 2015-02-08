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
		});
			
		labelprevious.addEventListener('click', function() {
			if (count == 0){
				count = 3;
				
			}else{
				count--;
			}
			arrayLabel.text=nutArray[count];
			picSwirl.backgroundImage=picArray[count];
			
		});	
			labelnext.addEventListener('click', function() {
			if (count == 3){
				count = 0;
				
			}else{
				count++;
			}
			arrayLabel.text=nutArray[count];
			picSwirl.backgroundImage=picArray[count];
	});
	var homeLabel = Ti.UI.createLabel({
		backgroundImage:"home.jpg",
		width:15,
		height:15,
		right:20,
		top:20,	
	});	
			
		//labels
		homeLabel.addEventListener('click',function(){
    bgc1.close();	
	
	
});
					//two views with label next & previous(space appropriately)
		
		//	borderColor:"red",
			
	
//callbacks
bgc1.add(homeLabel);
bgc1.add(picSwirl);
bgc1.add(arrayLabel);
bgc1.add(labelnext);
bgc1.add(labelprevious);
bgc1.add(storeview);
bgc1.open();           