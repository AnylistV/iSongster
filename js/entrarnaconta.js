const registerModal = document.getElementById("register-modal");
const forgotPasswordModal = document.getElementById("forgot-password-modal");
const registerLink = document.getElementById("register-link");
const forgotPasswordLink = document.getElementById("forgot-password");
const closeBtns = document.getElementsByClassName("close");

function openModal(modal) {
    modal.style.display = "block";
}

function closeModal(modal) {
    modal.style.display = "none";
}

registerLink.onclick = function () {
    openModal(registerModal);
}

forgotPasswordLink.onclick = function () {
    openModal(forgotPasswordModal);
}

for (let closeBtn of closeBtns) {
    closeBtn.onclick = function () {
        closeModal(this.closest('.modal'));
    }
}

window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target);
    }
}

document.getElementById("login-form").onsubmit = function (e) {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    alert("Formulário de login enviado!");
}

document.getElementById("register-form").onsubmit = function (e) {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de registro
    alert("Formulário de cadastro enviado!");
    closeModal(registerModal);
}

document.getElementById("forgot-password-form").onsubmit = function (e) {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para envio do link de recuperação
    alert("Um link de recuperação de senha foi enviado para o e-mail fornecido.");
    closeModal(forgotPasswordModal);
}