//Definición de variables

const url = 'http://localhost:3000/api/citas/'
const contenedor = document.querySelector('tbody')//
let resultados = ''//
const modalCitas = new bootstrap.Modal(document.getElementById('modalCitas'))//
const formCitas = document.querySelector('form')//
const id_estudiante = document.getElementById('id_estudiante')
const asunto = document.getElementById('asunto')
const edad = document.getElementById('edad')
const id_rol = document.getElementById('id_rol')
const fecha = document.getElementById('fecha')
const estado = document.getElementById('estado')

var opcion = ''

btnCrear.addEventListener('click', ()=>{
    id_estudiante.value = ''
    asunto.value = ''
    edad.value = ''
    id_rol.value = ''
    fecha.value = ''
    estado.value = ''
    modalCitas.show()
    opcion = 'crear'
})

//funcion para mostrar los resultados
const mostrar = (citas) => {
    citas.forEach(cita => {
        resultados += `<tr>
                            <td>${cita.id_citas}</td>
                            <td>${cita.id_estudiante}</td>
                            <td>${cita.asunto}</td>
                            <td>${cita.edad}</td>
                            <td>${cita.id_rol}</td>
                            <td>${cita.fecha}</td>
                            <td>${cita.estado}</td>
                            <td class="text-center"><a class="btnEditar btn btn-warning">Editar</a><a class="btnBorrar btn btn-danger">Borrar</a></td>
                       </tr>
                    `    
    })
    contenedor.innerHTML = resultados
    
}

//Procedimiento Mostrar
fetch(url)
    .then( response => response.json() )
    .then( data => mostrar(data) )
    .catch( error => console.log(error))

  
const on = (element, event, selector, handler) => {
    //console.log(element)
    //console.log(event)
    //console.log(selector)
    //console.log(handler)
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

//Procedimiento Borrar
on(document, 'click', '.btnBorrar', e => {
    const fila = e.target.parentNode.parentNode
    const id = fila.firstElementChild.innerHTML
    alertify.confirm("This is a confirm dialog.", 
    function  (){
        fetch(url+id, {
            method: 'DELETE'
        })
        .then( res => res.json() )
        .then( ()=> location.reload())
        //alertify.success('Ok')
    },
    function(){
        alertify.error('Cancel')
    })
})

//Procedimiento Editar
let idForm = 0
on(document, 'click', '.btnEditar', e => {    
    const fila = e.target.parentNode.parentNode
    idForm = fila.children[0].innerHTML
    const id_estudianteForm = fila.children[1].innerHTML
    const asuntoForm = fila.children[2].innerHTML
    const edadForm = fila.children[3].innerHTML
    const id_rolForm = fila.children[4].innerHTML
    const fechaForm = fila.children[5].innerHTML
    const estadoForm = fila.children[6].innerHTML
    id_estudiante.value =  id_estudianteForm
    asunto.value =  asuntoForm
    edad.value =  edadForm
    id_rol.value =  id_rolForm
    fecha.value =  fechaForm
    estado.value =  estadoForm
    opcion = 'editar'
    modalCitas.show()
     
})

//Procedimiento para Crear y Editar
formCitas.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(opcion=='crear'){        
        //console.log('OPCION CREAR')
        fetch(url, {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                id_estudiante:id_estudiante.value,
                asunto:asunto.value,
                edad:edad.value,
                id_rol:id_rol.value,
                fecha:fecha.value,
                estado:estado.value
            })
        })
        .then( response => response.json() )
        .then( data => {
            const nuevaCita = []
            nuevaCita.push(data)
            mostrar(nuevaCita)
        })
    }
    if(opcion=='editar'){    
        //console.log('OPCION EDITAR')
        fetch(url+idForm,{
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                id_estudiante:id_estudiante.value,
                asunto:asunto.value,
                edad:edad.value,
                id_rol:id_rol.value,
                fecha:fecha.value,
                estado:estado.value
            })
        })
        .then( response => response.json() )
        .then( response => location.reload() )
    }
    modalCitas.hide()
})

