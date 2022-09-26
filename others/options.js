// let opciones = document.querySelectorAll("#options")
let contenidoA = document.querySelector(".container")
let entradaTask = document.querySelector(".submitwork")
let form = document.querySelector(".buttons-input")
let deloption = document.querySelector(".delOption")

function crearElemento(task){
    // opciones.appendChild()
    return `<div class="container-self">
    <input type="radio">${task}
    </div>
    <div><img id="options" style="width:30px; height: 20px;" src="others/images/eliminar.svg" alt="icono iniciar sesion">
    <div class = "delOption">
        <span>Eliminar tarea</span>
    </div>
    </div>
    `

}
render = () =>{
    let opciones = document.querySelectorAll("#options")
    opciones.forEach((op) =>{
        op.addEventListener("click", () =>{
            //eliminara el elemnento completo
            op.parentElement.parentElement.outerHTML = ""
            // op.parentElement.parentElement.parentElement.removeChild(op.parentElement.parentElement)
            // op.parentElement.parentElement.removeChild(op.parentElement.parentElement.lastChild)
            if(op.nextElementSibling.style.visibility == "hidden"){
                op.nextElementSibling.style.visibility = "visible"
            }else{
                op.nextElementSibling.style.visibility = "hidden"
            }
        })
    
    })
}

window.onload = () => {
    render()
    form.onsubmit = (e) =>{
        e.preventDefault();//evitar que se recargue la pagina(hará que se pierda los datos por el momento, además de ser molesto para el usuario)
        fragmento = document.createDocumentFragment()
        createElemento = document.createElement("DIV")
        createElemento.classList.add("container-items")
        createElemento.innerHTML = crearElemento(entradaTask.previousElementSibling.value)
        fragmento.appendChild(createElemento)
        contenidoA.appendChild(fragmento)
        entradaTask.previousElementSibling.value = ""
        render()
        
        // alert("Tarea añadida")
    }


}