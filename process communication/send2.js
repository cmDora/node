const net=require('net');
const fork=require('child_process').fork;
var p=fork('./c.js');
net.createServer(function(socket){
	p.send('ser',socket)
}).listen(3000,function(){
	console.log('listen 3000')
})
