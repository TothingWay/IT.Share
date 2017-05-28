$(function() {
    $(".side-nav .panel-heading .collapsed").click(function() {
        $(".side-nav .icon").removeClass("icon-angle-down");
        $(".side-nav .icon").addClass("icon-angle-left");
        $(this).children("i:last-child").addClass("icon-angle-down");
    });
    // 过滤词
    $("#replace").click(function() {
        $("#unhealthy-word").css("display","none");
        $(".input-replace").css("display","block");
    });
    $("#audit").click(function() {
        $("#unhealthy-word").css("display","block");
        $("#unhealthy-word").addClass("animated fadeIn");
        $(".input-replace").css("display","none");
    });
    $("#forbid").click(function() {
        $("#unhealthy-word").css("display","block");
        $("#unhealthy-word").addClass("animated fadeIn");
        $(".input-replace").css("display","none");
    });
    $(".bootstrap-tagsinput input").css("width", "10em");
    var myChart1 = echarts.init(document.getElementById('pie1'));
    var option1 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color:['#DF01D7','#013ADF','#01DFD7','#01DF74','#86B404'], 
        series: [{
            name: '资源类别',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [{
                value: 332,
                name: '工具类'
            }, {
                value: 213,
                name: '代码类'
            }, {
                value: 245,
                name: '文档类'
            }, {
                value: 460,
                name: '电子书'
            }, {
                value: 190,
                name: '音频类'
            }],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1);
    setTimeout(function() {
        myChart1.resize();
    }, 1000);

    var myChart2 = echarts.init(document.getElementById('pie2'));
    // 指定图表的配置项和数据
    option2 = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:810, name:'免费'},
                        {value:122+456+234+120, name:'需积分'}
                    ]
                },
                {
                    name:'所需积分',
                    type:'pie',
                    radius: ['40%', '55%'],

                    data:[
                        {value:123, name:'免费'},
                        {value:332, name:'1'},
                        {value:333, name:'2'},
                        {value:111, name:'3-5'},
                        {value:123, name:'大于5'}
                    ]
                }
            ]
        };
    // 使用刚指定的配置项和数据显示图表。
    myChart2.setOption(option2);
    setTimeout(function() {
        myChart2.resize();
    }, 1250);

    var myChart3 = echarts.init(document.getElementById('line'));
    var option3 = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['下载数量', '上传数量']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name: '下载数量',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        }, {
            name: '上传数量',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        }]
    };
    myChart3.setOption(option3);
    setTimeout(function() {
        myChart3.resize();
    }, 1500)

    window.onresize = function(){
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
    }
});
