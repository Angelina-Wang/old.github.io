var main = function(){
    $('.project').click(function() {
        $('.project').removeClass('current');
        $('.description').hide();
        $(this).addClass('current');
        $(this).children('.description').show();
    });
};

$(document).ready(main);