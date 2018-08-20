$(document).ready(function () {
    let script = document.createElement('script');
    script.src = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=receiveFlickrData&id=163390453@N04&&format=json';
    document.head.appendChild(script);
});

let flickrData;

function receiveFlickrData(data) {

    flickrData = data;

    if (!flickrData.items) {
        throw Error(`Could not get images from Flickr: ${JSON.stringify(flickrData)} `);
    }

    injectImagesWithTag('freehand')
}

function injectImagesWithTag(tag) {

    $('#flickr').empty();

    $(`#freehand`).removeClass('disable');
    $(`#stencil`).removeClass('disable');
    $(`#shop`).removeClass('disable');
    $(`#workshop`).removeClass('disable');

    $(`#${tag}`).addClass('disable');


    const images = getImages(flickrData);
    images.forEach(image => {

        if (!image.tags || image.tags.indexOf(tag) === -1) {
            return;
        }

        $('#flickr').append(`
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 cell-container" align="center">
            <img class="image" src="${image.url}"> <a class="overlay" href="" onclick="showImage('${image.largeUrl}');return false;">
            <div class="text">
                <p class="title">${image.title}</p>
                <div class="divider">
                </div>
                <p class="sub-title">${image.description}</p>
            </div></a>
        </div>
    `);
    });
}

function getImages(data) {

    const images = [];
    for (item of data.items) {
        if (!item.media || !item.media.m) {
            console.error(`Could not get imageUrl for ${JSON.stringify(item)}`);
            continue;
        }
        const desc = $.parseHTML(item.description)[5];
        images.push({
            url: getThumbnailUrl(item.media.m),
            largeUrl: getLargeSizeUrl(item.media.m),
            title: item.title,
            description: desc ? desc.innerText : '',
            tags: item.tags
        });
    }
    return images;
}

function getLargeSizeUrl(imageUrl) {
    return imageUrl.substring(0, imageUrl.length - 5) + 'b.jpg';
}

function getThumbnailUrl(imageUrl) {
    return imageUrl.substring(0, imageUrl.length - 5) + 'n.jpg';
}

function showImage(imageUrl) {
    $('#image-overlay').html(`<img class="img-fluid centerImage"src="${imageUrl}">`);
    $('#image-overlay').show();
}

function hideImage() {
    $('#image-overlay').hide();
}
