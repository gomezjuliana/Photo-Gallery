// These are my cat photos
var catCollection = ['http://bit.ly/2o3ftDx',
					 'http://bit.ly/2nfZKxg',
					 'http://bit.ly/2nJfKLj',
					 'http://bit.ly/2nJpzsK',
					 'http://bit.ly/2nJcy2r',
					 'http://bit.ly/2nrTyTC']

//This should make the photo change with every click
function goForward(){
	for (var i = 0; i < catCollection.length; i++){
	var kitty = '<img src=' + catCollection[i] + '>'
    }
    return document.getElementById("display").innerHTML = kitty;
}
