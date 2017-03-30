// These are my cat photos
var catCollection = ['http://bit.ly/2o3ftDx',
					 'http://bit.ly/2nfZKxg',
					 'http://bit.ly/2nJfKLj',
					 'http://bit.ly/2nJpzsK',
					 'http://bit.ly/2nJcy2r',
					 'http://bit.ly/2nrTyTC']

// These functions make the gallery move
var count = -1;
function goForward(){
	count = count >= catCollection.length-1 ? 0 : count +1;
	document.getElementById('display').src = catCollection[count];

}



function goBackward(){
	display.classList.add('meow');
	count = count <= 0 ? catCollection.length-1 : count -1;
	document.getElementById('display').src = catCollection[count];
}

display.classList.remove('meow');

// This loads the first photo once the page is loaded
document.addEventListener('DOMContentLoaded', goForward);