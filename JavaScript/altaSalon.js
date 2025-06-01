document.addEventListener("DOMContentLoaded", () => {
    // Mostrar lista de salones (si aplica)
    mostrarSalones();

    // Referencias a botones de login/logout
    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");

    const usuario = sessionStorage.getItem("usuario");

    // Verificar si el usuario está logueado
    if (!usuario) {
        alert("Debe loguearse");
        window.location.href = "./JavaScript/login.html";
        return;
    }

    // Mostrar u ocultar botones de sesión
    if (loginBtn && logoutBtn) {
        loginBtn.style.display = "none";
        logoutBtn.style.display = "block";
    }

    // Manejar botón "Cerrar Sesión"
    const salir = document.getElementById("logout");
    if (salir) {
        salir.addEventListener("click", () => {
            sessionStorage.clear();
            window.location.href = "login.html";
        });
    }

    // Manejo del formulario de alta de salón
    const form = document.getElementById("loginForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const nombre = document.getElementById("nombreSalon").value;
            const direccion = document.getElementById("direccion").value;
            const capacidad = document.getElementById("capacidad").value;

            const nuevoSalon = { nombre, direccion, capacidad };
            const salones = JSON.parse(localStorage.getItem("salones")) || [];
            salones.push(nuevoSalon);
            localStorage.setItem("salones", JSON.stringify(salones));

            alert(`El nuevo salón tiene los siguientes atributos:\nNombre: ${nombre}\nDirección: ${direccion}\nCapacidad: ${capacidad}`);

            this.reset();
            mostrarSalones();
        });

        mostrarSalones();
    }

    // Función para mostrar salones en la tabla
    function mostrarSalones() {
        const tablaBody = document.querySelector("#salonList");
        if (!tablaBody) return;

        tablaBody.innerHTML = ""; // Limpiar antes de cargar

        const salones = JSON.parse(localStorage.getItem("salones")) || [];
        salones.forEach((salon, index) => {
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
        });
    }
});
function mostrarSalones() {
    const tablaBody=document.querySelector("#tablaSalones tbody");
    tablaBody.innerHTML = ""; // Limpiar la tabla antes de mostrar los salones
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
    const salonesGuardados = JSON.parse(localStorage.getItem("salones")) || [] ; //chequeamos qué tiene el storage
    // Verificar si el usuario está logueado: 
    const usuario = sessionStorage.getItem("usuario");
    if(!usuario) {
        alert("Debe loguearse para realizar modificaciones en la página");
        window.location.href = "login.html";
        return;
    }
    mostrarSalones();
    
    // Para manejar el formulario de alta de salón:
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
        window.location.href = "../index.html";//para mi tiene que ir al index para que se vean los cambios
    });

    // Mostrar u ocultar botones de sesión
    const loginBtn = document.getElementById("login");
    if (loginBtn && salir) {
        loginBtn.style.display = "none";
        salir.style.display = "block";
    }
});


const tablaBody=document.querySelector("#tablaSalones tbody");
/*
tablaBody.addEventListener('click', function (e) {
    if (e.target.classList.contains('eliminar')) {
        const salones = JSON.parse(localStorage.getItem("salones")) || [];
        const index = e.target.dataset.index; //encuentra el indice del salon a eliminar
        salones.splice(index, 1); // Elimina el salon
        localStorage.setItem('salones', JSON.stringify(salones)); // Actualiza el local storage
        mostrarSalones(); // carga de vuelta los salones
    }
});
*/
    

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
    salones.splice(index, 1); // Elimina el salón del array
    localStorage.setItem("salones", JSON.stringify(salones)); // Actualiza el localStorage
    mostrarSalones(); // Actualiza la tabla
}



