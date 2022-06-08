console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\n Destinos disponíveis: ");
console.log(listaDeDestinos);

const podecomprar =  idadeComprador >= 18 || estaAcompanhada;

let contador = 0;

while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe");   
    }else{
        console.log("Destino não existe")
    }
    contador += 1;
}