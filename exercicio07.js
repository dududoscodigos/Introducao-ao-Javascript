function inicio() {
    let salarioAtual = prompt("Digite o salário atual do funcionário:");
    
    let aumento = Number(salarioAtual) * 0.20;
    let novoSalario = Number(salarioAtual) + aumento;
    
    console.log("O novo salário com 20% de aumento é: R$ " + novoSalario);
}

inicio();