function renderImg(element) {
    let image = document.createElement('img');
    image.src = element.picture;
    image.className = 'img-thumbnail m-2';
    return image;
}

function renderCaption(element) {
    let caption = document.createElement('figcaption');
    caption.className = 'figure-caption';
    caption.innerText = element.name;

    return caption;
}

function renderFigure(image, caption) {
    let figure = document.createElement('figure');
    figure.className = 'figure';

    figure.appendChild(image);
    figure.appendChild(caption);

    return figure;
}