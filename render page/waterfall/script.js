window.onload=function(){
	waterfall('main','box');//刷新时
	var jsons={//对象来保存值
			arr:[
				{'src':'images/25.jpg'},
				{'src':'images/26.jpg'},
				{'src':'images/28.jpg'},
				{'src':'images/29.jpg'},
				{'src':'images/30.jpg'},
				{'src':'images/31.jpg'},
				{'src':'images/32.jpg'}
			]
		};
	window.onscroll=function(){//当滑动滚动条时的情况
		if(scrollTop('main','box')){//如果看到最后一张图片一半时，就添加图片
			for(var i=0;i<jsons.arr.length;i++){
				var main=document.getElementById('main'),
				box=document.createElement('div'),
				pic=document.createElement('div'),
				imgs=document.createElement('img');
				box.className='box';
				pic.className='pic';
				main.appendChild(box);
				box.appendChild(pic);
				pic.appendChild(imgs);
				imgs.src=jsons.arr[i].src;
			}
		}
		waterfall('main','box');
	}
}
function scrollTop(parent,box){//滚动条情况
	var oParent=document.getElementById(parent),
		oBox=getClass(box);
	var lastHeight=oBox[oBox.length-1].offsetHeight/2+oBox[oBox.length-1].offsetTop,//最后一张图片一半往上的高度
		sTop=document.body.scrollTop||document.documentElement.scrollTop,//滚动条距离顶部的高度
		wHeight=document.body.clientHeight||document.documentElement.clientHeight;//可视区域的高度
	if(lastHeight<=sTop+wHeight){//如果小于等于的话
		return true;
	}else{
		return false;
	}
}
function waterfall(parent,box){
	var oParent=document.getElementById(parent),
		oBox=getClass(box);
		oBoxWidth=oBox[0].offsetWidth;//一张图片的宽度
		wWidth=document.body.clientWidth||document.documentElement.clientWidth;//可视区域的宽度
	var num=Math.floor(wWidth/oBoxWidth);//一行放入图片的张数
	oParent.style.width=num*oBoxWidth+'px';//大盒子的宽度
	var arr=[];
	for(var i=0;i<oBox.length;i++){ 
		if(i<num){
			arr.push(oBox[i].offsetHeight);//第一行图片的高度
		}else{
			var min=Math.min.apply(null,arr);//最小值
			var index=inArray(arr,min);//最小值的下标
			oBox[i].style.cssText=`position:absolute;top:${min}px;left:${index*oBoxWidth}px`;//改变图片的位置
			arr[index]+=oBox[i].offsetHeight;//将高度累加
		}
	}
}
function inArray(arr,min){//最小值
	for(var i=0;i<arr.length;i++){
		if(arr[i]==min){
			return i;
		}
	}
}
function getClass(box){//获取class名字
	var dom=document.getElementsByTagName('*');
	var arr=[];
	for(var i=0;i<dom.length;i++){
		if(dom[i].className==box){
			arr.push(dom[i]);
		}
	}
	return arr;
}