//取随机数组工具函数(获得固定数量的数组型数据)
function getRadomNums(nums, min, max) {
    var _temp = [];

    for (var i = 0; i < nums; i++) {
        var __temp__ = (min + (max - min) * Math.random()).toFixed(2);

        _temp.push(__temp__);
    }

    return _temp;
}

//获得一个随机数工具函数
function getRandom(min, max) {
    var __temp__ = (min + (max - min) * Math.random()).toFixed(2);
    return __temp__;
}

//*****************************************自定义假数据变量专区***************************************

var bar1DATA = function () {
    return [{
        name: '产量',
        data: getRadomNums(12, 500, 2500)
    }]
}

var DATA_line1 = function () {
    return [{
        data: getRadomNums(12, 90, 100),
        lineStyle: {}
    }]
}

var DATA_bar1 = function () {
    return [
        { value: getRandom(20,80), str1: '3.14%', str2: '排产完成率', str3: '9,58', str4: '实际产量', color: '#ffae00' },
        { value: getRandom(20, 80), str1: '5%', str2: '设备事故率', str3: '600', str4: '设备故障时间', color: '#00db1a' },
        { value: getRandom(20, 80), str1: '94.54%', str2: '费用消耗', str3: '9,58', str4: '计划费用', color: '#0091ff' },
    ]
}

function drawleftBottomBar(data) {
    function get_top(Data) {
        var _temp = parseFloat(Data);
        var _backoff = (100 - _temp).toString() + '%';
        return _backoff;
    }

    var container = $('#bar2');
    container.empty();

    for (var i = 0; i < data.length; i++) {
        var divc1 = $('<div class="LBbar-container"></div>');
        divc1.css('background', data[i].color);

        var divc2 = $('<div class="forLBbartext"></div>');

        //var dataDiv = $('<div style="width:100%;background:#002c42;height:' + get_top(data[i].value)+ '"></div>')
        var dataDiv = $('<div style="width:100%;background:#002c42;height:100%"></div>')

        dataDiv.animate({ height: get_top(data[i].value) })

        divc1.append(dataDiv);

        var p1 = $('<p style="color:' + data[i].color + '">' + data[i].str1 + '</p>');
        var p2 = $('<nobr style="color:' + data[i].color + '">' + data[i].str2 + '</nobr>');
        var p3 = $('<p style="color:' + data[i].color + '">' + data[i].str3 + '</p>');
        var p4 = $('<nobr style="color:' + data[i].color + '">' + data[i].str4 + '</nobr>');

        divc2.append('<p style="line-height:1.1rem;">&nbsp;</p>', p1, p2, '<p style="line-height:0.2rem;">&nbsp;</p>', p3, p4);
        container.append(divc1, divc2);
    }
}

//****************************************************************************************************

function Let_it_Go() {

    function loopIt() {

        zhexian({
            El: document.getElementById('line1'),
            legend: ['合格率趋势'],
            xAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            //title: '标题1',
            yAxis: { max: 100, min: 0, text: '' },
            orient: 'horizontal',
            color: ['#33e8ea'],
            grid: ['25%', '', '3%', '3%'],
            data: DATA_line1()
        });

        zhuzi({
            El: document.getElementById('bar1'),
            xAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            xRotate: 25,
            yAxis: { max: 2500, min: 0, text: '' },
            //title: '标题1',
            legend: ['产量趋势'],
            grid: ['25%', '10%', '5%', '10%'],
            color: ['#024ae9', '#936aff'],
            series: bar1DATA()
        });

        drawleftBottomBar(DATA_bar1());
        setTimeout(loopIt, 3000);
    }

    loopIt();





}
Let_it_Go();