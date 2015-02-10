//initial window	

var win = Ti.UI.createWindow({
	backgroundColor:"yellow",
	width:318,
	height:558,
});

//data

//var bluntArray = ["swishers", "game", "backwoods", "dutches", "papers"];

var bluntList = [
{title:"swishers"},
{title: "game"}, 
{title: "backwoods"},
{title: "dutches"},
{title: "papers"}
];

//
var drinksList = [
{title: "redbull"},
{title: "monster"},
{title: "fourloco"},
{title: "pimpjuice},
];

var bluntTable = Ti.UI.createTableView({
	data:"bluntList",
	backgroundColor:"#8e2f4f",
	headerTitle:"Groceries",
	top:20,
	Width:300,
	Height:500
	                                                    
});

var bluntSection = Ti.UI.createTableViewSection({
	headerTitle: SMOKES
});
var drinkSection = Ti.UI.createTableViewSection({
	headerTitle: "DRANKS"
});

var systemName = Ti.Platform.name;
if (systemName === "")
console.log(systemname);


//output


win.add(bluntTable);
win.open();
