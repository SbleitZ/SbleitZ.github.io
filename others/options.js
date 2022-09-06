let opciones = document.getElementById("options")
let contenidoA = document.querySelector(".container")
let entradaTask = document.querySelector(".submitwork")
let form = document.querySelector(".buttons-input")

opciones.onclick = () =>{
    alert("Función no disponible")
}


function crearElemento(task){
    return `<div class="container-self">
    <input type="radio">${task}
    </div>
    <div><img class="options" style="width:30px; height: 20px;" src="others/images/opciones.svg" alt="icono iniciar sesion"></div>`
}
form.onsubmit = (e) =>{
    e.preventDefault();//evitar que se recargue la pagina(hará que se pierda los datos por el momento, además de ser molesto para el usuario)
    fragmento = document.createDocumentFragment()
    createElemento = document.createElement("DIV")
    createElemento.classList.add("container-items")
    createElemento.innerHTML = crearElemento(entradaTask.previousElementSibling.value)
    fragmento.appendChild(createElemento)
    contenidoA.appendChild(fragmento)
    entradaTask.previousElementSibling.value = ""
    alert("Tarea añadida")
}

