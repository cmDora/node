var http = require('http'),
	path = require('path'),
	url = require('url');
	fs = require('fs');
var mine = {
	'.html':'text/html',
	'.css':'text/css',
	'.js':'text/js'
}
http.createServer(function(req,res){
	var urls = url.parse(req.url).pathname;
	var urlname = urlPath('./lunbo/',urls);
	fs.readFile(urlname.pathname,function(err,data){
		if(err){
			res.writeHead(404);
			res.end('err in index.html');
		}else{
			res.writeHead(200,{
				'Content-Type':urlname.text
			});
			res.end(data);
		}
	})
}).listen(8089);
function urlPath( root, url ){
	var urls = path.join( root, url );
	return {
		'text':mine[path.extname(urls)],
		'pathname':urls
	}
}
