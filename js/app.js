// Title text scroll effect

const fadeStart = 100;
const fadeUntil = 400;

$(window).scroll(function (event) {
    const offset = $(document).scrollTop();
    if (offset < fadeUntil) {
        let opacity = 0;
        if (offset <= fadeStart) {
            opacity = 1;
        } else if (offset <= fadeUntil) {
            opacity = 1 - offset / fadeUntil;
        }
        $('.go-left').css('margin-left', offset / 2).css('opacity', opacity);
        $('.go-right').css('margin-right', offset / 2).css('opacity', opacity);
    }
});
