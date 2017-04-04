// These are my cat photos
var catCollection = ['http://bit.ly/2o3ftDx',
					 'http://bit.ly/2nfZKxg',
					 'http://bit.ly/2nJfKLj',
					 'http://bit.ly/2nJpzsK',
					 'http://bit.ly/2nJcy2r',
					 'http://bit.ly/2nrTyTC']

// These functions make the gallery move
var count = 0;

var prevImg = document.querySelector('.gallery-prev');
var currImg = document.querySelector('.gallery-curr');
var nextImg = document.querySelector('.gallery-next');

function goForward(){
	nextImg.classList.add('gallery-next-curr');
	currImg.classList.add('gallery-curr-prev');
	count = count >= catCollection.length-1 ? 0 : count +1;

	currImg.addEventListener('transitionend', setup);
}

function goBackward(){
	prevImg.classList.add('gallery-prev-curr');
	currImg.classList.add('gallery-curr-next');
	count = count <= 0 ? catCollection.length-1 : count -1;

	currImg.addEventListener('transitionend', setup);
}

function setup() {
	const prev = count-1 < 0 ? catCollection.length-1 : count-1;
	const next = count+1 >= catCollection.length ? 0 : count+1;
	prevImg.src = catCollection[prev];
	currImg.src = catCollection[count];
	nextImg.src = catCollection[next];
	prevImg.classList.remove('gallery-prev-curr');
	nextImg.classList.remove('gallery-next-curr');
	currImg.classList.remove('gallery-curr-prev', 'gallery-curr-next');

}

// This loads the first photo once the page is loaded
document.addEventListener('DOMContentLoaded', setup);