num1 = parseInt(prompt("Introduce un número."))

while (isNaN(num1)) {
    alert("Debes introducir un número.")
    num1 = parseInt(prompt("Introduce otro número."))
}

num2 = parseInt(prompt("Introduce un número."))

while (isNaN(num2)) {
    alert("Debes introducir un número.")
    num2 = parseInt(prompt("Introduce otro número."))
}

operacion = prompt("Introduce una operación: \nSumar. \nRestar. \nMultiplicar. \nDividir.")

switch (operacion) {
    case "Sumar":ç
        alert(`${num1} + ${num2} = ${num1 + num2}`)
        break;

    case "Restar":
        alert(`${num1} - ${num2} = ${num1 - num2}`)
        break;

    case "Multiplicar":
        alert(`${num1} * ${num2} = ${num1 * num2}`)
        break;

    case "Dividir":
        alert(`${num1} / ${num2} = ${num1 / num2}`)
        break;

}