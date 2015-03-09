// Hicks, Athony
//Project 2
//2015029studentU

var mainWin = Ti.UI.createWindow({});

var myData = require("data");

 seatTable = Ti.UI.createTableView({
	data:myData.section,
	top:"40"
		
});

var sectionAll=[];
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
	
	var a = Ti.UI.createImageView({
	backgroundImage : "test45.jpg",
	top:25,
	height:350,
	width:200,
	
});
	var opts = {

    cancel: 2,
  options: ['Pay Now', 'DIRECTION', 'Cancel'],
  selectedIndex: 2,
  destructive: 0,
  title: 'Premium = $125, Medium = $45, Economy '
};


row.addEventListener('click', function(e){
  var dialog = Ti.UI.createOptionDialog(opts).show();
});


	 
	}   
//ADD ROW TO SECTION  

sectionAll.push(section);
}

	
seatTable.setData(sectionAll);         
mainWin.add(seatTable);
mainWin.open();