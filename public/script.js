const pwdInput = document.getElementById('password');
const toggle = document.getElementById('togglePassword');

// 1) Mostrar/ocultar el icono según haya texto
pwdInput.addEventListener('input', () => {
    if (pwdInput.value.length > 0) {
        toggle.style.display = 'block';
    } else {
        toggle.style.display = 'none';
        // Asegura que vuelva a “password” al borrar
        pwdInput.type = 'password';
        // opcional: restablecerSVG a ojo cerrado si cambiaste
    }
});

// 2) Alternar visibilidad de la contraseña
toggle.addEventListener('click', () => {
    const isPwd = pwdInput.type === 'password';
    pwdInput.type = isPwd ? 'text' : 'password';
    // Si quieres cambiar el icono (ojo abierto/cerrado), aquí lo haces:
    
    // toggle.innerHTML = isPwd
    //   ? '<img src="./img/ojo.png" alt="ojo_abierto" />'
    //   : '<img src="ojo.png" alt="ojo abierto" />';
    
});