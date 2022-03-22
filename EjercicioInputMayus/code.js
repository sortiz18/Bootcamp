function entrarMayuscula() {
    convertir();
var tamano = document.getElementById("tamano");      
var name = document.getElementById("name");
tamano.value = name.value.length;
}

function convertir() {
var cbox1 = document.getElementById("cbox1");
    var name = document.getElementById("name");      
    if (cbox1.checked == true) {
        name.value = name.value.toUpperCase();
    } else {
  name.value = name.value.toLowerCase();    	
}
};