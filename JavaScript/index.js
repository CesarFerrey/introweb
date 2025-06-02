/*function mostrarSalonesIndex(salones){
    const catalogoSalones= document.getElementById('contenedor-de-salones');// creo que se necesita para mandarlo
    salones.forEach((salon => {
        const grillaSalon = document.createElement("div");
        grillaSalon.className ="salon col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4";
        //acá la imagen con el titulo etc
        const contFigure = document.createElement("figure");//es el contenedor de la imagen, no tenia clase
        //figcaption de titulos y direccion
        const tituloSalon = document.createElement("figcaption");
        const titulo = document.createElement("strong");
        titulo.textContent = salon.nombre;
        const direccionSalon = document.createElement("p");
        direccionSalon.textContent = salon.direccion;
        // imagen del salon con el texto alternativo (el nombre del salón para no hacer tanto lio)
        const img = document.createElement("img");
        img.src = salon.imagen;
        img.alt = salon.nombre;
        img.classList.add("d-block", "w-100");
        // Capacidad, servicios, etc
        const capacidad = document.createElement("p");
        capacidad.textContent = salon.capacidad;
        const servicios = document.createElement("p");
        servicios.classList.add("desc-serv");
        servicios.textContent = salon.servicios;
        //juntando todo en la estructura de abajo para arriba (ojo los que estan en contenedores solos)
        //primero los de figure
        tituloSalon.appendChild(titulo);
        tituloSalon.appendChild(direccionSalon);
        //el contenedor general
        contFigure.appendChild(tituloSalon);
        contFigure.appendChild(img);
        contFigure.appendChild(servicios);
        contFigure.appendChild(capacidad);
        grillaSalon.appendChild(contFigure);
        catalogoSalones.appendChild(grillaSalon);
    }));   
}
*/
/*document.addEventListener("DOMContentLoaded", () =>{
    const salonesGuardados = JSON.parse(localStorage.getItem("salones")) || [] ; //chequeamos qué tiene el storage
    if (salonesGuardados.length>0){
        mostrarSalonesenIndex();
    }else{
        const cartel = document.getElementById('catalogo-salones');
        cartel.innerHTML = "<p>Aún no se han cargado salones. Si sos administrador ingresá a tu sesión para cargarlos</p>";
        
    }
});
function mostrarSalonesenIndex() {
    const catalogoSection = document.querySelector("#catalogo-salones");
    // Limpiar contenido anterior
    catalogoSection.innerHTML = `
        <div class="row g-4"></div>
    `;
    const row = catalogoSection.querySelector(".row");
    const salones = JSON.parse(localStorage.getItem("salones")) || [];
    salones.forEach((salon) => {
        const div = document.createElement("div");
        div.className = "salon col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4";
        div.innerHTML = `
            <figure>
                <figcaption><strong>${salon.nombre}</strong>
                    <p>${salon.direccion}</p>
                </figcaption>  
                <img src="${salon.imagen || './Imagenes/Salon1.jpg'}" class="d-block w-100" alt="${salon.nombre}">
                <p class="desc-serv">
                    Capacidad para ${salon.capacidad} personas<br>
                    ${salon.detalles || 'Animadores, inflables, souvenirs.'}
                </p>
            </figure>
        `;
        row.appendChild(div);
    });
}
mostrarSalonesenIndex();




document.addEventListener("DOMContentLoaded", () => {
    // Array con los datos de los salones
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
            servicios: "Actividades recreativas, shows de magia, pelotero libre, souvenirs individuales",
            imagen: "./Imagenes/Salon2.webp"
        },
        {
            nombre: "Aventura cósmica",
            direccion: "Av. San Martín 3582 (Paternal)",
            capacidad: 50,
            servicios: "Actividades didácticas al aire libre, sorpresitas a base de golosinas",
            imagen: "./Imagenes/8-salon-defabula.png"
        }
        // Agrega más salones aquí
    ];

    // Contenedor donde se mostrarán los salones
    const salonesContainer = document.getElementById("salones-container");

    // Generar el contenido HTML para cada salón
    salones.forEach(salon => {
        const salonHTML = `
            <div class="salon col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                <figure>
                    <figcaption><strong>${salon.nombre}</strong>
                        <p>${salon.direccion}</p>
                    </figcaption>
                    <img src="${salon.imagen}" class="d-block w-100" alt="${salon.nombre}">
                    <p class="desc-serv">
                        Capacidad: ${salon.capacidad} personas<br>
                        Servicios: ${salon.servicios}
                    </p>
                </figure>
            </div>
        `;
        salonesContainer.innerHTML += salonHTML;
    });
});*/

/*document.addEventListener("DOMContentLoaded", () => {
    // Verificar si hay salones en localStorage
    let salones = JSON.parse(localStorage.getItem("salones")) || [];

    if (salones.length === 0) {
        // Precargar salones si no hay en localStorage
        salones = [
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
                servicios: "Laberinto en altura. sala de juegos interactivos, fútbol y pelotero",
                imagen: "./Imagenes/selva.jpg"
            },
            {
                nombre: "Aventura cósmica",
                direccion: "Av. San Martín 3582 (Paternal)",
                capacidad: 50,
                servicios: "Actividades didácticas al aire libre, sorpresitas a base de golosinas",
                imagen: "./Imagenes/8-salon-defabula.png"
            }
        ];
        // Guardar los salones precargados en localStorage
        localStorage.setItem("salones", JSON.stringify(salones));
    }

    // Mostrar los salones en el index
    mostrarSalonesenIndex(salones);
});

function mostrarSalonesenIndex(salones) {
    const salonesContainer = document.getElementById("salones-container");

    // Limpiar contenido anterior
    salonesContainer.innerHTML = "";

    // Generar el contenido HTML para cada salón
    salones.forEach(salon => {
        const salonHTML = `
            <div class="salon col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                <figure>
                    <figcaption><strong>${salon.nombre}</strong>
                        <p>${salon.direccion}</p>
                    </figcaption>
                    <img src="${salon.imagen}" class="d-block w-100" alt="${salon.nombre}">
                    <p class="desc-serv">
                        Capacidad: ${salon.capacidad} personas<br>
                        Servicios: ${salon.servicios}
                    </p>
                </figure>
            </div>
        `;
        salonesContainer.innerHTML += salonHTML;
    });
}*/


document.addEventListener("DOMContentLoaded", () => {
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

    // Mostrar los salones en el index
    mostrarSalonesenIndex(salones);
});

function mostrarSalonesenIndex(salones) {
    const salonesContainer = document.getElementById("salones-container");

    // Limpiar contenido anterior
    salonesContainer.innerHTML = "";

    // Generar el contenido HTML para cada salón
    salones.forEach(salon => {
        const salonHTML = `
            <div class="salon col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                <figure>
                    <figcaption><strong>${salon.nombre}</strong>
                        <p>${salon.direccion}</p>
                    </figcaption>
                    <img src="${salon.imagen}" class="d-block w-100" alt="${salon.nombre}">
                    <p class="desc-serv">
                        Capacidad: ${salon.capacidad} personas<br>
                        Servicios: ${salon.servicios}
                    </p>
                </figure>
            </div>
        `;
        salonesContainer.innerHTML += salonHTML;
    });
}