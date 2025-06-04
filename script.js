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

    if (temp === "k") {
        const resultadok = convertCtoK(tempC);
        document.getElementsByClassName("resultado")[0].style.display = 'flex';
        return document.getElementById("resultado").innerHTML = ` ${resultadok} °K`;
    }else if (temp === "f") {
        const resultadof = converterCtoF(tempC);
        document.getElementsByClassName("resultado")[0].style.display = 'flex';
        return document.getElementById("resultado").innerHTML = ` ${resultadof} °F`;
    } else {
        alert("Selecione uma opção válida.");
        return;
    }
}

function limpar() {
    document.getElementsByClassName("resultado")[0].style.display = 'none';

}