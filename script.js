const container = document.querySelector('.container');
const unsplashUrl = `https://source.unsplash.com/random/`
let imagesUrls;

const numberOfRows = 10;

// Needed to prevent unsplash returning the same image
const getIncrementalImageSize = (count) => {
    return 300 + count;
}

for (let i = 0; i < (numberOfRows * 3); i++) {
    const image = document.createElement('img');
    const imageSize = getIncrementalImageSize(i)
    image.src = `${unsplashUrl}${imageSize}x${imageSize}`;
    container.appendChild(image);
}