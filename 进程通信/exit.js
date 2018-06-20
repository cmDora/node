var fork=require('child_process').fork;
var p=fork('./a.js');
setTimeout(function(){
	p.kill()
},3000)

p.on('exit',function(code){
	console.log('程序已退出 %d',code)
})