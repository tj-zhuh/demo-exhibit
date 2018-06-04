

$(function () {



    var arr = [4.5, 2.5, 3.35, 2.8, 4.65];


    for (var i = 0; i < 5; i++) {

        var el = $(".panel7 .t" + (i + 1) + " div");

        el.width(0);

        el.animate({
            width: arr[i] + "rem"
        }, 600)
    }


})