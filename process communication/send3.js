const net=require('net');
const fork=require('child_process').fork;
//多个监听的时候   会存在竞争
/*var ser=net.createServer(function(socket){
	socket.on('data',function(chunk){
		console.log(chunk.toString())
	})
	socket.write('主进程1')
});
var	p=fork('./d.js');
ser.on('connection',function(socket){
	socket.on('data',function(chunk){
		console.log(chunk.toString())
	})
	socket.write('主进程2')
})

ser.listen(3000,function(){
	p.send('ser',ser)
})*/

//------------------------------------------------------------------------------------------------------
//监听委托
var ser=net.createServer();
var p=fork('./d.js');
ser.listen(3000,function(){
	p.send('ser',ser)
})