function orderByAsc(){
    
const url = 'http://localhost:3000/api/asc/'
const contenedor = document.querySelector('tbody')
let resultados = ''
//funcion para mostrar los resultados de forma ascendente  
const mostrar = (citas) => {
    citas.forEach(cita => {
        resultados += `<tr>
                            <td>${cita.id_citas}</td>
                            <td>${cita.id_estudiante}</td>
                            <td>${cita.asunto}</td>
                            <td>${cita.id_rol}</td>
                            <td>${cita.fecha}</td>
                            <td>${cita.estado}</td>                            
                       </tr>
                    `    
    })
    contenedor.innerHTML = resultados   
}

fetch(url)
    .then( response => response.json() )
    .then( data => mostrar(data) )
    .catch( error => console.log(error))
 
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
 }
}

function orderByDesc(){
    const url = 'http://localhost:3000/api/desc/'
    const contenedor = document.querySelector('tbody')
    let resultados = ''
    //funcion para mostrar los resultados de forma ascendente  
    const mostrar = (citas) => {
        citas.forEach(cita => {
            resultados += `<tr>
                                <td>${cita.id_citas}</td>
                                <td>${cita.id_estudiante}</td>
                                <td>${cita.asunto}</td>
                                <td>${cita.id_rol}</td>
                                <td>${cita.fecha}</td>
                                <td>${cita.estado}</td>
                           </tr>
                        `    
        })
        contenedor.innerHTML = resultados   
    }
    
    fetch(url)
        .then( response => response.json() )
        .then( data => mostrar(data) )
        .catch( error => console.log(error))
     
    const on = (element, event, selector, handler) => {
        element.addEventListener(event, e => {
            if(e.target.closest(selector)){
                handler(e)
            }
        })
    }  
}

function count(){
const url = 'http://localhost:3000/api/count/'
const contenedor = document.querySelector('tbody')
let resultados = ''


    const mostrar = (citas) => {
        citas.forEach(cita => {
            resultados += `  
                            <pre> <h2>¿Cuantas citas se han generado?  Se han generado ${cita.contador} citas</h2></pre>
                           <h4></h1>
                        `    
        })
        contenedor.innerHTML = resultados   
    }
    
    fetch(url)
        .then( response => response.json() )
        .then( data => mostrar(data) )
        .catch( error => console.log(error))
     
    const on = (element, event, selector, handler) => {
        element.addEventListener(event, e => {
            if(e.target.closest(selector)){
                handler(e)
            }
        })
     } 
}

function innerJoin(){
    const url = 'http://localhost:3000/api/inner/'
    const contenedor = document.querySelector('tbody')
    let resultados = ''
    //funcion para mostrar los resultados de forma ascendente  
    const mostrar = (citas) => {
        citas.forEach(cita => {
            resultados += `<tr>
                                <td>${cita.id_citas}</td>
                                <td>${cita.nombre}</td>
                                <td>${cita.apellido}</td>
                                <td>${cita.asunto}</td>                            
                           </tr>
                        `    
        })
        contenedor.innerHTML = resultados   
    }
    
    fetch(url)
        .then( response => response.json() )
        .then( data => mostrar(data) )
        .catch( error => console.log(error))
     
    const on = (element, event, selector, handler) => {
        element.addEventListener(event, e => {
            if(e.target.closest(selector)){
                handler(e)
            }
        })
    }  

}

function min(){
    const url = 'http://localhost:3000/api/min/'
    const contenedor = document.querySelector('tbody')
    let resultados = ''
        const mostrar = (citas) => {
            citas.forEach(cita => {
                resultados += `  
                                <pre> <h2>¿Cual es la edad minima ?  La edad minima es ${cita.minimo} años</h2></pre>
                               <h4></h1>
                            `    
            })
            contenedor.innerHTML = resultados   
        }
        
        fetch(url)
            .then( response => response.json() )
            .then( data => mostrar(data) )
            .catch( error => console.log(error))
         
        const on = (element, event, selector, handler) => {
            element.addEventListener(event, e => {
                if(e.target.closest(selector)){
                    handler(e)
                }
            })
         } 

}

function max(){
    const url = 'http://localhost:3000/api/max/'
    const contenedor = document.querySelector('tbody')
    let resultados = ''
        const mostrar = (citas) => {
            citas.forEach(cita => {
                resultados += `  
                                <pre> <h2>¿Cual es la edad maxima ?  La edad maxima es ${cita.maximo} años</h2></pre>
                               <h4></h1>
                            `    
            })
            contenedor.innerHTML = resultados   
        }
        
        fetch(url)
            .then( response => response.json() )
            .then( data => mostrar(data) )
            .catch( error => console.log(error))
         
        const on = (element, event, selector, handler) => {
            element.addEventListener(event, e => {
                if(e.target.closest(selector)){
                    handler(e)
                }
            })
         } 

}

function avg(){
    
    const url = 'http://localhost:3000/api/avg/'
    const contenedor = document.querySelector('tbody')
    let resultados = ''

    const mostrar = (citas) => {
        citas.forEach(cita => {
            resultados += `  
                            <pre> <h2>¿Cual es el promedio de la edad del colegio ?  El promedio es ${cita.promedio} </h2></pre>
                           <h4></h1>
                        `    
        })
        contenedor.innerHTML = resultados   
    }
        
        fetch(url)
            .then( response => response.json() )
            .then( data => mostrar(data) )
            .catch( error => console.log(error))
         
        const on = (element, event, selector, handler) => {
            element.addEventListener(event, e => {
                if(e.target.closest(selector)){
                    handler(e)
                }
            })
         } 
} 

function sum(){
    const url = 'http://localhost:3000/api/sum/'
    const contenedor = document.querySelector('tbody')
    let resultados = ''
    
    const mostrar = (citas) => {
        citas.forEach(cita => {
            resultados += `  
                            <pre> <h2>¿Cuanto es la sumatoria de la edad ?<br>  El suma de la edad de los estudiantes es ${cita.suma} </h2></pre>
                           <h4></h1>
                        `    
        })
        contenedor.innerHTML = resultados   
    }
        
        fetch(url)
            .then( response => response.json() )
            .then( data => mostrar(data) )
            .catch( error => console.log(error))
         
        const on = (element, event, selector, handler) => {
            element.addEventListener(event, e => {
                if(e.target.closest(selector)){
                    handler(e)
                }
            })
         } 
} 

function leftJoin(){
    const url = 'http://localhost:3000/api/left/'
    const contenedor = document.querySelector('tbody')
    let resultados = ''
    //funcion para mostrar los resultados de forma ascendente  
    const mostrar = (citas) => {
        citas.forEach(cita => {
            resultados += `<tr>
                                <td>${cita.probando}</td>
                                <td>${cita.id_citas}</td>
                           </tr>
                        `    
        })
        contenedor.innerHTML = resultados   
    }
    
    fetch(url)
        .then( response => response.json() )
        .then( data => mostrar(data) )
        .catch( error => console.log(error))
     
    const on = (element, event, selector, handler) => {
        element.addEventListener(event, e => {
            if(e.target.closest(selector)){
                handler(e)
            }
        })
    }      
}




































    


