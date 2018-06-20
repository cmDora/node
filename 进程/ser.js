const http=require('http');
const fs=require('fs');
var ser=http.createServer(function(req,res){
	res.writeHead(200,{'contenet-type':'text/html;chatset=utf-8'});
	if(req.url!='/favicon.ico')
	fs.createReadStream('./'+req.url).pipe(res)
}).listen(3000)
console.log('localhost 3000')