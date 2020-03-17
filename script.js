$(function() {
    $('#hamburger-icon').click(function() {

        $('#hamburger-icon').fadeOut();
        $('#login-modal').fadeIn();

    });

    $('#close-icon').click(function() {
        $('#login-modal').fadeOut();
        $('#hamburger-icon').fadeIn();
    });
});
