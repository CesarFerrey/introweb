const tablaBody=document.querySelector("#tablaSalones tbody");   
function mostrarSalones() { 
    const tablaBody=document.querySelector("#tablaSalones tbody");
    tablaBody.innerHTML = ""; 
    const salones = JSON.parse(localStorage.getItem("salones")) || [];
    let id=0;
    salones.forEach((salon, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${salon.nombre}</td>
            <td>${salon.direccion}</td>
            <td>${salon.capacidad}</td>
            <td>${salon.servicios}</td>
            <td>${salon.imagen}</td>
            <button class="btn btn-danger" onclick="eliminarSalon('${index}')">Eliminar</button>
            <button class="btn btn-sm btn-primary me-2" onclick="editarSalon('${index}')">Editar</button>
        `;
        id++;
        tablaBody.appendChild(fila);
    });
    if (salones.length === 0) {
        const fila = document.createElement("tr");
        fila.innerHTML = `<td colspan="6" class="text-center">No hay salones cargados aún</td>`;
        tablaBody.appendChild(fila);
        return;
    }
}



document.addEventListener("DOMContentLoaded", () =>{
    const salonesGuardados = JSON.parse(localStorage.getItem("salones")) || [] ; 
  
    const usuario = sessionStorage.getItem("usuario");
    if(!usuario) {
        alert("Debe loguearse para realizar modificaciones en la página");
        window.location.href = "login.html";
        return;
    }
    mostrarSalones();
    
  
    const form = document.getElementById("loginForm");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const nombre = document.getElementById("nombreSalon").value;
        const direccion = document.getElementById("direccion").value;
        const capacidad = document.getElementById("capacidad").value;
        const servicios = document.getElementById("servicios").value;
        const imagen = document.getElementById("imagen-salon").value;
        
        const nuevoSalon = { nombre, direccion, capacidad, servicios, imagen };
        const salones = JSON.parse(localStorage.getItem("salones")) || [];
        salones.push(nuevoSalon);
        localStorage.setItem("salones", JSON.stringify(salones));
        alert (`El nuevo salón tiene los siguientes atributos nombre: ${nombre}, dirección: ${direccion}, capacidad: ${capacidad}, servicos: ${servicios}`);
        this.reset();
        mostrarSalones();
    });

    const salir = document.getElementById("logout");
    salir.addEventListener("click", () => {
        sessionStorage.clear();
        window.location.href = "../index.html";
    });

    
    const loginBtn = document.getElementById("login");
    if (loginBtn && salir) {
        loginBtn.style.display = "none";
        salir.style.display = "block";
    }
});


function editarSalon(index){
    const salones = JSON.parse(localStorage.getItem("salones")) || [];
    const salon = salones[index];
    document.getElementById("nombreSalon").value = salon.nombre;
    document.getElementById("direccion").value = salon.direccion;
    document.getElementById("capacidad").value = salon.capacidad;
    document.getElementById("servicios").value = salon.servicios;
    document.getElementById("imagen-salon").value = salon.imagen;
    salones.splice(index, 1);
    localStorage.setItem("salones", JSON.stringify(salones));
    mostrarSalones();
}

function eliminarSalon(index) {
    console.log("Eliminando salón con índice:", index);
    const salones = JSON.parse(localStorage.getItem("salones")) || [];
    salones.splice(index, 1); 
    localStorage.setItem("salones", JSON.stringify(salones)); 
    mostrarSalones(); 
}



