/*process.on('message',function(data){
	console.log(data.toString())
})*/
const http=require('http');
http.createServer(function(req,res){
	res.end('hello')
}).listen(3000)
console.log('localhost 3000')