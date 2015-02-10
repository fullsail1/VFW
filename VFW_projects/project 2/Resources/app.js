// Hicks, Athony
//Project 2
//2015029studentU



//housekeeping

//background window
mainWin = Ti.UI.createWindow({
	backgroundColor:"#AB9CDE",
	
	width:310,
	height:550,

});

//choose topic and collect information



//create arrays 
var cheapSeatArray  = ["100", "101", "102", "103", "104"];
var mediumSeatArray = ["200", "201", "202", "203", "204"];
var premiumSeatArray = ["300", "301", "302", "303", "304"];


//create table
var seatingTable = Ti.UI.createTableView({
	headerTitle: "Seating Chart",
	data: [],
	top: 30
	
}); 
//seating table      

		//table sections
		var seatTypeCheap = Ti.UI.createTableViewSection({
			headerTitle:"Cheap SEATS",
			
		});
		 var seatTypeMedium = Ti.UI.createTableViewSection({
			 headerTitle:"Medium SEATS",
 			
		 });
		 var seatTypePremium = Ti.UI.createTableViewSection({
			 headerTitle:"Premium SEATS",
 			
		 });
		//cheap
		//premium
		//medium
						 	//table rows
						 	for (i=0; i<cheapSeatArray.length; i++){
						 	var cheapRow = Ti.UI.createTableViewRow({
						 		title:cheapSeatArray[i],
						 	});
						 		
						 	
						 	  seatTypeCheap.add(cheapRow);
						 	  }                                        
						 	  for (i=0; i<mediumSeatArray.length; i++){
						 	var mediumRow = Ti.UI.createTableViewRow({
						 		title:mediumSeatArray[i],
						 	});
						 		
						 	
						 	  seatTypeMedium.add(mediumRow);
						 	  }      
						 	  for (i=0; i<premiumSeatArray.length; i++){
						 	var premiumRow = Ti.UI.createTableViewRow({
						 		title:premiumSeatArray[i],
						 	});
						 		
						 	
						 	  seatTypePremium.add(premiumRow);
						 	  }                                                                                                                                                
						 	//cheap seats 300 - 305
						 	//medium seats 200 - 205
						 	//premium seats 100 - 105
var myArray = [seatTypeCheap, seatTypeMedium, seatTypePremium ];
seatingTable.setData(myArray);


mainWin.add(seatingTable);
mainWin.open();                                                                                               