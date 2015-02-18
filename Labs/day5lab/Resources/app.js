
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});

var listView = Ti.UI.createListView({
	top:35,
	
});
var sections = [];

var watchSection1 = Ti.UI.createListSection({ 
	headerTitle: 'Watches1'
	

});
var watchDataSet1 = [
    {properties: { title: 'Digital', "make": "chronologic", "bezel": "chrome", "band": "plastic", "dial": "numeric"}},
 //   {properties: { title: 'Classic',"make": "chronologic", "bezel": "chrome", "band": "plastic", "dial": "numeric"}},
];
watchSection1.setItems(watchDataSet1);
sections.push(watchSection1);

var watchSection2 = Ti.UI.createListSection({ headerTitle: 'Watches2'});
var watchDataSet2 = [
//    {properties: { title: 'Digital', "make": "chronologic", "bezel": "chrome", "band": "plastic", "dial": "numeric"}},
    {properties: { title: 'Classic',"make": "chronologic", "bezel": "chrome", "band": "plastic", "dial": "numeric"}},
];
watchSection2.setItems(watchDataSet2);
sections.push(watchSection2);


listView.sections = sections;
win1.add(listView);
win1.open();
