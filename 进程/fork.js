const fork=require('child_process').fork;
//var p=fork('./a.js');
var p=fork('./ser.js');
console.time('s')
setTimeout(function(){
	p.kill()
	console.timeEnd('s')
},5000)