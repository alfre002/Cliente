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

operacion = prompt("Introduce una opetración: \nSumar. \nRestar. \nMultiplicar. \nDividir.")

switch (operacion) {
    case "+":
        alert(`${num1} + ${num2} = ${num1 + num2}`)
        break;

        case "-":
            alert(`${num1} - ${num2} = ${num1 - num2}`)
            break;

            case "*":
                alert(`${num1} * ${num2} = ${num1 * num2}`)
                break;

                case "/":
                    alert(`${num1} / ${num2} = ${num1 / num2}`)
                    break;

}