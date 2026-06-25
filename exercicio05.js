function inicio() {
    let nota1 = prompt("Digite a primeira nota:");
    let nota2 = prompt("Digite a segunda nota:");
    let nota3 = prompt("Digite a terceira nota:");
    
    let media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
    
    console.log("A média final é: " + media);
}

inicio();