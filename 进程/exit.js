function showMenu(){
	console.log("1. show menu")

	console.log("2. clear screen")

	console.log("3. quit")
}
showMenu()
function clear(){
	process.stdout.write("\033[0f");
	process.stdout.write("\033[2J");
}
process.stdin.on('data',function(chunk){
	var input=chunk.toString().trim();
	if(input=='1'){
		showMenu()
	}else if(input=='2'){
		clear()
	}else{
		//退出当前进程
		process.exit()
	}
})