let productos = [1, 2, 3, 4, 5];
let stock = productos.length;

for(let i = stock; i >= 0; i--){

    console.log(`Hay ${i} productos en stock`);
    productos.pop();
};