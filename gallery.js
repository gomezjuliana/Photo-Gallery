// These are my cat photos
var catCollection = ['http://bit.ly/2o3ftDx',
					 'http://bit.ly/2nfZKxg',
					 'http://bit.ly/2nJfKLj',
					 'http://bit.ly/2nJpzsK',
					 'http://bit.ly/2nJcy2r',
					 'http://bit.ly/2nrTyTC']

//This makes the photo change with every click
	var count = 0;
function goForward(){
    document.getElementById("display").src = catCollection[count];
	count = (count >= catCollection.length-1) ? 0 : count + 1;
	console.log(count);
}

function goBackward(){
	if (count = -1){
	   count = 5;
	   document.getElementById("display").src = catCollection[count];
	   console.log(count, catCollection[count]);
	} else if (count <= catCollection.length){
		count = count -1;
		document.getElementById("display").src = catCollection[count];
		console.log(count, catCollection[count]);
	}	
}

document.addEventListener('DOMContentLoaded', goForward);
