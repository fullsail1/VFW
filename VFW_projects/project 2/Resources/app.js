// Hicks, Athony
//Project 2
//2015029studentU



//housekeeping
var myData = require("data");
//background window
 var sectionAll=[];

mainWin = Ti.UI.createWindow({
	backgroundColor:"#AB9CDE",
	
	width:310,
	height:550,

});


 
 seatTable = Ti.UI.createTableView({
	data:myData.section,
	top:"40"
	
	
});
//MAKE SECTION
 for (var n in myData.data.seats) {
  console.log(n);
  var section = Ti.UI.createTableViewSection({
   headerTitle: myData.data.seats[n].title,
   
   
   
   
   
   

  });
  console.log(myData.data.seats[n].title);
  
  	//MAKE ROW
	 	  for (i=0; i<myData.data.seats[n].SeatNumber.length; i++){
	      var row = Ti.UI.createTableViewRow({
	   		//POPULATE ROW
	  		 title: myData.data.seats[n].SeatNumber[i],
	  		 	  		 
	  		 font:{fontFamily:"Thonburi"},
	  		}); 
	  		
		section.add(row);
	}  
//ADD ROW TO SECTION  

sectionAll.push(section);

	}
	var pictest = Ti.UI.createImageView({
		backgroundImage:"test45.jpg",
		top: "50",
		bottom:"50"
		
		
	});
	
	
	
mainWin.add(pictest);	
seatTable.setData(sectionAll);         
mainWin.add(seatTable);
mainWin.open();

