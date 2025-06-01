function editarSalon(index){
    const salones = JSON.parse(localStorage.getItem("salones")) || [];
    const salon = salones[index];
    
    document.getElementById("nombreSalon").value = salon.nombre;
    document.getElementById("direccion").value = salon.direccion;
    document.getElementById("capacidad").value = salon.capacidad;
    
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
