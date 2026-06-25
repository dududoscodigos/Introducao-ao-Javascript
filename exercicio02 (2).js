function inicio() {
    let anoNascimento = prompt("Digite o seu ano de nascimento:");
    let anoAtual = prompt("Digite o ano atual:");
    
    let idade = Number(anoAtual) - Number(anoNascimento);
    
    alert("Idade aproximada da pessoa: " + idade + " anos");
}

inicio();