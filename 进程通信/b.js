process.on('message',function(data){
	console.log(data.toString())
	process.send('子进程发送的消息')
})
