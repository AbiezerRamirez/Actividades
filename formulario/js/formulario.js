window.onload = function () {
	document.getElementById("imprimir").addEventListener("click", function () {
		window.print();
	});
	document.getElementById("rango").addEventListener("input", function () {
		document.getElementById("vRango").innerHTML = "("+this.value+")";
	});
}

