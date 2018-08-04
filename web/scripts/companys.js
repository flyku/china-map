/*echarts图表*/
function roseEcharts(echartData, radus, titleFontSize) {
    var scaleChart = echarts.init(document.getElementById('echarts-company'));
    var option = {
        title: {
            text: '占比',
            x: 'center',
            y: 'center',
            textStyle: {
                fontSize: titleFontSize
            }
        },
        tooltip: {
            //trigger: 'item',
            //formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        calculable: true,
        series: [{
            //name: '半径模式',
            type: 'pie',
            radius: [20, 110],
            center: ['50%', '50%'],
            roseType: 'radius',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data: echartData,
            color: [
                '#a6acfa',
                '#429d44',
                '#66b4dd',
                '#f86d36',
                '#f89136', 
                '#f8cd36', 
                '#d4f836', 
                '#09f909',
                '#09f9c9',
                '#09daf9',
                '#4d09f9',
                '#b809f9', 
                '#f909b2', 
                '#f9091f'
            ],
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function(idx) {
                return Math.random() * 200;
            },
            startAngle: 270
        }]
    };
    scaleChart.setOption(option);
}
var echartData = [{
    value: 10,
    name: 'rose1'
}, {
    value: 5,
    name: 'rose2'
}, {
    value: 15,
    name: 'rose3'
}, {
    value: 25,
    name: 'rose4'
}, {
    value: 20,
    name: 'rose5'
}, {
    value: 35,
    name: 'rose6'
}, {
    value: 30,
    name: 'rose7'
}, {
    value: 3,
    name: 'rose8'
}, {
    value: 8,
    name: 'rose9'
}, {
    value: 9,
    name: 'rose10'
}, {
    value: 12,
    name: 'rose11'
}, {
    value: 20,
    name: 'rose12'
}, {
    value: 40,
    name: 'rose13'
}, {
    value: 30,
    name: 'rose14'
}];
roseEcharts(echartData);
