function inicio() {
    let valorTotal = prompt("Digite o valor total da conta:");
    let numeroAmigos = prompt("Digite o número de amigos:");
    
    let valorPorPessoa = Number(valorTotal) / Number(numeroAmigos);
    
    console.log("Cada um deve pagar: R$ " + valorPorPessoa);
}

inicio();