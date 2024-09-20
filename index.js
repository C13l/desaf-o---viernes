const nombreProducto = "Pulseras DIY";
const precioUnitario = 1000;
let cantidadDeseada = Number(prompt("Ingrese la cantidad de productos que quiera comprar."));
let preciofinal = precioUnitario * cantidadDeseada;
if (cantidadDeseada >= 5){
    alert(`El precio de su compra es ${preciofinal * 0.9}`);
} else{
    alert(`El precio de su compra es ${preciofinal}`);
}