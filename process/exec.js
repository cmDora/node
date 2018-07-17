const exec=require('child_process').exec;
const iconv=require('iconv-lite');
const util=require('util');
const execFile=require('child_process').execFile;
//第一个参数	要执行的内容
//第二个参数	指定编码
/*exec('dir',{"encoding":"binary"},function(err,stdout,stderr){
	//进行解码
	var str=iconv.decode(stdout,'GBK')
	console.log(str)
})*/
/*function copy(src,dest){
	exec(util.format('xcopy %s %s /e',src,dest),function(err,stdout,stderr){
		if(err){
			console.log(err)
		}else{
			console.log('copy ok')
		}
	})
}
copy('files','filescopy')*/



//可以用回调函数  也可以用事件监听
/*var p=exec('dir',{'encoding':"binary"});
p.stdout.on('data',function(chunk){
	var str=iconv.decode(chunk,'GBK')
	console.log(str)
})*/


/*execFile('copy.cmd',function(err,stdout,stderr){
	if(!err)console.log('copy ok');
})*/