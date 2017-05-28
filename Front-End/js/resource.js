$(function() {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        parallax: true,
        speed: 800,
        grabCursor: true,
        pagination: '.swiper-pagination',
    });
    $(".arrow").click(function() {
        if ($("#icon-angle").hasClass("icon-angle-down")) {
            $("#icon-angle").addClass("icon-angle-up");
            $("#icon-angle").removeClass("icon-angle-down");
            $(".nav-menu").css('display', 'block');
        } else if ($("#icon-angle").hasClass("icon-angle-up")) {
            $("#icon-angle").addClass("icon-angle-down");
            $("#icon-angle").removeClass("icon-angle-up");
            $(".nav-menu").css('display', 'none');
        }
    });
    $(".menu").click(function() {
        $('.active').removeClass('active');
        $(this).addClass("active");
        $(".tab-pane").removeClass('in')
    });
    $('.comment').click(function() {
        $('#new-quiz').css('display', 'block');
        return false;
    });
    $('#quiz-close').click(function() {
        $('#new-quiz').css('display', 'none');
        return false;
    });
    $('.btn-topic').click(function() {
        $('#new-topic').css('display', 'block');
    });
    $('#topic-close').click(function() {
        $('#new-topic').css('display', 'none');
    });
    $('.full-screen-btn1').click(function() {
        if ($("#icon-btn").hasClass("glyphicon-chevron-up")) {
            $('#text-editor').css('height', '500');
            $("#icon-btn").removeClass("glyphicon-chevron-up");
            $("#icon-btn").addClass("glyphicon-chevron-down");
        } else {
            $('#text-editor').css('height', '250');
            $("#icon-btn").removeClass("glyphicon-chevron-down");
            $("#icon-btn").addClass("glyphicon-chevron-up");
        }
    });
    var editor = new wangEditor('text-editor');
    editor.create();
})