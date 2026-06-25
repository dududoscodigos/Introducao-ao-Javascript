function inicio() {
    let largura = prompt("Digite a largura da sala (em metros):");
    let comprimento = prompt("Digite o comprimento da sala (em metros):");
    
    let area = Number(largura) * Number(comprimento);
    
    console.log("A sala tem " + area + " metros quadrados");
}

inicio();