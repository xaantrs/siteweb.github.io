document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formContato");
    const nomeInput = document.getElementById("nome-box");
    const emailInput = document.getElementById("email-box");
    const telefoneInput = document.getElementById("telefone-box");
    const problemaSelect = document.getElementById("problema");
    const mensagemTextarea = document.getElementById("mensagem");

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validarFormulario()) {
            alert("Formulário enviado com sucesso!");
            form.reset();
        }
    });

    function validarFormulario() {
        let valido = true;

        if (nomeInput.value.trim() === "") {
            document.getElementById("nomeError").textContent = "Por favor, preencha o nome";
            valido = false;
        } else {
            document.getElementById("nomeError").textContent = "";
        }

        if (emailInput.value.trim() === "") {
            document.getElementById("emailError").textContent = "Por favor, preencha o email";
            valido = false;
        } else {
            document.getElementById("emailError").textContent = "";
        }

        if (telefoneInput.value.trim() === "") {
            document.getElementById("telefoneError").textContent = "Por favor, preencha o telefone";
            valido = false;
        } else {
            document.getElementById("telefoneError").textContent = "";
        }

        if (problemaSelect.value === "") {
            document.getElementById("problemaError").textContent = "Por favor, selecione um problema";
            valido = false;
        } else {
            document.getElementById("problemaError").textContent = "";
        }

        if (mensagemTextarea.value.trim() === "") {
            document.getElementById("mensagemError").textContent = "Por favor, preencha a mensagem";
            valido = false;
        } else {
            document.getElementById("mensagemError").textContent = "";
        }

        return valido;
    }
});
