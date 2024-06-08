// Obtener los parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);

// Obtener el valor del parámetro 'tagNo'
const tag = urlParams.get('tag');
const fecha1 = urlParams.get('fecha1');
const fecha2 = urlParams.get('fecha2');
const vin = urlParams.get('vin');
const year = urlParams.get('year');
const marca = urlParams.get('marca');
const body_style = urlParams.get('body_style');
const color = urlParams.get('color');
const verification_code = urlParams.get('verification_code');

// Asignar el valor de 'tagNo' al elemento con id 'tag-no'
document.getElementById('tag').textContent = tag;
document.getElementById('fecha1').textContent = fecha1;
document.getElementById('fecha1_1').textContent = fecha1;
document.getElementById('fecha2').textContent = fecha2;
document.getElementById('vin').textContent = vin;
document.getElementById('year').textContent = year;
document.getElementById('marca').textContent = marca;
document.getElementById('body_style').textContent = body_style;
document.getElementById('color').textContent = color;
document.getElementById('color').textContent = verification_code;

// Obtener la fecha actual
var fecha = new Date();

// Obtener el mes, día y año
var mes = fecha.getMonth() + 1; // Los meses van de 0 a 11
var dia = fecha.getDate();
var anio = fecha.getFullYear();

// Formatear el mes y el día con ceros iniciales si es necesario
if (mes < 10) {
  mes = "0" + mes;
}

if (dia < 10) {
  dia = "0" + dia;
}

// Crear la cadena de texto en el formato mm/dd/aaaa
var fechaFormateada = mes + "/" + dia + "/" + anio;

// Obtener el año de la fecha de expiración
var yearExpiracion = parseInt(fecha2.split("/")[2], 10);

// Comparar las fechas
if (year < yearExpiracion || (year === yearExpiracion && fechaFormateada <= fecha2)) {
    document.getElementById('state').textContent = "ACTIVE";
} else {
    document.getElementById('state').textContent = "INACTIVE";
}
