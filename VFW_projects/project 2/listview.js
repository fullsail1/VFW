	var pictest = Ti.UI.createImageView({
		backgroundImage:"test45.jpg",
		top: "50",
		bottom:"50"
		
		
	});



var listView = Ti.UI.createListView();

 var section = Ti.UI.createListSection({
   headerTitle: myData.data.seats[n].title,
   
   
   
   
   
   

  });
  console.log(myData.data.seats[n].title);
  
  for (i=0; i<myData.data.seats[n].SeatNumber.length; i++){
	      var item = Ti.UI.createListItem({
	   		//POPULATE ROW
	  		 title: myData.data.seats[n].SeatNumber[i],
	  		 	  		 
	  		 font:{fontFamily:"Thonburi"},
	  		}); 
	  		
		section.add(item);
	}  
	
	
		
mainWin.add(pictest);	
listView.sections=sections;       
mainWin.add(listview);
mainWin.open();









