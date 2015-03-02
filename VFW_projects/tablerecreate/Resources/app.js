var mainWin = Ti.UI.createWindow({});

var myData = require("tabluedtat");

 resoursesTable = Ti.UI.createTableView({
	data:myData.section,
	top:"40"
		
});

var sectionAll=[];
//MAKE SECTION
 for (var n in myData.data.resourses) {
  console.log(n);
  var section = Ti.UI.createTableViewSection({
   headerTitle: myData.data.resourses[n].title,
   
 });
  console.log(myData.data.resourses[n].title);
  
  	//MAKE ROW
	 	  for (i=0; i<myData.data.resourses[n].CATEGORIES.length; i++){
	      var row = Ti.UI.createTableViewRow({
	   		//POPULATE ROW
	  		 title: myData.data.resourses[n].CATEGORIES[i],
	  		 	  		 
	  		 font:{fontFamily:"Thonburi"},
	  		}); 
	  		
		section.add(row);
		//row.addEventListener("click",function(event){

var a = Ti.UI.createImageView({
	backgroundImage : "test45.jpg",
	top:25,
	height:350,
	width:200,
	
});
	var opts = {

    cancel: 2,
  options: ['Access Now', 'DIRECTIONS', 'Cancel'],
  selectedIndex: 2,
  destructive: 0,
  title: 'Access to these amenites costs $19.99 a month!'
};


row.addEventListener('click', function(e){
  var dialog = Ti.UI.createOptionDialog(opts).show();
});


	
	}  
//ADD ROW TO SECTION  

sectionAll.push(section);
}







//console.log(myData.data.resourses[0].price);


	
resoursesTable.setData(sectionAll);         
mainWin.add(resoursesTable);
mainWin.open();