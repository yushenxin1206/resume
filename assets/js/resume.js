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
	
	/*时间控制*/
	var time=1500;
	
	/*步数记录*/
	var step=1;
		
	/*屏幕中央显示选择框*/
	$tpan.hide();
	$typing.addClass( "col-md-offset-5 myhover");
	
	/*点击看看*/
	$(".yes").click(function(){
		$tpp.hide(300).html("第一步，我们先建个空白的页面。").show(300);
		$tpa.hide().html(tpanHtm);
		$resume.html("<h1>我是空白页面</h1>").height("100vh");//生成空白页面
		
		//显示空白页
		setTimeout(function(){
			$typing.removeClass("col-md-offset-5 myhover");
			$resume.removeClass("myhidden");
			$tpa.show(200);
			step++;
		},time);
	});
	
	/*下一步事件*/
	$tpa.on("click",".next",function(){
		switch(step){
			case 2:
				step2();
			break;
			case 3:
				step3();
			break;
			default:
			break;
		}
	});
	
	
	/**
	*每一步的函数
	*/
	
	/*第二步 收缩空白页*/
	function step2(){
		$typing.addClass( "myhover");
		$resume.addClass("myhover");
		$tpp.hide(300).html("第二步，我们按简历格式顺序塞入相关信息。").show(300);
		$tpa.hide(300);
	}
	/*第三步 显示简单简历*/
	function step3(){
		$resume.html(resHtm).height("auto");
		$typing.removeClass("myhover");
		$resume.removeClass("myhover");
	}
	
});