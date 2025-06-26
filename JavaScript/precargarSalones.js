const salonesMostrados = localStorage.getItem("salonesMostrados"); 
if (!salonesMostrados){ 
    
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

   
    localStorage.setItem("salones", JSON.stringify(salones));
    const salonesMostrados = localStorage.setItem("salonesMostrados","true"); //bandera para que no cargue de nuevo los precargados
}
