document.addEventListener("DOMContentLoaded", () =>{

// Verificar si el usuario está logueado:
if(!sessionStorage.getItem("usuario")) {
    alert("Debe loguearse");
    window.location.href = "login.html";
    return;
}

const salir = document.getElementById("logout");
console.log(salir);
if (salir) {
    salir.addEventListener("click", () => {
        sessionStorage.clear();
        window.location.href = "login.html";
    });
};

// Para manejar el formulario de alta de salón:
const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nombre = document.getElementById("nombreSalon").value;
    const direccion = document.getElementById("direccion").value;
    const capacidad = document.getElementById("capacidad").value;

    alert (`El nuevo salón tiene los siguientes atributos nombre: ${nombre}, dirección: ${direccion}, capacidad: ${capacidad}`);
    
    this.reset();
    });
});
