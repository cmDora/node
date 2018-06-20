const http=require('http');
for(var i=0;i<10;i++){
	var req=http.get('http://localhost:3000',function(res){
		res.on('data',function(chunk){
			console.log(chunk.toString())
		});
		req.end()
	})
}
