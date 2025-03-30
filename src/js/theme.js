// JavaScript para controlar el cambio de tema
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Verificar si hay una preferencia guardada
if (localStorage.getItem('darkTheme') === 'true') {
    body.classList.add('dark-theme');
    themeToggle.checked = true;
}

// Función para cambiar el tema
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-theme');
        localStorage.setItem('darkTheme', 'true');
    } else {
        body.classList.remove('dark-theme');
        localStorage.setItem('darkTheme', 'false');
    }
});