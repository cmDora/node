process.on('message',function(mes,socket){
	if(mes=='ser'){
		socket.on('data',function(chunk){
			console.log(chunk.toString().trim())
		})
	}
})