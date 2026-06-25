function inicio() {
    let valorOriginal = prompt("Digite o valor original do par de sapatos:");
    
    let desconto = Number(valorOriginal) * 0.15;
    let valorFinal = Number(valorOriginal) - desconto;
    
    console.log("Valor do desconto: R$ " + desconto);
    console.log("Valor final a ser pago: R$ " + valorFinal);
}

inicio();