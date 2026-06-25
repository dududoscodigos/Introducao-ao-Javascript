function inicio() {
    let idadeAnos = prompt("Digite a sua idade em anos:");
    
    let idadeDias = Number(idadeAnos) * 365;
    
    console.log("Você já viveu aproximadamente " + idadeDias + " dias");
}

inicio();