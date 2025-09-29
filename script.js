$(document).ready(function() {

    $("#sign_in_link").click(function() {
        $("#signup").animate({left: '100%'}, 500, function() {
            $(this).css("visibility", "hidden");
            $("#login").css({left: '0', visibility: 'visible'});
        });
    });

    $("#sign_up_link").click(function() {
        $("#login").animate({left: '100%'}, 500, function() {
            $(this).css("visibility", "hidden");
            $("#signup").css({left: '0', visibility: 'visible'});
        });
    });
    $("form button").click(function(e) {
        e.preventDefault();
    });

});

AOS.init({
    duration: 1000,
    delay: 100
});


// $(document).ready(function()
// {


//     $("#sign_in_link").click(function()
//     {
//         $("#signup").animate({left: '100%'},200);
//         $("#login").css({left: '0'});

//         $("#signup").css("visibility","hidden")
//         setTimeout(function() { 
//             $("#login").css("visibility","visible")
//         }, 1000);
//     })
//     $("#sign_up_link").click(function()
//     {
//         $("#login").animate({left: '100%'},200);
//         $("#signup").css({left: '0'});

//         $("#login").css("visibility","hidden")
//         setTimeout(function() { 
//             $("#signup").css("visibility","visible")
//         }, 1000);

//     })
// })
// AOS.init({
//     duration: 1000,
//     delay: 100
// })