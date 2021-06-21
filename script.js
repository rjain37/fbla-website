<!--Web Design Home Page-->
<!--Shiqi Cheng and Rohan Jain-->
<!--Code is from our knowledge unless otherwise specified by comments and images (other than our logo and favicon) are taken from public domain-->

<!--Javascript for the order and checkout pages-->
function goToOrder(chosenImage){
	document.getElementById("catalog").style.display = "none";
	document.getElementById("selectedImage").src = chosenImage;
	document.getElementById("order").style.display = "block";
	document.getElementById("hdnSelectedImage").value = chosenImage;
	//document.getElementById("formOptions").action = "checkout.html?selectedImage=" + chosenImage;
}
function loadCheckout(){
	//display picture
	var image = getParameterByName('hdnSelectedImage');
	document.getElementById("image").src = image;
	//finding which package they chose and the price of that package
	var packagePrice = getParameterByName('packages');
	var packageChosen = "";
	switch(packagePrice){
		case '30':
			packageChosen = "Package 1";
		case '40':
			packageChosen = "Package 2";
		case '50':
			packageChosen = "Package 3";
		case '60':
			packageChosen = "Package 4";
		
	}
	
	document.getElementById('package').innerHTML = packageChosen;
	document.getElementById('packagePrice').innerHTML = "$" + packagePrice;
	//finding out if they wanted editing or not then choosing their price
	var edit = getParameterByName('edit');
	var editPrice = 0;
	if(edit == null){
		document.getElementById('editingRow').style.display = 'none';
	}else if(edit == "15"){
		document.getElementById('editing').innerHTML = "Basic Editing";
		document.getElementById('editingPrice').innerHTML = "$15";
		editPrice = 15;
	}else{
		document.getElementById('editing').innerHTML = "Advanced Editing";
		document.getElementById('editingPrice').innerHTML = "$25";
		editPrice = 25;
	}
	//finding out whether they want a highlight reel or not
	var highlight = getParameterByName('highlight');
	var highlightPrice = 0;
	if(highlight == null){
		document.getElementById('highlightRow').style.display = 'none';
	}else{
		document.getElementById('highlight').innerHTML = "Highlight Reel";
		document.getElementById('highlightPrice').innerHTML = "$25";
		highlightPrice = 25;
	}
	//finding total price
	var totalPrice = parseInt(packagePrice) + parseInt(editPrice) + parseInt(highlightPrice);
	document.getElementById("totalPrice").innerHTML = "$" + totalPrice;
}
<!--Source: https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript-->
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
