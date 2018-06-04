/*成本*/

define(function (require) {
    var $ = require('jquery');
    var dao = require("dao");

    var ret = {
        detailHandler: null		//详细按钮点击事件
    };

    function getCostCondition() {
        return {
            Cycle: $('.right-panel-top .cycle-button').filter('.active').attr('condition'),
            Type: $('.right-panel-top .type-button').filter('.active').attr('condition')
        }
    }

    function drawCostCharts(data) {
        var costCharts = echarts.init(document.getElementById('cost-chart'));

        var option = {
            title: {
                show: false
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
			legend: {
				orient: 'vertical',
				top:'20%',
				left: '5%',
				itemWidth:20,
				itemHeight:10,
				itemGap:20,
				data: function(){
					var array=[];
					for(var i=0;i<data.length;i++){
						array.push(data[i].name);
					}
					return array;
				}(),
				textStyle:{
					fontSize:14,
					fontFamily:'SimHei',
					color: '#bababa'
				}
			},
            series: [
				{
				    type: 'pie',
				    data: data,
					radius:[0,'70%'],
					center:['60%','50%'],
					label:{
						normal:{
							show:false
						}
					}
				}
            ],
			color: ['#fb8b3c', '#a4d737', '#ffce2e', '#1055a3', '#d04db2', '#0283fe']
        };

        costCharts.clear();
        costCharts.setOption(option);
    }

    function addEventHandler() {
        $('.right-panel-top a').click(function () {
            var type = $('.right-panel-top .type-button').filter('.active').attr('condition');
            if (typeof ret.detailHandler == 'function') {
                ret.detailHandler(type);
            }
        })
    }

    ret.init = function () {
        addEventHandler()
        dao.queryCostData(getCostCondition(), drawCostCharts);
    }

    ret.condition = function () {
        return getCostCondition();
    }

    ret.detailClick = function (func) {
        this.detailHandler = func;
    };

    return ret;
})