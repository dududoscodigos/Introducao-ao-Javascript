function inicio() {
    let celsius = prompt("Digite a temperatura em graus Celsius (°C):");
    
    let fahrenheit = (Number(celsius) * 1.8) + 32;
    
    console.log("A temperatura em Fahrenheit é: " + fahrenheit + "°F");
}

inicio();