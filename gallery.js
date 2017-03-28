
var catCollection = ['http://bit.ly/2o3ftDx',
					 'http://bit.ly/2nfZKxg',
					 'http://bit.ly/2nJfKLj',
					 'http://bit.ly/2nJpzsK',
					 'http://bit.ly/2nJcy2r',
					 'http://bit.ly/2nrTyTC']

function goForward(){
	for (var i = 0; i < catCollection.length; i++){
	var kitty = document.getElementById("display").innerHTML = '<img src=' + catCollection[i] + '>';
    }
    return kitty;
}
