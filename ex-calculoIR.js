//João está criando uma aplicação para calcular o IR a partir do salário. 
//Ele olhou na tabela de IRPF e implementou as regras para 15% e 22.5%:

//const salario = 3300.0;
//
//if(salario < 2600.0) 
//    console.log("A sua aliquota é de 15%");
//    console.log("Você pode deduzir até R$ 350");
//
//else if(salario < 3750.0) 
//    console.log("A sua aliquota é de 22,5%");
//    console.log("Você pode deduzir até R$ 636");

//Porém o programa tem um comportamento estranho. Ao compilar e rodar, é impresso:

//Você pode deduzir até R$ 350
//A sua aliquota é de 22,5%
//Você pode deduzir até R$ 636

//Repare que o programa indica que podemos deduzir R$350 E R$636! Como corrigir o problema?

const salario = 3300.0;

if (salario < 2600.0) {
    console.log("A sua aliquota é de 15%");
    console.log("Você pode deduzir até R$ 350");

} else if (salario < 3750.0) {
    console.log("A sua aliquota é de 22,5%");
    console.log("Você pode deduzir até R$ 636");
}

//O problema é que faltam as chaves na condicional. Sem as chaves, o if apenas executará a primeira instrução depois dele.