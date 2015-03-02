
var win = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'red'
});


var view = Titanium.UI.createView({
  backgroundColor:'red',
  backgroundImage:"sushi20.jpg",
  height:300,
  width: 200
  
});
 var button = Ti.UI.createButton({
    	title: "ENTER HERE",
    	backgroundImage: "next.jpg",
    	bottom:50,
    	right:50,
    	height:100,
    	width:100,
    	center:160,
    });
    
// var box = Ti.UI.createView({
  // backgroundImage : "africa_1.jpg",
  // backgroundColor:"yellow",
  // left:"20",
  // height : '400',
  // width : '250'
// });
win.add(button);

button.addEventListener('click', function() {
  var matrix = Ti.UI.create2DMatrix();
  matrix = matrix.rotate(150);
  matrix = matrix.scale(3, 3);
  var a = Ti.UI.createAnimation({
    transform : matrix,
    duration : 3000,
    autoreverse : true,
    repeat : 5
  });
  button.animate(a);
});

view.addEventListener('click', function() {
  var matrix = Ti.UI.create2DMatrix();
  matrix = matrix.rotate(240);
  matrix = matrix.scale(1, 2);
  var a = Ti.UI.createAnimation({
    transform : matrix,
    duration : 2000,
    autoreverse : true,
    repeat : 2
  });
  view.animate(a);
});


// var animation = Titanium.UI.createAnimation();
// animation.backgroundColor = 'black';
// animation.duration = 1000;
// animation.repeat= 25;
// var animationHandler = function() {
  // animation.removeEventListener('complete',animationHandler);
  // animation.backgroundColor = 'orange';
  // view.animate(animation);
// };
// animation.addEventListener('complete',animationHandler);
// view.animate(animation);

win.add(button);
win.add(view);
win.open();


















































// 
// var win2 = Titanium.UI.createWindow({
    // backgroundColor: 'red',
    // title: 'Red Window'
// });
// 
// var win1 = Titanium.UI.iOS.createNavigationWindow({
   // window: win2,
// 
// });
// 
// var win3 = Titanium.UI.createWindow({
    // backgroundColor: 'blue',
    // title: 'Blue Window'
// });
// var win4 = Titanium.UI.createWindow({
    // //window:win1,
    // backgroundColor: 'green',
    // title: 'green Window'
// });
// 
// var button = Titanium.UI.createButton({
    // title: 'Open Blue Window'
// });
// button.addEventListener('click', function(){
    // win1.openWindow(win3, {animated:true});
// });
// 
// win2.add(button);
// var button2 = Titanium.UI.createButton({
    // title: 'Open green Window'
// });
 // button2.addEventListener('click', function(){
    // win1.openWindow(win4, {animated:false}); //win3.close() will also work!!
// });
// var button3 = Titanium.UI.createButton({
    // title: 'Close green Window'
// });
// button3.addEventListener('click', function(){
    // win4.openWindow(win4, {animated:true});
 // });   
// 
    // win4.add(button3);
// var button3 = Titanium.UI.createButton({
    // title: 'Close green Window'
// });
// button3.addEventListener('click', function(){
    // win1.closeWindow(win4, {animated:false}); //win3.close() will also work!!
// });
// 
// 
// win4.add(button3);
// win3.add(button2);
// win3.add(win4);
// win1.open();
// 
// 
// 
// 





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
