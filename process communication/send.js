const fork=require('child_process').fork;
var p=fork('./b.js');
p.send('主进程发送的消息');
p.on('message',function(mes){
	console.log('主进程接受：'+mes)
})