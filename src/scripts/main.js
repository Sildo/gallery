const apiUrl = 'https://pixabay.com/api/?key=10345617-64d66bf9e1b081a57af727dca&q=beauty&girl&image_type=photo&pretty=true';

async function galleryFetch() {
    const imageResponse = await fetch(apiUrl);
    const galleryPic = await imageResponse.json();
    const galleryEl = document.querySelector("#images");

    const hits = galleryPic.hits.slice(0, 15);

    for (const hit of hits) {
        galleryEl.insertAdjacentHTML('beforeend', `<img src="${hit.largeImageURL}">`);
    }
}

galleryFetch();