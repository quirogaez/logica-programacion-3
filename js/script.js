
let btnSubmit = document.querySelector(".btnSubmit");

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let inputNumber = document.querySelector("#inpNumber");
    let inputValue = inputNumber.value;


    try {
        inputValue = parseInt(inputValue);
        if (isNaN(inputValue)) {
            throw new Error("El valor debe ser de tipo entero");
        }
        if (inputValue < 0) {
            throw new Error("El valor debe ser positivo");
        }
        /* Calcular factorial */
        const resFactorial =  calcFactorial(inputValue);
        /* Pintar factoriaL */
        showFactorial(inputValue, resFactorial);
    }
    catch (error) {
        createError(error.message);
    } 
    
})


function createError(message) {
    /* Variables del scope createError */
    const container = document.querySelector(".container");
    const containerFirstNode = document.querySelector(".container").firstChild;
    
    /* Elementos html a utilziar en el error */
    divError = document.createElement("div");
    textError = document.createElement("p");
    closeError = document.createElement("button");

    /* Añadiendo estilo al div error */
    divError.classList.add("divError");

    /* Insertando mensaje de error */
    textError.textContent = message;
    textError.classList.add("textError");
    

    /* Creando boton cerrar */
    closeError.textContent = "X";
    closeError.classList.add("closeError");

    /* Añadiendo evento al boton */
    closeError.addEventListener("click", function(e) {
        container.removeChild(this.parentNode);
    })

    /* Añadiendo aL div de error */
    divError.appendChild(textError);
    divError.appendChild(closeError);

    /* Añadiendo el error a la etiqueta section */
    container.insertBefore(divError, containerFirstNode);

    /* Añadiendo un setTimrout para que desaparezca en un periordo de tiempo */
}

function calcFactorial(num) {
    /* Funcion encargada de calcular el factorial */
    if (num === 0 || num === 1) {
        return 1
    }
    return num * calcFactorial(num - 1);
}

function showFactorial(num, res) {
    /* Funcion que pinta el nujmero factorial en la pantalla */
    let resFactorialDiv =  document.querySelector(".resultFactorial");
    resFactorialDiv.innerHTML = "";
    /* Elementos html a utilziar */
    let resText = document.createElement("h1");
    /* Añadiendo clase */
    resText.classList.add("resFactorial")

    resText.innerHTML = `El factorial del numero ${num} es: ${res}`;
    /* Agregar nodo al div */
    resFactorialDiv.appendChild(resText);
}
