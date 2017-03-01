$(function(){

	/*获取常用dom节点*/
	var $typing=$(".typing");
	var $resume=$(".resume");
	var $tpp=$(".typing-p");
	var $tpa=$(".typing-a");
	var $tpan=$(".typing-a .next");
	
	/*存储临时数据*/
	var resHtm=$resume.html();
	var tpanHtm='<a class="next center-block">下一步</a>';
		
	/*步数记录*/
	var step=1;
		
	/*屏幕中央显示选择框*/
	$tpan.hide();
	$typing.addClass( "col-md-offset-5 myhover");
	
	/*点击看看*/
	$(".yes").click(function(){
		$tpp.hide(300).html("第一步，我们先建个空白的页面。").show(300);
		$tpa.hide(300,function(){
			$(this).html(tpanHtm).show(300);
			 $("body").keydown(function(event) {    
                    if (event.keyCode == 13) {    
                        $(".next").trigger("click");    
                    }    
                });    
		});
	});
	
	/*下一步事件*/
	$tpa.on("click",".next",function(){
		switch(step){
			case 1: step1(); break; case 2: step2(); break;
			case 3: step3(); break; case 4: step4(); break;
			case 5: step5(); break; case 6: step6(); break;
		    case 7: step7(); break; case 8: step8(); break;
			case 9: step9(); break; case 10: step10(); break;
			default: break;
		}
	});
	
	
	
	/**
	*每一步的函数 每一步阐明理由最重要！！ 对着设计书看讲出理由
	*/
	
	/*第一步 创建空白页*/
	function step1(){
		$resume.html("<h1>我是空白页面</h1>").height("100vh");//生成空白页面
		$typing.removeClass("col-md-offset-5 myhover");
		$resume.removeClass("myhidden");
		step++;
	} 
	
	/*第二步 收缩空白页*/
	function step2(){
		$typing.addClass( "myhover");
		$resume.addClass("myhover");
		$tpp.hide(300).html("第二步，我们按简历格式顺序塞入相关信息。").show(300);
		step++;
	}
	
	/*第三步 显示简单简历*/
	function step3(){
		$resume.html(resHtm).height("auto");
		$typing.removeClass("myhover");
		$resume.removeClass("myhover");
		step++;
	}
	
	/*第四步 调整头像 列表项（导致排版错乱）*/
	function step4(){
		$typing.addClass( "myhover");
		$resume.addClass("myhover");
		$tpp.hide(300).html("第三步，调整头像和列表项。").show(300);
		step++;
	}
	
	/*第五步 显示调整后的简历*/
	function step5(){
	
		/*列表项去装饰*/
		$("ul").addClass("list-unstyled");
		
		/*头像右浮动 信息左浮动*/
		$(".main-bsinf").addClass("pull-left");
		$(".avatar").addClass("pull-right");
		
		/*调整基本信息的列表项*/
		$(".info-list").addClass("list-inline").width("300px");
		$("li").css("margin-top",".5em");
		$(".location").addClass("divider-right");

		$typing.removeClass("myhover");
		$resume.removeClass("myhover");
		step++;
	}
	
	/*第六步 调整间距 加入分隔符*/
	function step6(){
		$typing.addClass( "myhover");
		$resume.addClass("myhover");
		$tpp.hide(300).html("第四步，调整间距 加入分隔符。").show(300);
		step++;
	}
	
	/*第七步 显示调整后的简历*/
	function step7(){
	
		/*插入分隔符*/
		$(".divider").show();
		/*调整二级标题的上下外边距*/
		$(".heading").css("margin","20px 0");
		/*调整同行子项间距*/
		$(".time").css({"display":"inline-block","margin-right":"1em"});
		$(".major").css({"display":"inline-block","margin":"0 1em"});
		$(".work").css({"display":"inline-block","margin-left":"1em"});
		$typing.removeClass("myhover");
		$resume.removeClass("myhover");
		step++;
	}
	
	/*第八步 调整字体和颜色（无衬线字体更好，区分标题和内容（对比原则））*/
	function step8(){
		$typing.addClass( "myhover");
		$resume.addClass("myhover");
		$tpp.hide(300).html("第五步，调整字体和颜色。").show(300);
		step++;
	}
	
	/*第九步 显示调整后的简历*/
	function step9(){
		/* 调整基本字体和颜色 */
		$(".resume").addClass("change-font");
		/*调整标题*/
		$("h1,h2,h3").css({"font-weight": "700","color": "#778492"});
		$(".heading").css("font-size","24px");
		$("h3").css({"font-size":"16px","font-weight": "600"});
		/*调整时间*/
		
		$typing.removeClass("myhover");
		$resume.removeClass("myhover");
		step++;
	}
	
	/*第十步 将个人技能提前*/
	function step10(){
		$typing.addClass( "myhover");
		$resume.addClass("myhover");
		$tpp.hide(300).html("第六步，将个人技能提前。").show(300);
		step++;
	}
	
	/*第十一步 显示修改后的简历*/
	function step10(){
		$typing.addClass( "myhover");
		$resume.addClass("myhover");
		$tpp.hide(300).html("第六步，将个人技能提前。").show(300);
		step++;
	}
	
	/*第十二步 删除多余的元素*/
	function step10(){
		$typing.addClass( "myhover");
		$resume.addClass("myhover");
		$tpp.hide(300).html("第六步，将个人技能提前。").show(300);
		step++;
	}
	
});