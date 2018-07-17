const spawn=require('child_process').spawn;

/*var p=spawn('node',['./a.js']);
p.stdout.on('data',function(chunk){
	console.log(chunk.toString())
})*/
console.log(process.argv)
var p=spawn('node',['./input.js']);
p.stdout.on('data',function(chunk){
	console.log(chunk.toString())
})
p.stdin.write('残局°');
p.stdin.end()