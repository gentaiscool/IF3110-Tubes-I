function addToCart(amounts, ids)
{
	var xmlhttp;
	if (window.XMLHttpRequest){
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else{
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			if(xmlhttp.responseText == 0)
				alert("cart updated to " + amounts);
			else if(xmlhttp.responseText == 1)
				alert("cart add new item  " + amounts + "x");
			else if(xmlhttp.responseText == 2)
				alert("first to cart " + amounts);
			else if(xmlhttp.responseText == 3)
				alert("stock is smaller than your request");
		}
	}
	xmlhttp.open("GET","../controllers/add_cart.php?amount="+amounts+"&id="+ids,true);
	xmlhttp.send();
}

function addToCart2(amounts, ids, desc)
{
	var xmlhttp;
	
	if (window.XMLHttpRequest){
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else{
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			if(xmlhttp.responseText == 0)
				alert("cart updated to " + amounts);
			else if(xmlhttp.responseText == 1)
				alert("cart add new item  " + amounts + "x");
			else if(xmlhttp.responseText == 2)
				alert("first to cart " + amounts);
			else if(xmlhttp.responseText == 3)
				alert("stock is smaller than your request");
		}
	}
	xmlhttp.open("GET","../controllers/add_cart2.php?amount="+amounts+"&id="+ids+"&desc="+desc,true);
	xmlhttp.send();
}

function buy()
{
	var xmlhttp;
	if (window.XMLHttpRequest){
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else{
		// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			if(xmlhttp.responseText == 1)
				alert("kamu berhasil membeli");
			else if(xmlhttp.responseText == 2)
				alert("kamu gagal membeli atau stok habis");
			else if(xmlhttp.responseText == 3)
				alert("stock is smaller than your request");
		}
	}
	xmlhttp.open("GET","../controllers/buy_cart.php",true);
	xmlhttp.send();
}