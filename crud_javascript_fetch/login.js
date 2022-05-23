function IniciarSesion(){
    var user, pass;
    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;
    if(user == "Mateo" && pass == "1234"){
      window.location= "../html/crud_cita.html";
    }
    else{
      alert("Usted no es Administrador")
    }
}
  
  
  