var catCollection = ['http://bit.ly/2o3ftDx',
					 'http://bit.ly/2nfZKxg',
					 'http://bit.ly/2nJfKLj',
					 'http://bit.ly/2nJpzsK',
					 'http://bit.ly/2nJcy2r',
					 'http://bit.ly/2nrTyTC']

var count = -1;
function goForward(){
	count = count >= catCollection.length-1 ? 0 : count +1;
	document.getElementById('display').src = catCollection[count];

}

function goBackward(){
	count = count <= 0 ? catCollection.length-1 : count -1;
	document.getElementById('display').src = catCollection[count];
}

document.addEventListener('DOMContentLoaded', goForward);