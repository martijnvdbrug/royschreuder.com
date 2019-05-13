function showImages(name) {
    $('#freehand-images').hide();
    $('#stencil-images').hide();
    $('#workshop-images').hide();
    $('#shop-images').hide();

   $(name).show();
}

function hideImage() {
    $('#image-overlay').hide();
}
