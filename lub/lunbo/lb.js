$(function(){
	var imgW = $('.box').width();
	var timer = null,
		count = -1;
	$('ol').on('mouseover','li',function(){
		count = $(this).index();
		$(this).addClass('show').siblings().removeClass('show')
		$('.img').stop().animate({'margin-left':-imgW*count},1000)
	})
	function auto(){
		timer = setInterval(function(){
			count++;
			if(count>$('.img>img').length-1){
				count = 0;
			}
			change();
		},1500)
	}
	auto();
	function change(){
		$('ol>li').eq(count).addClass('show').siblings().removeClass("show");
		$('.img').stop().animate({'margin-left':-imgW*count},700)
	}
	$('.box').hover(function(){
		clearInterval(timer);
	},function(){
		auto();
	})
	$('.l').on('click',function(){
		count--;
		if(count<0){
			count = $('.img>img').length-1;
		}
		change();
	})
	$('.r').on('click',function(){
		count++;
		if(count>$('.img>img').length-1){
			count = 0;
		}
		change();
	})
})