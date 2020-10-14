$(document).ready(function() {
    //nav     
    var obj = null;
    var As = document.getElementById('starlist').getElementsByTagName('a');
    obj = As[0];
    for (i = 1; i < As.length; i++) {
        if (window.location.href.indexOf(As[i].href) >= 0) obj = As[i];
    }
    obj.id = 'selected';
    //nav
    $("#mnavh").click(function() {
        $("#starlist").toggle();
        $("#mnavh").toggleClass("open");
    });
    //search  
    $(".searchico").click(function() {
        $(".search").toggleClass("open");
    });
    //searchclose 
    $(".searchclose").click(function() {
        $(".search").removeClass("open");
    });
    //banner
    $('#banner').easyFader();
    //nav menu   
    $(".menu").click(function(event) {
        $(this).children('.sub').slideToggle();
    });
    //tab
    $('.tab_buttons li').click(function() {
        $(this).addClass('newscurrent').siblings().removeClass('newscurrent');
        $('.newstab>div:eq(' + $(this).index() + ')').show().siblings().hide();
    });
});


document.writeln("<style>");
document.writeln(".hhbb img {display: block; height: auto;}");
document.writeln(".hhbb img { vertical-align: middle;}");
document.writeln(".hhbb img { border: 0;}");
document.writeln(".hhbb a { color: #a8a8a8; -webkit-transition: all .2s linear; -moz-transition: all .2s linear; -o-transition: all .2s linear;-ms-transition: all .2s linear; transition: all .2s linear;}");
document.writeln(".top-form.top-form-minicart { cursor: pointer; position: relative;}");
document.writeln(".top-form { position: relative;float: right;}");
document.writeln(".top-form.top-form-minicart .top-minicart-icon { position: relative;}");
document.writeln(".pull-right { float: right;}");
document.writeln(".top-form.top-form-minicart .top-minicart-icon img {padding-right: 3px;display: inherit; height: 42px; width: 38px; float: left;}");
document.writeln(".top-form.top-form-minicart .top-minicart-icon i { padding: 10px; background-color: #ff5049;border: 1px solid #d33828;}");
document.writeln(".fa { padding-right: 1px;display: inline-block; font: normal normal normal 14px/1 FontAwesome; font-size: inherit;text-rendering: auto; -webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}");
document.writeln(".top-form.top-form-minicart .top-minicart-icon i span { padding-right: 20px; font-weight: bold; font-size: 19px;color: #fff; height: 38px; width: 170px;}");
document.writeln("*, *:before, *:after {}");
document.writeln(".top-form.top-form-minicart .top-minicart-icon p {  font-weight: bold;font-family: Microsoft YaHei; background-color: #ffab00; font-size: 14px; color: #000;  border-radius: 100%; height: 23px; width: 23px; display: inline-block; line-height: 24px; text-align: center;  position: absolute; top: -12px; right: -8px;}");
document.writeln(".hhbb{ position: fixed;  bottom: 240px; right: 20px; width: 300px;z-index: 999;}");
document.writeln("</style>");
document.writeln("<div class=\'hhbb\'>");
document.writeln("<div class=\'top-form top-form-minicart etrostore-minicart pull-right\'>");
document.writeln("  <div class=\'top-minicart-icon pull-right\'> <a href=\'http://pdd.28581688.cn/\'><img src=\'http://www.28581688.cn/hongbao666.png\' alt=\'领取今日福利\' title=\'领取今日福利\' ></a><a href=\'http://fulishe.28581688.cn/\'> <i class=\'fa fa-shopping-cart\'><span>领取今日福利</span></i></a> <p class=\'cart-contents\' title=\'领取今日福利\'> <span class=\'minicart-number\'>2</span> </p> ");
document.writeln("  </div>");
document.writeln("</div>");
document.writeln("</div>");