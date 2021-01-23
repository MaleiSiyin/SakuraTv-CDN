$(function(){
	//DD_belatedPNG.fix("#main, img,background");
	if($.browser.msie&&$.browser.version=="6.0"){ DD_belatedPNG.fix("#main, img,background");}
	
	var t1_1,t1_2,t1_3,t1_4,t1_5,t2_1,t2_2,t2_3,t2_4,t2_5,t3_1,t3_2,t3_3,t3_4,t3_5,t3_6,t3_7,t3_8,t3_9;
	function clear_animation(){
			clearTimeout(t1_1);
			clearTimeout(t1_2);
			clearTimeout(t1_3);
			clearTimeout(t1_4);
			clearTimeout(t1_5);
			clearTimeout(t2_1);
			clearTimeout(t2_2);
			clearTimeout(t2_3);
			clearTimeout(t2_4);
			clearTimeout(t2_5);
			clearTimeout(t3_1);
			clearTimeout(t3_2);
			clearTimeout(t3_3);
			clearTimeout(t3_4);
			clearTimeout(t3_5);
			clearTimeout(t3_6);
			clearTimeout(t3_7);
			clearTimeout(t3_8);
			clearTimeout(t3_9);
	}
	function banner1(){
		clear_animation();
		//banner1的logo和slogan进入动画
		t1_3=setTimeout('$("#banner_wrap1 .banner_logo").css({"-moz-transform":"translate(360px,390px) rotate(0deg)","-moz-transition":"all 1000ms cubic-bezier(0.58, 0.3, 0.5, 0.98) 0s","-o-transform":"translate(360px,390px) rotate(0deg)","-o-transition":"all 1000ms cubic-bezier(0.58, 0.3, 0.5, 0.98) 0s","-webkit-transform":"translate(360px,390px) rotate(0deg)","-webkit-transition":"all 1000ms cubic-bezier(0.58, 0.3, 0.5, 0.98) 0s"});$("#banner_wrap1 .banner_slogan").css({"-moz-transform":"translateX(-100px)","-moz-transition":"all 1000ms cubic-bezier(0.51, 0.01, 0.37, 0.98) 0s","-o-transform":"translateX(-100px)","-o-transition":"all 1000ms cubic-bezier(0.51, 0.01, 0.37, 0.98) 0s","-webkit-transform":"translateX(-100px)","-webkit-transition":"all 1000ms cubic-bezier(0.51, 0.01, 0.37, 0.98) 0s","opacity":"1"})',1000);
		//banner1的logo和slogan飞出动画
		t1_4=setTimeout('$("#banner_wrap1 .banner_logo").css({"-moz-transform":"translate(1100px,-350px) rotate(90deg)","-moz-transition":"all 1500ms cubic-bezier(0.57, 0.32, 0.63, 0.91) 0s","-o-transform":"translate(1100px,-350px) rotate(90deg)","-o-transition":"all 1500ms cubic-bezier(0.57, 0.32, 0.63, 0.91) 0s","-webkit-transform":"translate(1100px,-350px) rotate(90deg)","-webkit-transition":"all 1500ms cubic-bezier(0.57, 0.32, 0.63, 0.91) 0s"})',4500);
		t1_5=setTimeout('$("#banner_wrap1 .banner_slogan").css({"-moz-transition":"all 500ms cubic-bezier(0.51, 0.01, 0.37, 0.98) 0s","-webkit-transition":"all 500ms cubic-bezier(0.51, 0.01, 0.37, 0.98) 0s","-o-transition":"all 500ms cubic-bezier(0.51, 0.01, 0.37, 0.98) 0s","opacity":"0"})',4000);
		//图标回初始位置
		setTimeout('$("#banner_wrap1 .banner_logo").css({"left":"-270px","top":"-350px","-moz-transition":"none","-moz-transform":"none","-moz-transform":"rotate(90deg)","-webkit-transform":"rotate(90deg)","-o-transform":"rotate(90deg)"});$("#banner_wrap1 .banner_slogan").css({"left":"510px","top":"100px","opacity":"0","-moz-transition":"none","-moz-transform":"none","-webkit-transition":"none","-webkit-transform":"none","-o-transition":"none","-o-transform":"none"})',6000);
		//切换banner
		t1_1=setTimeout('$("#banner_wrap1").fadeOut(1000),$("#switch2").css({"background-position":"0 0"}),$("#banner_wrap3").fadeIn(1000),$("#switch3").css({"background-position":"-10px 0"})',5000);
		t1_2=setTimeout(function(){banner3();},5000);
	}
	
	function banner2(){
		clear_animation();
		//banner2的logo和slogan进入动画
		var slia1=function(){
			$("#banner_wrap2 .shark").css({"-moz-transform":"translateY(600px)","-moz-transition":"all 1200ms cubic-bezier(0.57, 0.32, 0.63, 0.91) 0s","-webkit-transform":"translateY(600px)","-webkit-transition":"all 1200ms cubic-bezier(0.57, 0.32, 0.63, 0.91) 0s","-o-transform":"translateY(600px)","-o-transition":"all 1200ms cubic-bezier(0.57, 0.32, 0.63, 0.91) 0s"});
			
			$("#banner_wrap2 .picon").css({"-moz-transform":"translateY(-600px)","-moz-transition":"all 1200ms cubic-bezier(0.57, 0.32, 0.63, 0.91) 0s","-webkit-transform":"translateY(-600px)","-webkit-transition":"all 1200ms cubic-bezier(0.57, 0.32, 0.63, 0.91) 0s","-o-transform":"translateY(-600px)","-o-transition":"all 1200ms cubic-bezier(0.57, 0.32, 0.63, 0.91) 0s"});		
		};
		t2_3=setTimeout(slia1,500);
		var slia2=function(){			
			$("#banner_wrap2 .pback").css({"-moz-transition":"all 700ms ease-in-out 0s","-webkit-transition":"all 700ms ease-in-out 0s","-o-transition":"all 700ms ease-in-out 0s","opacity":"1"});

			$("#banner_wrap2 .banner_slogan").css({"-moz-transform":"translateX(-100px)","-moz-transition":"all 700ms cubic-bezier(0.51, 0.01, 0.37, 0.98) 0s","-o-transform":"translateX(-100px)","-o-transition":"all 700ms cubic-bezier(0.51, 0.01, 0.37, 0.98) 0s","-webkit-transform":"translateX(-100px)","-webkit-transition":"all 700ms cubic-bezier(0.51, 0.01, 0.37, 0.98) 0s","opacity":"1"});			
		};
		t2_4=setTimeout(slia2,1200);

		setTimeout('$("#banner_wrap2 .picon").css({"-moz-transform":"translateY(-600px) rotate(30deg)","-moz-transition":"all 2400ms linear 0s","-webkit-transform":"translateY(-600px) rotate(30deg)","-webkit-transition":"all 2400ms linear 0s","-o-transform":"translateY(-600px) rotate(30deg)","-o-transition":"all 2400ms linear 0s"})',1700);

		//banner2的logo和slogan飞出动画

		setTimeout('$("#banner_wrap2 .banner_slogan").css({"-moz-transition":"all 700ms ease-in-out 0s","-webkit-transition":"all 700ms ease-in-out 0s","-o-transition":"all 700ms ease-in-out 0s","opacity":"0"})',3600);
		var slib=function(){
			$("#banner_wrap2 .shark").css({"-moz-transform":"translateY(1200px)","-moz-transition":"all 1200ms ease-in-out 0s","-webkit-transform":"translateY(1200px)","-webkit-transition":"all 1200ms ease-in-out 0s","-o-transform":"translateY(1200px)","-o-transition":"all 1200ms ease-in-out 0s"});
			
			$("#banner_wrap2 .picon").css({"-moz-transform":"translate(0,0)","-moz-transition":"all 1200ms ease-in-out 0s","-webkit-transform":"translate(0,0)","-webkit-transition":"all 1200ms ease-in-out 0s","-o-transform":"translate(0,0)","-o-transition":"all 1200ms ease-in-out 0s"});
			
			$("#banner_wrap2 .pback").css({"opacity":"0"});
		};
		t2_5=setTimeout(slib,4200);

		//图标回到初始位置
		
		var slic=function(){
			$("#banner_wrap2 .shark").css({"opacity":"1","-moz-transition":"none","-moz-transform":"none","-webkit-transition":"none","-webkit-transform":"none","-o-transition":"none","-o-transform":"none"});
			$("#banner_wrap2 .picon").css({"opacity":"1","-moz-transition":"none","-moz-transform":"none","-webkit-transition":"none","-webkit-transform":"none","-o-transition":"none","-o-transform":"none"});
			$("#banner_wrap2 .pback").css({"-moz-transition":"none","-moz-transform":"none","-webkit-transition":"none","-webkit-transform":"none","-o-transition":"none","-o-transform":"none"});
			$("#banner_wrap2 .banner_slogan").css({"-moz-transition":"none","-moz-transform":"none","-webkit-transition":"none","-webkit-transform":"none","-o-transition":"none","-o-transform":"none"});
		};
		setTimeout(slic,4800);
		//切换banner
		t2_1=setTimeout('$("#banner_wrap2").fadeOut(1000),$("#switch1").css({"background-position":"0 0"}),$("#banner_wrap1").fadeIn(1000),$("#switch2").css({"background-position":"-10px 0"})',5000);
		t2_2=setTimeout(function(){banner1();},5000);
	}
	
	function banner3(){
	    clear_animation();
		t3_3=setTimeout('$("#product_name").fadeOut(1000)',0);
		$("#product_download").fadeIn(1000); 
		//banner3进入动画
		t3_4=setTimeout('$("#accelerate").css({"-moz-transform":"translate(0,-325px)","-moz-transition":"all 500ms ease-in-out 0s","-webkit-transform":"translate(0,-325px)","-webkit-transition":"all 500ms ease-in-out 0s","-o-transform":"translate(0,-325px)","-o-transition":"all 500ms ease-in-out 0s"});',1000);
		t3_5=setTimeout('$("#banner3_main").css({"-moz-transform":"translate(0,-375px)","-moz-transition":"all 600ms ease-in-out 0s","-webkit-transform":"translate(0,-375px)","-webkit-transition":"all 600ms ease-in-out 0s","-o-transform":"translate(0,-375px)","-o-transition":"all 600ms ease-in-out 0s"});',1500);
		//banner3提示弹出动画
		t3_6=setTimeout('$("#info4").css({"-moz-transform":"translateY(-100px)","-moz-transition":"all 700ms ease-in-out 0s","-webkit-transform":"translateY(-100px)","-webkit-transition":"all 700ms ease-in-out 0s","-o-transform":"translateY(-100px)","-o-transition":"all 700ms ease-in-out 0s","opacity":"1"});',1600);
		
		//banner3飞出动画
		t3_7=setTimeout('$("#info4").css({"opacity":"0"})',5500);
		t3_8=setTimeout('$("#accelerate").css({"-moz-transform":"translate(0,0)","-moz-transition":"all 500ms ease-in-out 0s","-webkit-transform":"translate(0,0)","-webkit-transition":"all 500ms ease-in-out 0s","-o-transform":"translate(0,0)","-o-transition":"all 500ms ease-in-out 0s"});',6200);
		t3_9=setTimeout('$("#banner3_main").css({"-moz-transform":"translate(0,0)","-moz-transition":"all 600ms ease-in-out 0s","-webkit-transform":"translate(0,0)","-webkit-transition":"all 600ms ease-in-out 0s","-o-transform":"translate(0,0)","-o-transition":"all 600ms ease-in-out 0s"});',6000);
		
		//图标回初始位置
		setTimeout('$("#accelerate").css({"-moz-transition":"none","-moz-transform":"none","-webkit-transition":"none","-webkit-transform":"none","-o-transition":"none","-o-transform":"none"}),$("#banner3_main").css({"-moz-transition":"none","-moz-transform":"none","-webkit-transition":"none","-webkit-transform":"none","-o-transition":"none","-o-transform":"none"}),$("#info4").css({"-moz-transition":"none","-moz-transform":"none","-webkit-transition":"none","-webkit-transform":"none","-o-transition":"none","-o-transform":"none"})',6700);
		
		//切换banner
		t3_1=setTimeout('$("#product_name").fadeIn(1000),$("#product_download").fadeOut(1000),$("#banner_wrap3").fadeOut(1000),$("#switch3").css({"background-position":"0 0"}),$("#banner_wrap2").fadeIn(1000),$("#switch1").css({"background-position":"-10px 0"})',6600);
		t3_2=setTimeout(function(){banner2()},6600);

	}
	function get_vertion(version_str){var version_array = version_str.split(',');return parseFloat(version_array[0]+'.'+version_array[1]);}
	
	if(($.browser.mozilla&&get_vertion($.browser.version)>=3.5)||($.browser.webkit&&get_vertion($.browser.version)>=3.1)||($.browser.opera&&get_vertion($.browser.version)>=10.5)||($.browser.safari&&get_vertion($.browser.version)>=3.1)){
		banner2();

		
		//底部波浪动画
		function waveloop1(){
			$("#banner_bolang_bg_1").css({"left":"-236px"}).animate({"left":"-1233px"},25000,'linear',waveloop1);
		}
		function waveloop2(){
			$("#banner_bolang_bg_2").css({"left":"0px"}).animate({"left":"-1009px"},60000,'linear',waveloop2);
		}
		waveloop1();
		waveloop2();
		$("#switch1").click(function(){
			
			$("#product_name").show();
			$("#product_download").hide();
			$("#switch1").css({"background-position":"-10px 0"});
			$("#switch2").css({"background-position":"0 0"});
			$("#switch3").css({"background-position":"0 0"});
			$("#banner_wrap1").fadeOut(1000);
			$("#banner_wrap3").fadeOut(1000);
			$("#banner_wrap2").fadeIn(1000);
			banner2();
		});
		$("#switch2").click(function(){
			$("#product_name").show();
			$("#product_download").hide();
			$("#switch2").css({"background-position":"-10px 0"});
			$("#switch1").css({"background-position":"0 0"});
			$("#switch3").css({"background-position":"0 0"});
			$("#banner_wrap2").fadeOut(1000);
			$("#banner_wrap3").fadeOut(1000);
			$("#banner_wrap1").fadeIn(1000);
			banner1();
		});
		$("#switch3").click(function(){
			$("#switch3").css({"background-position":"-10px 0"});
			$("#switch2").css({"background-position":"0 0"});
			$("#switch1").css({"background-position":"0 0"});
			$("#banner_wrap2").fadeOut(1000);
			$("#banner_wrap1").fadeOut(1000);
			$("#banner_wrap3").fadeIn(1000);
			banner3();
		});
	}
	else{
		$(".banner_box").addClass("fallback");
		var ie_t1_1,ie_t1_2,ie_t2_1,ie_t2_2,ie_t3_1,ie_t3_2
		$("#switch1").click(function(){
			$("#banner_wrap1").hide();
			$("#banner_wrap3").hide();
			clearTimeout(ie_t3_2);
			clearTimeout(ie_t2_2);
			ie_banner2();
		});
		$("#switch2").click(function(){
			$("#banner_wrap2").hide();
			$("#banner_wrap3").hide();	
			clearTimeout(ie_t1_2);
			clearTimeout(ie_t3_2);
			ie_banner1();
		});
		$("#switch3").click(function(){
			$("#banner_wrap2").hide();
			$("#banner_wrap1").hide();
			clearTimeout(ie_t1_2);
			clearTimeout(ie_t2_2);
			ie_banner3();
		});
		function ie_banner1(){
			$("#product_name").show();
			$("#product_download").hide();
			$("#switch2").css({"background-position":"-10px 0"});
			$("#switch1").css({"background-position":"0 0"});
			$("#switch3").css({"background-position":"0 0"});
			$("#banner_wrap2").fadeOut(0);
			if($.browser.version=="8.0"){$("#banner_wrap1").show()}else{$("#banner_wrap1").fadeIn(300);}
			ie_t1_2=setTimeout(function(){ie_banner3();},5000);
		}
		function ie_banner2(){
			$("#product_name").show();
			$("#product_download").hide();
			$("#switch1").css({"background-position":"-10px 0"});
			$("#switch2").css({"background-position":"0 0"});
			$("#switch3").css({"background-position":"0 0"});			
			$("#banner_wrap3").fadeOut(0);
			if($.browser.version=="8.0"){$("#banner_wrap2").show()}else{$("#banner_wrap2").fadeIn(300);}
			ie_t2_2=setTimeout(function(){ie_banner1();},5000);
		}
		function ie_banner3(){
			if($.browser.version=="6.0"){
				$("#product_name").show();
				$("#product_download").hide();
			}else{
				$("#product_name").hide();
				$("#product_download").show();
			}
		    
			$("#switch3").css({"background-position":"-10px 0"});
			$("#switch2").css({"background-position":"0 0"});
			$("#switch1").css({"background-position":"0 0"});
			$("#banner_wrap1").fadeOut(0);
			if($.browser.version=="8.0"){$("#banner_wrap3").show()}else{$("#banner_wrap3").fadeIn(300);}
			ie_t3_2=setTimeout(function(){ie_banner2();},5000);
		}
		
		ie_banner2();
	}
	
});