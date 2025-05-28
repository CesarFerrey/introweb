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

    const nuevoSalon = { nombre, direccion, capacidad };
    const salones = JSON.parse(localStorage.getItem("salones")) || [];
    salones.push(nuevoSalon);
    localStorage.setItem("salones", JSON.stringify(salones));

    alert (`El nuevo salón tiene los siguientes atributos nombre: ${nombre}, dirección: ${direccion}, capacidad: ${capacidad}`);
    
    this.reset();
    mostrarSalones();

    });
    mostrarSalones();
});

const tablaBody=document.querySelector("#tablaSalones tbody");
function mostrarSalones() {

    tablaBody.innerHTML = ""; // Limpiar la tabla antes de mostrar los salones

    const salones = JSON.parse(localStorage.getItem("salones")) || [];
    let id=0;
    salones.forEach((salon => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${salon.nombre}</td>
            <td>${salon.direccion}</td>
            <td>${salon.capacidad}</td>
            <td><button class="eliminar" data-index=${id}> eliminar</button> </td>
        `;
        id++;
        console.log(id)
        tablaBody.appendChild(fila);

        
    }));
}

//Eliminar salon de la lista

tablaBody.addEventListener('click', function (e) {
  if (e.target.classList.contains('eliminar')) {
    const salones = JSON.parse(localStorage.getItem("salones")) || [];
    const index = e.target.dataset.index; //encuentra el indice del salon a eliminar
    salones.splice(index, 1); // Elimina el salon
    localStorage.setItem('salones', JSON.stringify(salones)); // Actualiza el local storage
    mostrarSalones(); // carga de vuelta los salones
  }
});