Ti.UI.setBackgroundColor('white');

var win = Ti.UI.createWindow({
	title: 'Click window to test',
   backgroundImage: 'test45.jpg',
    top: 25,
    height:400,
    width:300,
  exitOnClose: true,
  fullscreen: false
	
	
});


var opts = {

    cancel: 2,
  options: ['Pay Now', 'DIRECTION', 'Cancel'],
  selectedIndex: 2,
  destructive: 0,
  title: 'First come first seating?'
};


win.addEventListener('click', function(e){
  var dialog = Ti.UI.createOptionDialog(opts).show();
});
win.open();
// var tableData = [];
// 
// var win = Ti.UI.createWindow({ backgroundColor: 'white' });
// 
// var table = Ti.UI.createTableView({ objName: 'table' });
// 
// for (var i = 0; i <= 20; i++){
  // var row = Ti.UI.createTableViewRow({
    // className: 'row',
    // objName: 'row',
    // touchEnabled: true,
    // height: 100
  // });
//   
  // var enabledWrapperView = Ti.UI.createView({
    // backgroundColor:'#008FD5',
    // objName: 'enabledWrapperView',
    // rowID: i,
    // width: Ti.UI.FILL, height: '100%'
  // });
//   
  // var disabledWrapperView = Ti.UI.createView({
    // backgroundColor:'#A2E0FF',
    // objName: 'disabledWarpperView',
    // touchEnabled: false,
    // width: 300, height: '80%'
  // });
  // enabledWrapperView.add(disabledWrapperView);
//   
  // var label = Ti.UI.createLabel({
    // backgroundColor:'#313F48',
    // color: 'white',
    // objName: 'label',
    // text: i,
    // touchEnabled: false,
    // left: 0,
    // width: 200
  // });
  // disabledWrapperView.add(label);
//   
  // row.add(enabledWrapperView);
  // tableData.push(row);
// }
// 
// table.setData(tableData);
// 
// table.addEventListener('swipe', function(e){
  // if (e.source && e.source.objName !== 'table'){
    // Ti.API.info('Row swiped: ' + e.source);
    // Ti.API.info('Row swiped: ' + e.source.objName);
    // Ti.API.info('Row ID : ' + e.source.rowID);
  // }
// });
// 
// win.add(table);
// win.open();
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 






// 
// Ti.UI.setBackgroundColor('#000');
// var win = Ti.UI.createWindow({
  // backgroundColor: 'black',
  // exitOnClose: true,
  // fullscreen: false,
  // title: 'TableView Demo'
// });
// 
// // generate random number, used to make each row appear distinct for this example
// function randomInt(max){
  // return Math.floor(Math.random() * max) + 1;
// }
// 
// var IMG_BASE = 'https://github.com/appcelerator/titanium_mobile/raw/master/demos/KitchenSink/Resources/images/';
// var defaultFontSize = Ti.Platform.name === 'android' ? 16 : 14;
// 
// var tableData = [];
// 
// for (var i=1; i<=20; i++){
  // var row = Ti.UI.createTableViewRow({
    // className:'forumEvent', // used to improve table performance
    // selectedBackgroundColor:'white',
    // rowIndex:i, // custom property, useful for determining the row during events
    // height:110
  // });
//   
  // var imageAvatar = Ti.UI.createImageView({
    // image: IMG_BASE + 'custom_tableview/user.png',
    // left:10, top:5,
    // width:50, height:50
  // });
  // row.add(imageAvatar);
//   
  // var labelUserName = Ti.UI.createLabel({
    // color:'#576996',
    // font:{fontFamily:'Arial', fontSize:defaultFontSize+6, fontWeight:'bold'},
    // text:'Fred Smith ' + i,
    // left:70, top: 6,
    // width:200, height: 30
  // });
  // row.add(labelUserName);
//   
  // var labelDetails = Ti.UI.createLabel({
    // color:'#222',
    // font:{fontFamily:'Arial', fontSize:defaultFontSize+2, fontWeight:'normal'},
    // text:'Replied to post with id ' + randomInt(1000) + '.',
    // left:70, top:44,
    // width:360
  // });
  // row.add(labelDetails);
//   
  // var imageCalendar = Ti.UI.createImageView({
    // image:IMG_BASE + 'custom_tableview/eventsButton.png',
    // left:70, bottom: 2,
    // width:32, height: 32
  // });
  // row.add(imageCalendar);
//   
  // var labelDate = Ti.UI.createLabel({
    // color:'#999',
    // font:{fontFamily:'Arial', fontSize:defaultFontSize, fontWeight:'normal'},
    // text:'on ' + randomInt(30) + ' Nov 2012',
    // left:105, bottom:10,
    // width:200, height:20
  // });
  // row.add(labelDate);
//   
  // tableData.push(row);
// }
// 
// var tableView = Ti.UI.createTableView({
  // backgroundColor:'white',
  // data:tableData
// });
// 
// win.add(tableView);
// win.open();





































// // this sets the background color of the master UIView (when there are no windows/tab groups on it)
// Titanium.UI.setBackgroundColor('#000');
// 
// // create tab group
// var tabGroup = Titanium.UI.createTabGroup();
// 
// 
// //
// // create base UI tab and root window
// //
// var win1 = Titanium.UI.createWindow({  
    // title:'Tab 1',
    // backgroundColor:'#fff'
// });
// var tab1 = Titanium.UI.createTab({  
    // icon:'KS_nav_views.png',
    // title:'Tab 1',
    // window:win1
// });
// 
// var label1 = Titanium.UI.createLabel({
	// color:'#999',
	// text:'I am Window 1',
	// font:{fontSize:20,fontFamily:'Helvetica Neue'},
	// textAlign:'center',
	// width:'auto'
// });
// 
// win1.add(label1);
// 
// //
// // create controls tab and root window
// //
// var win2 = Titanium.UI.createWindow({  
    // title:'Tab 2',
    // backgroundColor:'#fff'
// });
// var tab2 = Titanium.UI.createTab({  
    // icon:'KS_nav_ui.png',
    // title:'Tab 2',
    // window:win2
// });
// 
// var label2 = Titanium.UI.createLabel({
	// color:'#999',
	// text:'I am Window 2',
	// font:{fontSize:20,fontFamily:'Helvetica Neue'},
	// textAlign:'center',
	// width:'auto'
// });
// 
// win2.add(label2);
// 
// 
// 
// //
// //  add tabs
// //
// tabGroup.addTab(tab1);  
// tabGroup.addTab(tab2);  
// 
// 
// // open tab group
// tabGroup.open();
