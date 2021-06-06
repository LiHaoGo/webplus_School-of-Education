$(function(){
	/*主大图切换*/
	$(".mbanner .focus").sudyfocus({      
		p:2,
		zWidth:1145,
		zHeight:406,
		title:{
			isAutoWidth: true,
			active:true
		},
		 text:{
			 active: false,
			 isAutoHeight: false,
			 href: false
		},
		response: true,
		speed:700, 
		pagination: true,
		navigation: true,
		isNavHover: false,
		href:true,
		effect: 'fade'
	});
	/*新闻图片切换*/
	$(".post-11 .focus").sudyfocus({      
		p:11,      
		zWidth:362,      
		zHeight:253,  
		title:{        
			isAutoWidth: false,
			active:true      
		},  
		 text: {        
			 active: false,
			 isAutoHeight: false,   
			 href: false 
		},  
		response: true,     
		speed:700, 
		pagination: true,
		navigation: true,
		isNavHover: false,
		href:true,
		effect: 'fade'
	});
	
	/*新闻tab切换*/
	$(".post-33").sudyTab({
		handle:".tit .title",
		content:".con .boxm,.more_btn .more_text",		
		trigger:"mouseenter",
		start:1,
		autoPlay:{
			active:false
		}
	});	
	
	/*友情链接下拉*/
	$(".botlinks").each(function(index, el){
		$(el).find(".links-wrap").hover(function(){
			$(this).addClass('wrap-open').children('.link-items').stop(true,true).slideDown(300);
		},function(){
			$(this).removeClass('wrap-open').children('.link-items').stop(true,true).slideUp(100);
		});
	});
//   导航栏定位
$(window).scroll(function () {
	var scrollTop=$(window).scrollTop();
	if(scrollTop>100 && $(window).width()>1000){
		$('#nav').addClass('fixed')
		$('.wp-window ').addClass('top')
	}else{
		$('#nav').removeClass('fixed')
		$('.wp-window ').removeClass('top')
	}
	 if(scrollTop > 100){
		 $('.moveTop').css({
			 top:'-150px'
		 });
		 $('#banner').css({
			filter:"blur(2px)"
			
		 });

	 }else{
		$('.moveTop').css({
			top:'0px'
		});
		$('#banner').css({
			filter:"blur(0px)"
			
		 });
	 }
});

});
