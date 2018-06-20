const cluster=require('cluster');
const http=require('http');
var cpulen=require('os').cpus().length;
if(cluster.isMaster){
	for(var i=0;i<cpulen;i++){
		cluster.fork()
	}
}else{
	http.createServer(function(req,res){
		res.end('hello')
		console.log(cluster.worker.id)
	}).listen(3000)
}