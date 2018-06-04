
$(function () {

    var d = 3840 / 6;

    var ct = $(".container");

    for (var i = 0; i < 5; i++) {

        var left = d * (i + 1) -1;

        var line = $("<div class='checkgap'></div>");
        line.width(2);
        line.css('height', '100%');       
        line.css('left', left + 'px'); 
        line.css('top', 0);
        ct.append(line); 
    }


})