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
	
		/*Global*/
		finalHtm='<div class="resume col-md-8 col-sm-12 col-xs-12 change-font col-md-offset-2" style="height: auto; padding: 60px 30px;">								<div class="basic-info resume-parts">					<div class="main-bsinf pull-left" style="margin-top: 10px;">						<h2 class="name" style="font-weight: 700; color: rgb(119, 132, 146);">周涛</h2>						<div class="content">							<ul class="info-list list-unstyled list-inline" style="width: 300px;">								<li class="age" style="margin-top: 0.5em;">24岁</li>								<li class="location divider-right" style="margin-top: 0.5em;">武汉</li>								<li class="education" style="margin-top: 0.5em;">硕士</li>								<li class="type" style="margin-top: 0.5em;">应届毕业生</li>								<li class="phone" style="margin-top: 0.5em;">13006194411</li>								<li class="email" style="margin-top: 0.5em;">yushenxin@foxmail.com</li>							</ul>						</div>  					</div>					<!--<img width="150" height="150" class="avatar pull-right" src="./assets/images/profile.png" alt="avatar">	-->			</div>								<hr class="divider" style="display: block;">								<div class="edu-exp resume-parts">					<h2 class="heading" style="margin: 20px 0px; font-weight: 700; color: rgb(119, 132, 146); font-size: 24px;">教育经历</h2>					<ul class="list-unstyled">						<li class="sub-edu-exp" style="margin-top: 0.5em;"><span class="time" style="display: inline-block; margin-right: 1em; color: rgb(119, 132, 146); font-weight: 500;">2015.09 - 至今</span>华中科技大学  						<span class="major" style="display: inline-block; margin: 0px 1em;">信息工程</span>硕士（保送）</li>						<li class="sub-edu-exp" style="margin-top: 0.5em;"><span class="time" style="display: inline-block; margin-right: 1em; color: rgb(119, 132, 146); font-weight: 500;">2011.09 - 2015.06</span>  华中科技大学						<span class="major" style="display: inline-block; margin: 0px 1em;">电子信息工程</span>本科</li>					</ul>				</div>								<hr class="divider" style="display: block;">								<div class="skills resume-parts"><h2 class="heading" style="margin: 0px 0px 20px; font-weight: 700; color: rgb(119, 132, 146); font-size: 24px;">个人技能</h2>						<div id="stats-echarts" class="web-skills pull-left" _echarts_instance_="1488440140176" style="height: 423.5px; width: 508.2px; -webkit-tap-highlight-color: transparent; user-select: none; background-color: rgba(0, 0, 0, 0);"><div style="position: relative; overflow: hidden; width: 508px; height: 424px;"><div data-zr-dom-id="bg" style="position: absolute; left: 0px; top: 0px; width: 508px; height: 424px; user-select: none;"></div><canvas width="1016" height="848" data-zr-dom-id="0" style="position: absolute; left: 0px; top: 0px; width: 508px; height: 424px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></canvas><canvas width="1016" height="848" data-zr-dom-id="_zrender_hover_" style="position: absolute; left: 0px; top: 0px; width: 508px; height: 424px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></canvas></div></div>						<div class="other-skills pull-right" style="height: 423.5px; width: 333.8px;"><h3>其他技能</h3>					<ul class="list-unstyled"><li>英语CET6</li><li>计算机四级网络工程师</li>					<li>熟悉图像处理算法</li><li>熟悉性格色彩学</li></ul></div></div><hr class="divider" style="display: block;"><div class="projects-exp resume-parts">					<h2 class="heading" style="margin: 20px 0px; font-weight: 700; color: rgb(119, 132, 146); font-size: 24px;">项目经历</h2>						<h3 style="font-weight: 600; color: rgb(119, 132, 146); font-size: 16px;">						<span class="time" style="display: inline-block; margin-right: 1em; color: rgb(119, 132, 146); font-weight: 600;">2016.11 - 2017.01</span>海关车辆监控系统  						<span class="work" style="display: inline-block; margin-left: 1em;">前端开发</span></h3>						<p class="pro-disc">借助百度鹰眼平台实时监控车辆行进情况，货物状态。实时显示车辆轨迹，并将传感器数据可视化，对异常情况进行实时预警。						</p>						<h3 style="font-weight: 600; color: rgb(119, 132, 146); font-size: 16px;"><span class="time" style="display: inline-block; margin-right: 1em; color: rgb(119, 132, 146); font-weight: 600;">2015.10 - 2016.06</span>货币鉴伪及冠字号识别系统 							<span class="work" style="display: inline-block; margin-left: 1em;">算法编写（组长）</span></h3>						<p class="pro-disc">提取货币不同光谱下的防伪特征，通过鉴伪点是否与真币一致判断真伪。提取冠字号的字符特征进行分类并识别字符。						</p>						<h3 style="font-weight: 600; color: rgb(119, 132, 146); font-size: 16px;"><span class="time" style="display: inline-block; margin-right: 1em; color: rgb(119, 132, 146); font-weight: 600;">2014.07 - 2014.08</span>基于微信的家庭监控系统							<span class="work" style="display: inline-block; margin-left: 1em;">前端开发（组长）</span></h3>						<p class="pro-disc">借助微信公众平台和七牛云平台对室内情况进行实时监控。监控系统将包含环境信息的监控图像上传至七牛云，用户通过微信实时查看。						</p>									</div>								<hr class="divider" style="display: block;">								<div class="prizes resume-parts">					<h2 class="heading" style="margin: 20px 0px; font-weight: 700; color: rgb(119, 132, 146); font-size: 24px;">获奖情况</h2>					<ul class="list-unstyled">												<li class="sub-prizes" style="margin-top: 0.5em;"><span class="time" style="display: inline-block; margin-right: 1em; color: rgb(119, 132, 146); font-weight: 500;">2015.06</span>华中科技大学“优秀毕业生”</li>						<li class="sub-prizes" style="margin-top: 0.5em;"><span class="time" style="display: inline-block; margin-right: 1em; color: rgb(119, 132, 146); font-weight: 500;">2015.06</span>华中科技大学启明学院荣誉学生</li>						<li class="sub-prizes" style="margin-top: 0.5em;"><span class="time" style="display: inline-block; margin-right: 1em; color: rgb(119, 132, 146); font-weight: 500;">2012.10</span>华中科技大学“XILINX-依元素杯”三等奖</li>											</ul>				</div>																								<hr class="divider" style="display: block;">								<div class="self-appr resume-parts">					<h2 class="heading" style="margin: 20px 0px; font-weight: 700; color: rgb(119, 132, 146); font-size: 24px;">自我评价</h2>					<p>热爱web前端和设计，喜欢钻研，十分向往简单美好的事物，有一颗积极向上的心，具有团队合作精神。</p>				</div></div>			';
		/*Global*/
		showFinal=function(){
			$resume.prop("outerHTML",finalHtm);
			
			/*设置图区宽高*/
			var width=$(".skills").width();
			$("#stats-echarts").height(0.5*width);
			$("#stats-echarts").width(0.6*width);
			/*设置其他技能区宽高*/
			$(".other-skills").height(0.5*width);
			$(".other-skills").width(0.4*width-5);

			setEcharts();
			
			$(".typing").hide(300);
			$(".resume").addClass("col-md-offset-2");
		}
	
	/*步数记录*/
	var step=1;
		
	/*屏幕中央显示选择框*/
	if($(window).width()<769){
		showFinal();
	}else{
		$tpan.hide();
		$typing.addClass( "col-md-offset-5 myhover");
	}
	
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
	/*我就不看*/
	$(".no").click(showFinal);
	
	/*下一步事件*/
	$tpa.on("click",".next",function(){
		switch(step){
			case 1: step1(); break; case 2: step2(); break;
			case 3: step3(); break; case 4: step4(); break;
			case 5: step5(); break; case 6: step6(); break;
		    case 7: step7(); break; case 8: step8(); break;
			case 9: step9(); break; case 10: step10(); break;
			case 11: step11(); break; case 12: step12(); break;
			case 13: step13(); break; case 14: step14(); break;
			case 15: step15(); break; case 16: step16(); break;
			default: break;
		}
	});
	
	
	
	/**
	*每一步的函数 每一步阐明理由最重要！！ 对着设计书看讲出理由 最后可以给个对比
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
		$tpp.hide(300,function(){
			$(this).html("第二步，我们按简历格式顺序塞入相关信息。").show(300);
		});
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
		$tpp.hide(300,function(){
			$(this).html("唉，惨不忍睹！我们先调整下信息列表吧。").show(300);
		});
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
		$tpp.hide(300,function(){
			$(this).html("嗯，这下好多了，但各个块之间分隔还不够明显，我们接下来调整下间距，加入分隔符。").show(300);
		});
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
		$tpp.hide(300,function(){
			$(this).html("看着有点太朴素了，我们调整下标题颜色以便和内容对比大些，将字体改为无衬线字体，看着更舒服。").show(300);
		});
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
		$(".time").css({"color":"#778492","font-weight": "500"});
		$("h3 .time").css({"font-weight": "600"});
		
		$typing.removeClass("myhover");
		$resume.removeClass("myhover");
		step++;
	}
	
	/*第十步 将个人技能提前*/
	function step10(){
		$typing.addClass( "myhover");
		$resume.addClass("myhover");
		$tpp.hide(300,function(){
			$(this).html("嗯，有模有样了，接下来我们把HR大大们关心的“个人技能”提前显示，以便一眼就能看到。").show(300);
		});
		step++;
	}
	
	/*第十一步 显示修改后的简历*/
	function step11(){
		
		var skillHtm='<div class="skills resume-parts">'+$(".skills").html()+'</div><hr class="divider"\
					style="display: block;" />';
		//注意顺序
		$(".skills").prev("hr").remove();
		$(".skills").remove();//必须在添加前remove 否则会把添加的移除
		var a=$(".projects-exp").before(skillHtm);
		
		$typing.removeClass("myhover");
		$resume.removeClass("myhover");
		step++;
	}
	
	/*第十二步 美化个人技能部分*/
	function step12(){
		$typing.addClass( "myhover");
		$resume.addClass("myhover");
		$tpp.hide(300,function(){
			$(this).html("看文字多累呀，我们把个人技能部分改为图表吧，既漂亮又直观。").show(300);
		});
		step++;
	}
	
	/*第十三步 显示修改后的简历*/
	function step13(){
		
		/*修改后的skill区域*/
		var skillHtm='<h2 class="heading">个人技能</h2>\
						<div id="stats-echarts" class="web-skills pull-left"></div>\
						<div class="other-skills pull-right"><h3>其他技能</h3>\
					<ul class="list-unstyled"><li>英语CET6</li><li>计算机四级网络工程师</li>\
					<li>熟悉图像处理算法</li><li>熟悉性格色彩学</li></ul></div>';
		$(".skills").html(skillHtm);
		$(".skills h2").css({"margin":"0 0 20px","font-weight": "700","color": "#778492","font-size":"24px"});
		
		/*设置图区宽高*/
		var width=$(".skills").width();
		$("#stats-echarts").height(0.5*width);
		$("#stats-echarts").width(0.6*width);
		/*设置其他技能区宽高*/
		$(".other-skills").height(0.5*width);
		$(".other-skills").width(0.4*width-5);
		/*显示图区*/
		setEcharts();

		$typing.removeClass("myhover");
		$resume.removeClass("myhover");
		step++;
	}
	
	/*第十四步 删除多余的元素 微调*/
	function step14(){
		$typing.addClass( "myhover");
		$resume.addClass("myhover");
		$tpp.hide(300,function(){
			$(this).html("最后，“个人简历”有些多余，我们把它去掉，再精简一些其他内容，使简历尽量简洁。").show(300);
		});
		step++;
	}
	
	/*第十五步 显示修改后的简历*/
	function step15(){
		
		/*删除标题*/
		$("h1").remove();
		
		/*删除不必要的奖项*/
		$(".sub-prizes:eq(0),.sub-prizes:eq(4)").remove();
		
		/*增加简历上下内边距*/
		$(".resume").css("padding","60px 30px");
		
		/*姓名区下移*/
		$(".main-bsinf").css("margin-top","10px");

		$typing.removeClass("myhover");
		$resume.removeClass("myhover");
		
		$(".next").html("完成");
		step++;
	}
	
	/*第十六步 终于完成*/
	function step16(){
		$(".typing").hide(300);
		$(".resume").addClass("col-md-offset-2");
		step++;
	}
		
});