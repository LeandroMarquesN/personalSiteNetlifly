// Validação de dados:
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        let isValid = true;

        // Lista de palavras proibidas (palavrões e termos inadequados)
        const palavrasProibidas = [
            "vaca", "vagabunda", "piranha", "bicha", "torario", "gay", "ze ruela", 
            "viado", "vagabundo", "cusao", "vadia"
        ];

        // Lista de ritmos permitidos
        const ritmosPermitidos = ["zouk", "samba de gafieira", "forró", "bolero", "bachata", "salsa", "cha cha cha"];

        // Validação do Nome
        let name = document.getElementById("name").value.trim();
        if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,}$/.test(name)) {
            alert("Por favor, insira um nome válido com pelo menos 3 letras.");
            isValid = false;
        } else {
            let nomeLower = name.toLowerCase();
            for (let palavra of palavrasProibidas) {
                if (nomeLower.includes(palavra)) {
                    alert("Nome contém palavras inadequadas. Por favor, insira um nome apropriado.");
                    isValid = false;
                    break;
                }
            }
        }

        // Validação do Telefone
        let telefone = document.getElementById("telefone").value.trim();
        if (!/^\(\d{3}\)\d{5}-\d{4}$/.test(telefone)) {
            alert("Por favor, insira um telefone no formato (011)99999-9999.");
            isValid = false;
        }

        // Validação do E-mail
        let email = document.getElementById("email").value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Por favor, insira um e-mail válido.");
            isValid = false;
        }

        // Validação da Data
        let dataBaile = document.getElementById("dataInput").value;
        if (!dataBaile) {
            alert("Por favor, selecione uma data válida para o baile.");
            isValid = false;
        }

        // Validação do Horário
        let horaBaile = document.getElementById("horaInput").value;
        if (!horaBaile) {
            alert("Por favor, selecione um horário válido para o baile.");
            isValid = false;
        }

        // Validação do Ritmo
        let ritmo = document.getElementById("subject").value.trim().toLowerCase();
        if (!ritmosPermitidos.includes(ritmo)) {
            alert(`O ritmo "${ritmo}" não está dentro das minhas habilidades. Por favor, escolha entre: ${ritmosPermitidos.join(", ")}.`);
            isValid = false;
        }

        // Validação da Mensagem
        let mensagem = document.querySelector("textarea[name='message']").value.trim();
        if (mensagem.length === 0) {
            alert("Por favor, insira uma mensagem.");
            isValid = false;
        } else {
            let mensagemLower = mensagem.toLowerCase();
            for (let palavra of palavrasProibidas) {
                if (mensagemLower.includes(palavra)) {
                    alert("A mensagem contém palavras inadequadas. Por favor, insira um texto apropriado.");
                    isValid = false;
                    break;
                }
            }
        }

        if (!isValid) {
            event.preventDefault(); // Impede o envio do formulário se houver erros
        }
    });
});
