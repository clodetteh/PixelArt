var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

//Variables globales
let paleta = "#paleta";
let grilla = "#grilla-pixeles";
let grillaPixeles = "#grilla-pixeles div";
let indicadorColor = "#indicador-de-color";
let indicadorMensaje = "#indicador-de-color-mensaje";
let mouseApretado = false;

let colorElegido = 0;

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    cambiarIndicador(colorActual);
  })
);

//Carga del documento
$(document).ready(
  paletaColores(),
  pintarGrilla(),
  pintarSuperheroe ("#batman", batman),
  pintarSuperheroe ("#wonder", wonder),
  pintarSuperheroe ("#flash", flash),
  pintarSuperheroe ("#invisible", invisible)

);

//Funciones
function paletaColores() {
  for(let i = 0; i < nombreColores.length; i++){
    $('<div/>', {'class': 'color-paleta'}).css({'background-color' : nombreColores[i]}).appendTo(paleta);
  }
};

function pintarGrilla() {
  for (let i = 0; i <= 1750; i++){
    $('<div/>').appendTo(grilla);
}
};



function cambiarIndicador(colorGuardado) {
  $(indicadorColor).css({'background-color' : colorGuardado});
  $(indicadorMensaje).html('Pincel: ' + colorGuardado);
  colorElegido = colorGuardado;

};

function colorear(selector, estilo) {
  $(selector).css(estilo);
 }

//EVENTOS
$("#paleta div").click(
  function () {
    let colorSeleccionado = $(this).css('background-color');
    cambiarIndicador(colorSeleccionado);
  }
);


$(grillaPixeles)
.click(
  function() {
    colorear(this, {'background-color': colorElegido});
})
.mousedown(function() {
    mouseApretado = true;
})
.mousemove(function() {
    if(mouseApretado) {
      colorear(this, {'background-color': colorElegido});
    } 
 })
.mouseup(function() {
    mouseApretado = false;
});

$("#borrar").click(
  function() {
    $(grillaPixeles).animate({"background-color" : "#ffffff", "opacity" : "1"}, 1000);
  });

$("#guardar").click(
  function() {
    guardarPixelArt();
  }
);

//Carga super heroes

function pintarSuperheroe (selector, superHeroe){
$(selector).click(
  function() {
    cargarSuperheroe(superHeroe)
  });
}



