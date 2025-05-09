$(document).ready(function () {


    $('#drink').click(function () {
        $('.drinkList').addClass('activeD');
        $('.activeE').remove();
    });
    $('#eat').click(function () {
        $('.eatList').addClass('active');
    });
    $(window).on('load scroll', function () {

        $('section').each(function () {

            let height = $(this).height();
            let top = $(window).scrollTop();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if (top >= offset && top < height + offset) {
                $('.nav li a').removeClass('.activE');
                $('.nav').find('[href="#${id}"]').addClass('.activE');
            }

        });
    });


});

