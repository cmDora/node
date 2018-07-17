const cluster=require('cluster');
const fork=require('child_process').fork;
var cpulen=require('os').cpus().length;
var a=0;
var arr=['./a.js','./b.js'];
/*if(cluster.isMaster){
	for(var i=0;i<cpulen;i++){
		var p=cluster.fork();

		p.send(a)
	}
}else{
	process.on('message',function(mes){
		console.log(mes)
	})
}*/

if(cluster.isMaster){
	for(var i=0;i<cpulen;i++){
		if(arr[i]){
			var p=cluster.fork();
			p.send(arr[i])
		}
	}
}else{
	process.on('message',function(mes){
		start(mes)
	})
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