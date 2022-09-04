let botondrop = document.getElementById("dinamic")
let offdrop = document.getElementById("off")
let contenido = document.querySelector(".main")
let enviarTarea = document.querySelector(".submitwork")
visible = false
enviarTarea.onclick = () =>{
    console.log("Hola tarea añadida")
}
botondrop.onclick = () => {
        botondrop.nextElementSibling.style.transform = "translateX(0px)"
        console.log(botondrop.parentElement)
        botondrop.style.visibility = "hidden"
        // contenido.style.filter = "blur(4px)"
        // botondrop.style.position = "absolute"activar esto para q suba la wea
}

offdrop.onclick = () => {
    botondrop.nextElementSibling.style.transform = "translateX(-500px)"
    botondrop.style.visibility = "visible"
    botondrop.style.position = "relative"
    // contenido.style.filter = "none";
}