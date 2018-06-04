
var handlers = [];

handlers.push(function () { 

    var items1 = ["粗铜", "粗铜", "阳极铜", "阳极铜", "阴极铜", "阴极铜", "黄金", "黄金", "白银", "白银", "硫酸", "硫酸"];
    var items2 = ["生产", "销售", "生产", "销售", "生产", "销售", "生产", "销售", "生产", "销售", "生产", "销售"];
    var ps = [90, 55, 85, 95, 73, 80, 30, 40, 50, 50, 30, 60];

    var ul = $(".panel1 ul");
    var maxWidth = 1.7;

    for (var i = 0; i < 12; i++) {
        var li = $("<li></li>");
        var item = $("<div class='item'></div>");
        item.html(items1[i] + '（' + items2[i] + '）');
        li.append(item);

        var cite = $("<cite></cite>");
        var p = ps[i];
        var width = maxWidth * p / 100.0;
        var px = getPx(width * 100);
        cite.width(px);
        li.append(cite);

        var pctg = $("<div class='pctg'></div>");
        pctg.html(p + '%');
        li.append(pctg);

        ul.append(li);
    }
})


window.onload = function () {
    for (var i = 0 ; i < handlers.length; i++) {
        handlers[i]();
    }  
}