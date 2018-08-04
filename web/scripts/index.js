$(function() {
	var option = {
		xAxis: [{
			type: 'category',
			axisTick: {
				show: false
			},
			data: ['高', '中', '低']
		}],
		yAxis: [{
			type: 'value',
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisLabel: {
				show: false
			},
			splitLine: {
				lineStyle: {
					type: 'dashed'
				}
			}
		}],
		series: [{
			type: 'bar',
        silent: true,
        barWidth: 20,
        barGap: '-10%',
			data: [2.0, 4.9, 7.0],
			itemStyle: {
				normal: {
					color: function(params) {
						// build a color map as your need.
						var colorList = [
							new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: '#FFDBDB'
							}, {
								offset: 1,
								color: '#FF5C5C'
							}]),
							new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: '#FFFFE9'
							}, {
								offset: 1,
								color: '#FFFF8B'
							}]),
							new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: '#F3FAE6'
							}, {
								offset: 1,
								color: '#B8E08D'
							}])
						];
						return colorList[params.dataIndex]
					}
				}
			}
		}, {
			type: 'bar',
        silent: true,
        barWidth: 20,
        barGap: '80%',
			data: [10.0, 6.4, 3.3],
			itemStyle: {
				normal: {
					color: function(params) {
						var colorList = [
							'#ff0000',
							'#ffff00',
							'#92d050'
						];
						return colorList[params.dataIndex]
					}
				}
			}
		}]
	};
	var my = echarts.init(document.getElementById('first'));
	my.setOption(option)
})