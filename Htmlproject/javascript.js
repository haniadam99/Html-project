$(document).ready(function(){
    $(".animering-box").click(function() {
        $(".animering-box").animate({
            width: '500px',
            height: '300px'
        }, 1000);
        $(".animering-after").show().animate({opacity:'1'},3000);
    });
});