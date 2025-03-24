//   validação de dados

        document.addEventListener("DOMContentLoaded", function () {
            document.querySelector("form").addEventListener("submit", function (event) {
                let isValid = true;
                let errorMessage = ''; // Para armazenar as mensagens de erro
                let successMessage = "Formulário enviado com sucesso!"; // Mensagem de sucesso

                // Lista de palavras proibidas (palavrões e termos inadequados)
                const palavrasProibidas = [
                    "vaca", "vagabunda", "piranha", "bicha", "torario", "gay", "ze ruela", 
                    "viado", "vagabundo", "cusao", "vadia"
                ];

                // Lista de ritmos permitidos (agora com o tango adicionado)
                const ritmosPermitidos = ["zouk", "samba de gafieira", "forró", "bolero", "bachata", "salsa", "cha cha cha", "tango"];

                // Validação do Nome
                let name = document.getElementById("name").value.trim();
                if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,}$/.test(name)) {
                    errorMessage += "Por favor, insira um nome válido com pelo menos 3 letras.\n";
                    isValid = false;
                } else {
                    let nomeLower = name.toLowerCase();
                    for (let palavra of palavrasProibidas) {
                        if (nomeLower.includes(palavra)) {
                            errorMessage += "Nome contém palavras inadequadas. Por favor, insira um nome apropriado.\n";
                            isValid = false;
                            break;
                        }
                    }
                }

                // Validação do Telefone
                let telefone = document.getElementById("telefone").value.trim();
                if (!/^\(\d{3}\)\d{5}-\d{4}$/.test(telefone)) {
                    errorMessage += "Por favor, insira um telefone no formato (011)99999-9999.\n";
                    isValid = false;
                }

                // Validação do E-mail
                let email = document.getElementById("email").value.trim();
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    errorMessage += "Por favor, insira um e-mail válido.\n";
                    isValid = false;
                }

                // Validação da Data
                let dataBaile = document.getElementById("dataInput").value;
                if (!dataBaile) {
                    errorMessage += "Por favor, selecione uma data válida para o baile.\n";
                    isValid = false;
                }

                // Validação do Horário
                let horaBaile = document.getElementById("horaInput").value;
                if (!horaBaile) {
                    errorMessage += "Por favor, selecione um horário válido para o baile.\n";
                    isValid = false;
                }

                // Validação do Ritmo
                let ritmo = document.getElementById("subject").value.trim().toLowerCase();
                if (!ritmosPermitidos.includes(ritmo)) {
                    errorMessage += `O ritmo "${ritmo}" não está dentro das minhas habilidades. Por favor, escolha entre: ${ritmosPermitidos.join(", ")}.\n`;
                    isValid = false;
                }

                // Validação da Mensagem
                let mensagem = document.querySelector("textarea[name='message']").value.trim();
                if (mensagem.length === 0) {
                    errorMessage += "Por favor, insira uma mensagem.\n";
                    isValid = false;
                } else {
                    let mensagemLower = mensagem.toLowerCase();
                    for (let palavra of palavrasProibidas) {
                        if (mensagemLower.includes(palavra)) {
                            errorMessage += "A mensagem contém palavras inadequadas. Por favor, insira um texto apropriado.\n";
                            isValid = false;
                            break;
                        }
                    }
                }

                if (!isValid) {
                    alert("Erros encontrados:\n" + errorMessage); // Mensagem de erro com todos os problemas encontrados
                    event.preventDefault(); // Impede o envio do formulário se houver erros
                } else {
                    alert(successMessage); // Mensagem de sucesso se todos os campos forem válidos
                }
            });
        });
    
