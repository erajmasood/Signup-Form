$(document).ready(function() {

    // SHOW LOGIN FORM
    $("#sign_in_link").click(function() {
        $("#signup").css({left: "-100%", visibility: 'hidden'});
        $("#login").css({left: "0", visibility: 'visible'});
    });

    // SHOW SIGNUP FORM
    $("#sign_up_link").click(function() {
        $("#login").css({left: "-100%", visibility: 'hidden'});
        $("#signup").css({left: "0", visibility: 'visible'});
    });

    // SIGNUP FORM SUBMIT
    $("#signupForm").submit(function(e) {
        e.preventDefault();

        alert("Account Created Successfully!");
        
        // Redirect example:
        // window.location.href = "dashboard.html";
    });

    // LOGIN FORM SUBMIT
    $("#loginForm").submit(function(e) {
        e.preventDefault();

        alert("Login Successful!");

        // Redirect example:
        // window.location.href = "home.html";
    });
});

AOS.init({
    duration: 1000,
    delay: 100
});