
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

    // Enviar los datos a la API de DummyJSON
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
        // Guardamos el accessToken y el usuario
        sessionStorage.setItem("accessToken", data.token);
        sessionStorage.setItem("usuario", data.username);
        alert("Login exitoso");
        window.location.href = "altaSalon.html";
    })
    .catch(error => {
        alert(error.message);
    });
});
