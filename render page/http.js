var http = require('http'),
	fs = require('fs'),
	url = require('url'),
	path = require('path');
var MINE = {
	".html":"text/html",
	".css":"text/css",
	".js":"text/js"
};
var server = http.createServer(function(req,res){
	var urls = url.parse(req.url).pathname,
		urlPath = pathname('./waterfall/',urls);
	writeFile(urlPath.pathname,function(err,data){
		if(err){
			res.writeHead(404);
			res.end(err.toString());
		}else{
			res.writeHead(200,{
				"content-type":urlPath.mime
			})
			res.end(data);
		}
	})
})
function writeFile(url,callback){
	fs.readFile(url,function(err,data){
		if(err){
			callback(err);
		}else{
			callback(null,data);
		}
	})
}
function pathname(root,url){
	var urlname = path.join(root,url);
	return {
		mime:MINE[path.extname(urlname)],//path.extname()截取后缀名
		pathname:urlname
	}
}
server.listen(8082,function(){
	console.log('this is 8082');
})
/**
 * 首先在服务器端获取url，
 * 之后判断要浏览文件的类型，
 * 在打开文件用fs，显示在页面上
 */