let qntAdultos = 0;
let qntCriancas = 0;
let duracao = 0;


function calcularValores() {
    const valor1 = document.getElementById("adultos");
    qntAdultos = Number(valor1.value);

    const valor2 = document.getElementById("criancas");
    qntCriancas = Number(valor2.value);

    const valor3 = document.getElementById("duracao");
    duracao = Number(valor3.value);

    document.getElementById("resultado").innerHTML = `
    <div class = "saida">Você erá precisar de:</div>
    <div class = "saida">${carne()} Kg de carne</div>
    <div class = "saida">${cerveja()} latas de cerveja</div>
    <div class = "saida">${bebida()} garrafas de 2L de bebida</div>
`;
}

function carne() {

    let totalCarne;

    if (duracao <= 6) {
         totalCarne = qntAdultos * 400 + qntCriancas * 200;
    } else {
         totalCarne = qntAdultos * 650 + qntCriancas * 325;
    }

    return (totalCarne/1000).toFixed(1);
}



function cerveja() {

    let totalCerveja;

    if (duracao <= 6) {
        totalCerveja = Math.ceil((qntAdultos * 1200)/355);
    } else {
        totalCerveja = Math.ceil((qntAdultos * 2000)/355);
    }

    return totalCerveja;

}

function bebida() {
    
    let totalBebida;

    if (duracao <= 6) {
        
        totalBebida = Math.ceil((qntAdultos * 1000 + qntCriancas * 500)/2000);

    } else {
        
        totalBebida = Math.ceil((qntAdultos * 1500 + qntCriancas * 750)/2000);

    }

    return totalBebida;
}




