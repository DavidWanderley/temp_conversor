function converterCtoF(tempC) {
    const tempF = (tempC * 9/5) + 32
    return tempF;
}

function convertCtoK(tempC) {
    const tempK = tempC + 273.15;
    return tempK;
}


function converter(temp) {
    let tempC = document.getElementById("tempC").value.trim() === "" ? 0 : parseFloat(document.getElementById("tempC").value);
    let resultado = 0;

    if (temp === "k") {
        resultado = convertCtoK(tempC);
    }else if (temp === "f") {
        resultado = converterCtoF(tempC);
    } else {
        alert("Selecione uma opção válida.");
        return;
    }
    
    document.getElementsByClassName("resultado")[0].style.display = 'flex';
    document.getElementById("resultado").innerHTML = ` ${resultado} ${temp}`;
}

function limpar() {
    document.getElementsByClassName("resultado")[0].style.display = 'none';

}