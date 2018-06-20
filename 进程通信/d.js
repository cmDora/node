/*process.on('message',function(mes,ser){
	if(mes=='ser'){
		ser.on('connection',function(socket){
			socket.on('data',function(chunk){
				console.log(chunk.toString())
			})
			socket.write('子进程')
		});
		ser.listen(3000,function(){
			console.log('listen 3000')
		});
	}
})*/
//------------------------------------------------------------------------------------------------------
const http=require('http');
var ser1=http.createServer(function(req,res){
	res.end('canju')
})
//转发服务
process.on('message',function(mes,ser){
	if(mes=='ser'){
		ser.on('connection',function(socket){
			ser1.emit('connection',socket)
		})
	}
})