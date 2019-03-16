function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}

const gallery = document.querySelector("#images");
const apiUrl = "https://pixabay.com/api/?key=10345617-64d66bf9e1b081a57af727dca&q=beauty&girl&image_type=photo&pretty=true";
fetch(apiUrl)
	.then(res => res.json())
	.then(function (data) {
		let images = data.hits;
		return images.map(function (image) {
			let img = createNode('img');
			img.src = image.largeImageURL;
			append(gallery, img);
		})
	})

	.catch(function (error) {
		console.log(error);
	});