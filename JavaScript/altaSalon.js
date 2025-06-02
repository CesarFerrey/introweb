const tablaBody=document.querySelector("#tablaSalones tbody");   
function mostrarSalones() { //este muestra los salones en la lista
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
    const salonesMostrados = localStorage.getItem("salonesMostrados"); //bandera para que no precargue los salones estos si ya se mostraron la primera vez en el index (para que se reflejen las modificaciones de alta y baja de salones)
    if (!salonesMostrados){ //si es falso es porque hay que precargarlos
        // Precargar salones
        const salones = [
            {
                nombre: "Universo bajito",
                direccion: "Av. Acoyte 82 (Caballito)",
                capacidad: 30,
                servicios: "Inflable, metegol, tobogán luminoso, souvenirs individuales",
                imagen: "./Imagenes/Salon1.jpg"
            },
            {
                nombre: "Luna llena",
                direccion: "Campana 2959 (Villa del Parque)",
                capacidad: 40,
                servicios: "Actividades recreativas, shows de magia, pelotero libre",
                imagen: "./Imagenes/Salon2.webp"
            },
            {
                nombre: "Jungla de diversión",
                direccion: "Talcahuano 1225 (Barrio Norte)",
                capacidad: 50,
                servicios: "Laberinto en altura. Sala de juegos interactivos, fútbol y pelotero",
                imagen: "./Imagenes/selva.jpg"
            },
            {
                nombre: "Aventura cósmica",
                direccion: "Av. San Martín 3582 (Paternal)",
                capacidad: 50,
                servicios: "Actividades didácticas al aire libre, sorpresitas a base de golosinas",
                imagen: "./Imagenes/8-salon-defabula.png"
            },
            {
                nombre: "Luna de papel",
                direccion: "Chorroarín 2493 (Villa Urquiza)",
                capacidad: 120,
                servicios: "Sala de karaoke. Tobogán luminoso en altura.Servicio de bebida libre.",
                imagen: "./Imagenes/pasteles.jpg"
            },
            {
                nombre: "Mundo mágico",
                direccion: "Lafinur 2082 (Palermo)",
                capacidad: 100,
                servicios: " Maquillaje artístico, disfraces. Cinco animadores. Consola musical.",
                imagen: "./Imagenes/mundo_magico.jpg"
            },
            {
                nombre: "Jardín de estrellas",
                direccion: "V. Gomez 3706 (Almagro)",
                capacidad: 60,
                servicios: "Cuatro animadores. Toro mecánico. Pista de baile. Souvenirs individuales.",
                imagen: "./Imagenes/Aventura cosmica.jpg"
            },
            {
                nombre: "La máquina de jugar",
                direccion: "Av. Avellaneda 3867 (Flores)",
                capacidad: 150,
                servicios: "Pista de baile. Pizza libre. Barra de bebidas. Laberinto de colores.",
                imagen: "./Imagenes/maquina_de_jugar.jpg"
            },
            
    
        ];
    
        // Sobrescribir los datos en localStorage
        localStorage.setItem("salones", JSON.stringify(salones));
        const salonesMostrados = localStorage.setItem("salonesMostrados","true"); //bandera para que no cargue de nuevo los precargados
        }

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
        window.location.href = "../index.html";//para mi tiene que ir al index para que se vean los cambios que se hicieron.
    });

    // Mostrar u ocultar botones de sesión
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
    salones.splice(index, 1); // Elimina el salón del array
    localStorage.setItem("salones", JSON.stringify(salones)); // Actualiza el localStorage
    mostrarSalones(); // Actualiza la tabla
}



