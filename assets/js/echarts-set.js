function setEcharts(){
	var statsEch=document.getElementById('stats-echarts');
	var myChart = echarts.init(statsEch);
	var idx = 1;
	var option = {
    title: {
        text: '专业技能',
		textStyle: {
				fontFamily: 'Microsoft YaHei,WenQuanYi Micro Hei,sans-serif',
				fontSize: 18,
				fontWeight: '500',
				color: '#778492'
		}
    },
	grid: {
        borderWidth: 0,
		x: 5,
		x2: 10,
        y: 40,
        y2: 20
    },
	xAxis: [
        {
            type : 'value',
			show: false,
            boundaryGap : [0, 0.01]
        }
    ],
    yAxis: [
        {
            type: 'category',
			show: false,
            data: ['Design', 'PS', 'JavaScript', 'CSS', 'HTML']
        }
    ],
    series: [
        {
            name: '专业技能',
            type: 'bar',
			barCategoryGap: '40%',
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'insideRight',
                        formatter: '{b}'
                    }
                }
            },
            data: [2,3,7,10,8],
        }
    ]
};
	myChart.setOption(option);
	
	$(window).resize(function(){
		
		/*设置图区宽高*/
		var width=$(".edu-exp").width();
		console.log(width);
		$("#stats-echarts").height(0.5*width);
		$("#stats-echarts").width(0.6*width);
		/*设置其他技能区宽高*/
		$(".other-skills").height(0.5*width);
		$(".other-skills").width(0.4*width-5);
		
		myChart = echarts.init(statsEch);
		myChart.setOption(option);
	});
};
