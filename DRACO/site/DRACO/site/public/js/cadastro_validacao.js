function validar_email() {
    var email = ipt_email.value;

    if (email.indexOf('@') >= 0 && email.indexOf('.') >= 0) {
        msg_email.innerHTML = `<span style="color:green; font-size: 12px;"><b>${email}</b></span>`;
    } else {
        msg_email.innerHTML = `<span style="color:red; font-size: 12px;"><b>Esse email não é válido. Deve conter arroba (@) e ponto com (.com)</b></span>`;
    }

}

function validar_senha() {
    var senha = ipt_senha.value;
    var confirmar_senha = ipt_confirmar_senha.value;

    if (senha == confirmar_senha) {
        msg_senha.innerHTML = `<span style="color:green; font-size: 12px;"><b>OK</b></span>`;
    } else {
        msg_senha.innerHTML = `<span style="color:red; font-size: 12px;"><b>As senhas não coincidem.</b></span>`;
    }
}