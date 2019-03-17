function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}
const apiUrl = 'https://pixabay.com/api/?key=10345617-64d66bf9e1b081a57af727dca&q=beauty&girl&image_type=photo&pretty=true';

async function galleryFetch() {
	const imageResponse = await fetch(apiUrl);
	const galleryPic = await imageResponse.json();
	const gallery = document.querySelector("#images");
	for(let i = 0, len = 15; i < len; i++) {
		let img = createNode('img');
		img.src = galleryPic.hits[i].largeImageURL;
		append(gallery, img);
	}
	console.log(galleryPic.hits[0].largeImageURL);
}


galleryFetch();