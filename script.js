let entrada=document.getElementById("crearTarea")
let Lista=document.getElementById("listaTareas")
let boton=document.getElementById("botonSub")

boton.addEventListener("click",addList)

function addList(){
    if(entrada.value.trim() !== ''){
        let tarea=document.createElement('li');
        tarea.className='tarea';

        let textoTarea=document.createTextNode(entrada.value);
        tarea.appendChild(textoTarea)

        let eliminar=document.createElement('button');
        eliminar.className='deleteButton';
        eliminar.innerHTML='eliminar';
        eliminar.onclick=function(){
            Lista.removeChild(tarea)
        }

        tarea.appendChild(eliminar);
        Lista.appendChild(tarea);

        entrada.value=''
    }
}

