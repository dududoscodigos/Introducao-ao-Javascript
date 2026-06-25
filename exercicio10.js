function inicio() {
    let distancia = prompt("Digite a distância da viagem em km:");
    let consumo = prompt("Digite o consumo do carro (km por litro):");
    let precoGasolina = prompt("Digite o preço do litro da gasolina:");
    
    let litrosNecessarios = Number(distancia) / Number(consumo);
    let valorTotalGasto = litrosNecessarios * Number(precoGasolina);
    
    console.log("O valor total gasto na viagem será: R$ " + valorTotalGasto);
}

inicio();