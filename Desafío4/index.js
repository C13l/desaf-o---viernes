function Gastos(precioUnitario, cantidadpedida){
    let cantgastada = precioUnitario * cantidadpedida;
    return cantgastada;
}

let precio = 1000;
let cant = Number(prompt("Ingrese la cantidad de productos que quiera comprar."));
let total = Gastos(precio, cant);
console.log(`Su total es de ${total}`);