function showImages(name) {
    $('.freehand').hide();
    $('.stencil').hide();
    $('.workshop').hide();
    $('.shop').hide();
    $(name).show();
}

function hideImage() {
    $('#image-overlay').hide();
}

function showImage(imageUrl) {
    $('#image-overlay').html(`<img class="img-fluid centerImage"src="${imageUrl}">`);
    $('#image-overlay').show();
}

$(document).ready(function () {
    showImages('.freehand')
});
