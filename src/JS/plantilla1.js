// Obtener los parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);

// Obtener los valores de los parámetros
const tag = urlParams.get('tag');
const fecha1 = urlParams.get('fecha1');
const fecha2 = urlParams.get('fecha2');
const vin = urlParams.get('vin');
const year = urlParams.get('year');
const marca = urlParams.get('marca');
const body_style = urlParams.get('body_style');
const color = urlParams.get('color');
const v_code = urlParams.get('v_code');

// Función para asignar texto a un elemento si existe
function setElementText(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    }
}

// Asignar los valores a los elementos correspondientes
setElementText('tag', tag);
setElementText('fecha1', fecha1);
setElementText('fecha1_1', fecha1);
setElementText('fecha2', fecha2);
setElementText('vin', vin);
setElementText('year', year);
setElementText('marca', marca);
setElementText('body_style', body_style);
setElementText('color', color);
setElementText('v_code', v_code);

// Obtener la fecha actual
const fecha = new Date();
const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Los meses van de 0 a 11
const dia = fecha.getDate().toString().padStart(2, '0');
const anio = fecha.getFullYear();

// Crear la cadena de texto en el formato mm/dd/yyyy
const fechaFormateada = `${mes}/${dia}/${anio}`;

// Convertir las fechas a objetos Date
const fechaActual = new Date(`${anio}-${mes}-${dia}`);
const fechaExpiracionParts = fecha2.split("/");
const fechaExpiracion = new Date(`${fechaExpiracionParts[2]}-${fechaExpiracionParts[0]}-${fechaExpiracionParts[1]}`);

// Comparar las fechas
const state = fechaActual <= fechaExpiracion ? "ACTIVE" : "INACTIVE";
setElementText('state', state);
