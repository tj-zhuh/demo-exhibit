
var nav = (function () {

    var ret = {};

    ret.init = function () {

        this.nav1a = $("<div class='nav nav1 navlink nava nav1a'></div>");
        this.nav2a = $("<div class='nav nav2 navlink nava nav2a'></div>");
        this.nav3a = $("<div class='nav nav3 navlink nava nav3a'></div>");
        this.nav4a = $("<div class='nav nav4 navlink nava nav4a'></div>");     
        this.navha = $("<div class='nav navh navlink nava navha'></div>");
        this.navma = $("<div class='nav navm nava navma'></div>");

        this.nav1b = $("<div class='nav nav1 navlink navb nav1b'></div>");
        this.nav2b = $("<div class='nav nav2 navlink navb nav2b'></div>");
        this.nav3b = $("<div class='nav nav3 navlink navb nav3b'></div>");
        this.nav4b = $("<div class='nav nav4 navlink navb nav4b'></div>");
        this.navhb = $("<div class='nav navh navlink navb navhb'></div>");
        this.navmb = $("<div class='nav navm navb navmb'></div>");

        this.navt1a = $("<div class='nav nav1 navt nava navt1a'></div>");
        this.navt2a = $("<div class='nav nav2 navt nava navt2a'></div>");
        this.navt3a = $("<div class='nav nav3 navt nava navt3a'></div>");
        this.navt4a = $("<div class='nav nav4 navt nava navt4a'></div>");
        this.navtha = $("<div class='nav navh navt nava navtha'></div>");

        this.navt1b = $("<div class='nav nav1 navt navb navt1b'></div>");
        this.navt2b = $("<div class='nav nav2 navt navb navt2b'></div>");
        this.navt3b = $("<div class='nav nav3 navt navb navt3b'></div>");
        this.navt4b = $("<div class='nav nav4 navt navb navt4b'></div>");
        this.navthb = $("<div class='nav navh navt navb navthb'></div>");

        this.maska = $("<div class='nav mask maska nava'></div>")
        this.maskb = $("<div class='nav mask maskb navb'></div>")

        this.maskall = $("<div class='nav maskall'></div>") 

        $(".container").append(this.nvaxa);
        $(".container").append(this.nvaxb);
        $(".container").append(this.navtxa);
        $(".container").append(this.navtxb);

        $(".container").append(this.nav1a);
        $(".container").append(this.nav2a);
        $(".container").append(this.nav3a);
        $(".container").append(this.nav4a);
        $(".container").append(this.navha);
        $(".container").append(this.navma);

        $(".container").append(this.nav1b);
        $(".container").append(this.nav2b);
        $(".container").append(this.nav3b);
        $(".container").append(this.nav4b);
        $(".container").append(this.navhb);
        $(".container").append(this.navmb);

        $(".container").append(this.navt1a);
        $(".container").append(this.navt2a);
        $(".container").append(this.navt3a);
        $(".container").append(this.navt4a);
        $(".container").append(this.navtha);

        $(".container").append(this.navt1b);
        $(".container").append(this.navt2b);
        $(".container").append(this.navt3b);
        $(".container").append(this.navt4b);
        $(".container").append(this.navthb);

        $(".container").append(this.maska);
        $(".container").append(this.maskb);
        $(".container").append(this.maskall);

        $(".navt.nav1").html('能源管理');
        $(".navt.nav2").html('厂级');
        $(".navt.nav3").html('车间级');
        $(".navt.nav4").html('工段级');        
        $(".navt.navh").html('智能工厂'); 

        $(".nav1").click(function (e) {
            e.stopPropagation();
            if ($(this).hasClass('current')) return;
            window.location.href = '../overview/overview.html';

        })

        $(".nav2").click(function (e) {
            e.stopPropagation();
            if ($(this).hasClass('current')) return;
            window.location.href = '../page5/page.html';

        })

        $(".nav3").click(function (e) {
            e.stopPropagation();
            if ($(this).hasClass('current')) return;
            window.location.href = '../page1/page.html';

        })

        $(".nav4").click(function (e) {
            e.stopPropagation();
            if ($(this).hasClass('current')) return;
            window.location.href = '../page2/page.html';

        })      

        $(".navh").click(function (e) {
            e.stopPropagation();
            if ($(this).hasClass('current')) return;
            window.location.href = '../index/page.html';

        }) 

        $(".navma").click(function (e) {
            e.stopPropagation();
            if ($(this).hasClass('active')) {
                $(".nava").removeClass('active');
                removeAll();
            } else {
                $(".nava").addClass('active');
                addAll();
            }
            $(".navb").removeClass('active');
        })

        $(".navmb").click(function (e) {
            e.stopPropagation();
            if ($(this).hasClass('active')) {
                $(".navb").removeClass('active');
                removeAll();
            } else {
                $(".navb").addClass('active');
                addAll();
            }
            $(".nava").removeClass('active');
        })

        $(".mask").click(function (e) {
            e.stopPropagation();
        })

        function addAll() {
            $(".maskall").addClass('active');
        }

        function removeAll() {
            $(".maskall").removeClass('active');
        }

        $(".maskall").click(function () {
            $(".nav").removeClass('active');
        })
    } 

    return ret; 

})() 


$(function () { 
    nav.init(); 
})