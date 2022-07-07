//factorial usando while, if y una sentencia break
let num = 10;
let acumulador = 1;
let i =1;
while(true){
    acumulador *= i;
    i++;
    console.log(acumulador);
    if(i > 10){
        break;
    }
}