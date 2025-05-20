const pwdInput = document.getElementById('password');
const toggle = document.getElementById('togglePassword');


pwdInput.addEventListener('input', () => {
    if (pwdInput.value.length > 0) {
        toggle.style.display = 'block';
    } else {
        toggle.style.display = 'none';
        pwdInput.type = 'password';
    }
});

toggle.addEventListener('click', () => {
    const isPwd = pwdInput.type === 'password';
    pwdInput.type = isPwd ? 'text' : 'password';

    //CAMBIO DE ICONO OJO
    // toggle.innerHTML = isPwd
    //   ? '<img src="./img/ojo.png" alt="ojo_abierto" />'
    //   : '<img src="ojo.png" alt="ojo abierto" />';
    
});