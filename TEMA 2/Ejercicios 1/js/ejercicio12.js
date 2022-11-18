/* Realiza un formulario que tenga dos campos de texto. Deberá validar antes de enviarse
si uno de los campos es un anagrama del otro y enviarse solo si lo es. Se ignorarán
mayúsculas, minúsculas y espacios. */

// selecciono boton enviar
const btnEnviar = document.querySelector("#enviar")

// funcion comprobrar si las palabras son anagramas
const esAnagrama = () => {
    // selecciono las palabras
    const campos = document.getElementsByTagName("input")
    // elimino los espacios
    for(let campo of campos) {
        campo.value.split(' ').join('')
        console.log(campo.value)
    }
}

btnEnviar.addEventListener("click", esAnagrama)