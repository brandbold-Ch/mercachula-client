// Obtener referencias a los elementos del DOM
const userInfoContainer = document.getElementById('user-info');
const editFormContainer = document.getElementById('edit-form');
const deleteAccountContainer = document.getElementById('delete-account');

// Datos de ejemplo del usuario (puedes reemplazarlos con datos reales)
let userData = {
    nombre: 'Juan',
    apellido: 'Pérez',
    telefono: '123456789',
    correo: 'juan@example.com',
    contrasena: '********'
};

// Función para mostrar los datos del usuario en el perfil
function mostrarDatosUsuario() {
    userInfoContainer.innerHTML = `
        <h2>Información del Usuario</h2>
        <p><strong>Nombre:</strong> ${userData.nombre} ${userData.apellido}</p>
        <p><strong>Teléfono:</strong> ${userData.telefono}</p>
        <p><strong>Correo:</strong> ${userData.correo}</p>
        <p><strong>Contraseña:</strong> ********</p>
        <button id="editar-btn">Editar</button>
        <button id="eliminar-btn">Eliminar Cuenta</button>
    `;

    // Agregar event listeners a los botones de editar y eliminar
    const editarBtn = document.getElementById('editar-btn');
    editarBtn.addEventListener('click', mostrarFormularioEdicion);

    const eliminarBtn = document.getElementById('eliminar-btn');
    eliminarBtn.addEventListener('click', mostrarConfirmacionEliminar);
}

// Función para mostrar el formulario de edición
function mostrarFormularioEdicion() {
    editFormContainer.innerHTML = `
        <h2>Editar Información</h2>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" value="${userData.nombre}">
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" value="${userData.apellido}">
        <label for="telefono">Teléfono:</label>
        <input type="text" id="telefono" value="${userData.telefono}">
        <label for="correo">Correo:</label>
        <input type="email" id="correo" value="${userData.correo}">
        <label for="contrasena">Contraseña:</label>
        <input type="password" id="contrasena" value="${userData.contrasena}">
        <button id="guardar-btn">Guardar Cambios</button>
        <button id="cancelar-btn">Cancelar</button>
    `;

    // Agregar event listener al botón de guardar cambios
    const guardarBtn = document.getElementById('guardar-btn');
    guardarBtn.addEventListener('click', guardarCambiosUsuario);

    // Agregar event listener al botón de cancelar
    const cancelarBtn = document.getElementById('cancelar-btn');
    cancelarBtn.addEventListener('click', () => {
        editFormContainer.innerHTML = ''; // Limpiar el formulario de edición
    });
}

// Función para guardar los cambios del usuario
function guardarCambiosUsuario() {
    // Obtener los nuevos valores del formulario de edición
    const nuevoNombre = document.getElementById('nombre').value;
    const nuevoApellido = document.getElementById('apellido').value;
    const nuevoTelefono = document.getElementById('telefono').value;
    const nuevoCorreo = document.getElementById('correo').value;
    const nuevaContrasena = document.getElementById('contrasena').value;

    // Actualizar los datos del usuario
    userData.nombre = nuevoNombre;
    userData.apellido = nuevoApellido;
    userData.telefono = nuevoTelefono;
    userData.correo = nuevoCorreo;
    userData.contrasena = nuevaContrasena;

    // Actualizar la visualización de los datos del usuario
    mostrarDatosUsuario();
}

// Función para mostrar la confirmación de eliminar la cuenta
function mostrarConfirmacionEliminar() {
    const confirmacion = confirm('¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.');

    if (confirmacion) {
        // Aquí puedes agregar la lógica para eliminar la cuenta del usuario (por ejemplo, redireccionar a una página de confirmación)
        alert('¡Cuenta eliminada!');
        // Por ejemplo, redireccionar a la página de inicio
        window.location.href = '/';
    }
}

// Llamar a la función para mostrar los datos del usuario cuando la página se carga
window.addEventListener('load', mostrarDatosUsuario);
