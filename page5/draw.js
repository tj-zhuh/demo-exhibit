
//自定义变量区
var zDATA1 = [
    { name: '重油', color: '#990100', percent: '98%', value: 5000 },
    { name: '柴油', color: '#cccd00', percent: '70%', value: 2000 },
    { name: 'LPG', color: '#009aff', percent: '48%', value: 1500 },
    { name: '盐酸', color: '#6634fe', percent: '32%', value: 500 },
    { name: '液碱', color: '#659a00', percent: '20%', value: 450 },
    { name: '液氧', color: '#ffcd99', percent: '19%', value: 300 },
]


//取随机数组工具函数
var getRadomNums = function (nums,min, max) {
    var _temp = [];

    for (var i = 0; i < nums; i++) {
        var __temp__ = (min + (max - min) * Math.random()).toFixed(2);

        _temp.push(__temp__);
    }

    return _temp;
}

//画库存
function draw_storageDivs(data) {
    $('#multi-divs').empty();
    var container = $('#multi-divs');
    var ul = $('<ul>');
    container.append(ul);
    function get_top(Data){
        var _temp = parseFloat(Data.substring(0, Data.length - 1));
        var _backoff = (100 - _temp).toString() + '%';
        return _backoff;
    }
    for (var i = 0; i < data.length; i++) {
        var li = $('<li>');
        var div0 = $('<div class="storage-container">');
        var div1 = $('<div class="storage-value">' + data[i].value + '</div>');
        var div2 = $('<div class="storage-can">');
        var div3 = $('<div class="storage-category">' + data[i].name + '</div>');

        //var div4 = $('<div style="background:' + data[i].color + ';margin-top:' + get_top(data[i].percent) + ';height:' + data[i].percent + '"></div>');
        
        var div4 = $('<div style="background:' + data[i].color + ';height:100%;margin-top:10%;"></div>');

        div4.animate({
            marginTop: get_top(data[i].percent),
            height: data[i].percent
        })

        div2.append(div4);
        div0.append(div1, div2, div3);
        li.append(div0);
        ul.append(li)
    }
}




//加载执行函数
handlers.push(function () {

    function loopIt() {

        //上方柱状图
        window.zhuzi({
            El: 'zhuzi1',
            legend: [''],
            xAxis: ['精矿', '氧化矿', '石英砂', '石灰石粉', '杂铜', '活性焦'],
            //title: '标题1',
            yAxis: { max: 2000, min: 0, text: '' },
            color: ['#ff6738', 'rgb(0,136,212)', 'yellow'],
            data: [getRadomNums(6, 0, 2000)],
            grid: ['20%', '3%', '5%', '12%']
        });

        draw_storageDivs(zDATA1)

        //左下一折线
        window.zhexian({
            El: 'zhexian1',
            legend: ['熔炼厂', '稀贵厂', '电解厂'],
            xAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            //title: '原料成本趋势展示',
            yAxis: { max: 300, min: 0, text: '万' },
            color: ['#67349a', '#009bfe', '#feff00'],
            grid: ['25%', '3%', '5%', '12%'],
            data: [getRadomNums(12, 0, 250), getRadomNums(12, 0, 250), getRadomNums(12, 0, 250)],
        });

        //右下一折线
        window.zhexian({
            El: 'zhexian2',
            legend: ['阴极铜', '黄金', '白银'],
            xAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            //title: '产品收入趋势图',
            orient: 'horizontal',
            yAxis: { max: 1500, min: 0, text: '' },
            grid: ['25%', '3%', '5%', '8%'],
            color: ['#990101', '#cd6700', '#66ffff'],
            data: [getRadomNums(12, 0, 1500), getRadomNums(12, 0, 1500), getRadomNums(12, 0, 1500)]
        });

        //右下二折线
        window.zhexian({
            El: 'zhexian3',
            legend: ['电耗', '水耗', ],
            xAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            //title: '能耗指示趋势图',
            orient: 'horizontal',
            yAxis: { max: 1500, min: 0, text: '' },
            grid: ['25%', '3%', '5%', '8%'],
            color: ['#cc67fe', '#cbff00', '#676700'],
            data: [getRadomNums(12, 0, 1500), getRadomNums(12, 0, 1500)]
        });

        setTimeout(loopIt, 3000);
    }

    loopIt();













})