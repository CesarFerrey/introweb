document.addEventListener("DOMContentLoaded", () =>{

    mostrarSalones();
    
// Verificar si el usuario está logueado:
if(!sessionStorage.getItem("usuario")) {
    alert("Debe loguearse");
    window.location.href = "login.html";
    return;
}

// Manejar el botón "Cerrar Sesión"
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
if (form) {
form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nombre = document.getElementById("nombreSalon").value;
    const direccion = document.getElementById("direccion").value;
    const capacidad = document.getElementById("capacidad").value;

    const nuevoSalon = { nombre, direccion, capacidad };
    const salones = JSON.parse(localStorage.getItem("salones")) || [];
    salones.push(nuevoSalon);
    localStorage.setItem("salones", JSON.stringify(salones));

    alert (`El nuevo salón tiene los siguientes atributos nombre: ${nombre}, dirección: ${direccion}, capacidad: ${capacidad}`);
    
    this.reset();
    mostrarSalones();

    });
    mostrarSalones();
};

function mostrarSalones() {
    const tablaBody=document.querySelector("#salonList");

    tablaBody.innerHTML = ""; // Limpiar la tabla antes de mostrar los salones

    const salones = JSON.parse(localStorage.getItem("salones")) || [];
    salones.forEach((salon,index)=> {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${salon.nombre}</td>
            <td>${salon.direccion}</td>
            <td>${salon.capacidad}</td>
            <td>
                <button class="btn btn-danger" onclick="eliminarSalon('${index}')">Eliminar</button>
                <button class="btn btn-sm btn-primary me-2" onclick="editarSalon('${index}')">Editar</button>
            </td>
    
        `;
        tablaBody.appendChild(fila);

        
})
}});
