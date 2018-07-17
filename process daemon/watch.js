const fork=require('child_process').fork;
//单个进程守护
/*(function start(){
	var p=fork('./a.js');
	setTimeout(function(){
		p.kill()
	},2000)
	p.on('exit',function(){
		start()
	})
})()*/
//多进程守护
var arr=['./a.js','./b.js'];
for(var i=0;i<arr.length;i++){
	start(arr[i])
}
function start(url){
	var p=fork(url);
	setTimeout(function(){
		p.kill()
	},2000)
	p.on('exit',function(){
		start(url)
	})
}