var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 3000,
    }
});
var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

/*menu mobile*/
jQuery(document).ready(
    function () {
        menuMobile();
    });

function menuMobile() {
    $("#bt-menu-mobile").click(function () {
        $("#wrapper-menu-mobile").css({ left: 0, opacity: 0 });
        $("#wrapper-menu-mobile").animate({ opacity: 1 }, 200);
        $("#wrapper-menu-mobile .wrapper").animate({ right: "0" }, 500);
        jQuery(document.body).css('overflow', 'hidden');
        return false;
    });

    $("#bt-fechar-menu").click(function () {
        closeMenuMobile();
        return false;
    });

    $(".block-menu-mobile").mousedown(function () {
        closeMenuMobile();
    });
}

function closeMenuMobile() {
    $("#wrapper-menu-mobile .wrapper").animate({ right: "-100%" }, 300, function () {
        $("#wrapper-menu-mobile").animate({ opacity: 0 }, 200, function () {
            $("#wrapper-menu-mobile").css({ left: "100%", opacity: 1 });
            jQuery(document.body).css('overflow', 'auto');
        });
    });
}