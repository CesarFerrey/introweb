
if (sessionStorage.getItem("accessToken")) {
    alert("Este usuario ya está logueado");
    window.location.href = "altaSalon.html";
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;
  
if (usuario === "administrador" && contraseña === "idw2025") {
    sessionStorage.setItem("accessToken", "admin-local-token");
    sessionStorage.setItem("usuario", "administrador");
    alert("Login administrador exitoso");
    window.location.href = "usuarios.html"; 
    return; }

   
    fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: usuario,
            password: contraseña
        })
    })
    .then(res => {
        if (!res.ok) {
            throw new Error("Usuario o contraseña incorrectos");
        }
        return res.json();
    })
    .then(data => {
        
        sessionStorage.setItem("accessToken", data.token);
        sessionStorage.setItem("usuario", data.username);
        sessionStorage.setItem("rol", data.role || "usuario");
        alert("Login exitoso");
        if (data.role === "administrador") {
            window.location.href = "usuarios.html"; // Redirigir a gestión de usuarios
          } else {
            window.location.href = "altaSalon.html"; // Redirigir al alta de salones
          }
        })
       /* window.location.href = "altaSalon.html";
    })*/
    .catch(error => {
        alert(error.message);
    });
});
