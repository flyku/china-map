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
});
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
	var my = echarts.init(document.getElementById('first1'));
	my.setOption(option)
})



$(function() {
	var
		option = {
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				orient: 'vertical',
				x: 'right',
				y: 'bottom',
				data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
			},
			polar: [{
				center: ['50%', "50%"],
				indicator: [{
					text: '销售',
					max: 6000
				}, {
					text: '管理',
					max: 16000
				}, {
					text: '信息技术',
					max: 30000
				}, {
					text: '客服',
					max: 38000
				}, {
					text: '研发',
					max: 52000
				}, {
					text: '市场',
					max: 25000
				}]
			}],
			calculable: true,
			series: [{
				name: '预算 vs 开销（Budget vs spending）',
				type: 'radar',
				itemStyle: {
					normal: {
						color: function(parmas) {
							var colors = ["#ff8563", "#9bcc63", "#fbd95f"];
							return colors[parmas.dataIndex];
						}
					}
				},
				data: [{
					value: [4300, 10000, 28000, 35000, 50000, 19000],
					name: '预算分配（Allocated Budget）'
				}, {
					value: [5000, 14000, 28000, 31000, 42000, 21000],
					name: '实际开销（Actual Spending）'
				}, {
					value: [1000, 10000, 20000, 31000, 30000, 21000],
					name: '实际开销（Actual Spending）'
				}]
			}]
		};;
	var my = echarts.init(document.getElementById('radar'));
	my.setOption(option)
})