// Validação de dados.


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

        // Lista de ritmos permitidos
        const ritmosPermitidos = ["zouk", "samba de gafieira", "forró", "bolero", "bachata", "salsa", "cha cha cha", "tango"];

        // Função para mostrar o ícone correto
        function showIcon(inputId, iconId, isValid) {
          const icon = document.getElementById(iconId);
          if (isValid) {
            icon.classList.add("fa-check"); // Ícone verde de sucesso
            icon.classList.remove("fa-times");
          } else {
            icon.classList.add("fa-times"); // Ícone vermelho de erro
            icon.classList.remove("fa-check");
          }
        }

        // Validação do Nome
        let name = document.getElementById("name").value.trim();
        if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,}$/.test(name)) {
          errorMessage += "Por favor, insira um nome válido com pelo menos 3 letras.\n";
          showIcon("name", "nameIcon", false); // Ícone vermelho
          isValid = false;
        } else {
          let nomeLower = name.toLowerCase();
          for (let palavra of palavrasProibidas) {
            if (nomeLower.includes(palavra)) {
              errorMessage += "Nome contém palavras inadequadas. Por favor, insira um nome apropriado.\n";
              showIcon("name", "nameIcon", false); // Ícone vermelho
              isValid = false;
              break;
            }
          }
          if (isValid) showIcon("name", "nameIcon", true); // Ícone verde
        }

        // Validação do Telefone
        // let telefone = document.getElementById("telefone").value.trim();
        // if (!/^\(\d{3}\)\d{5}-\d{4}$/.test(telefone)) {
        //   errorMessage += "Por favor, insira um telefone no formato (011)99999-9999.\n";
        //   showIcon("telefone", "telefoneIcon", false); // Ícone vermelho
        //   isValid = false;
        // } else {
        //   showIcon("telefone", "telefoneIcon", true); // Ícone verde
        // } 
        
        // validação telefone valida

         // Validação do Telefone
        let telefone = document.getElementById("telefone").value.trim();
        if (!/^\d{11}$/.test(telefone)) {
          errorMessage += "Por favor, insira um telefone válido com 11 dígitos (ex: 11970166621).\n";
          showIcon("telefone", "telefoneIcon", false); // Ícone vermelho
          isValid = false;
        } else {
          showIcon("telefone", "telefoneIcon", true); // Ícone verde
        }

        // Validação do E-mail
        let email = document.getElementById("email").value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          errorMessage += "Por favor, insira um e-mail válido.\n";
          showIcon("email", "emailIcon", false); // Ícone vermelho
          isValid = false;
        } else {
          showIcon("email", "emailIcon", true); // Ícone verde
        }

        // Validação do Ritmo
        let ritmo = document.getElementById("subject").value.trim().toLowerCase();
        if (!ritmosPermitidos.includes(ritmo)) {
          errorMessage += `O ritmo "${ritmo}" não está dentro das minhas habilidades. Por favor, escolha entre: ${ritmosPermitidos.join(", ")}.\n`;
          showIcon("subject", "subjectIcon", false); // Ícone vermelho
          isValid = false;
        } else {
          showIcon("subject", "subjectIcon", true); // Ícone verde
        }

        // Validação da Data
        let dataBaile = document.getElementById("dataInput").value;
        if (!dataBaile) {
          errorMessage += "Por favor, selecione uma data válida para o baile.\n";
          showIcon("dataInput", "dataInputIcon", false); // Ícone vermelho
          isValid = false;
        } else {
          showIcon("dataInput", "dataInputIcon", true); // Ícone verde
        }

        // Validação da Hora
        let horaBaile = document.getElementById("horaInput").value;
        if (!horaBaile) {
          errorMessage += "Por favor, selecione um horário válido para o baile.\n";
          showIcon("horaInput", "horaInputIcon", false); // Ícone vermelho
          isValid = false;
        } else {
          showIcon("horaInput", "horaInputIcon", true); // Ícone verde
        }

        // Validação da Mensagem
        let mensagem = document.querySelector("textarea[name='message']").value.trim();
        if (mensagem.length === 0) {
          errorMessage += "Por favor, insira uma mensagem.\n";
          showIcon("message", "messageIcon", false); // Ícone vermelho
          isValid = false;
        } else {
          let mensagemLower = mensagem.toLowerCase();
          for (let palavra of palavrasProibidas) {
            if (mensagemLower.includes(palavra)) {
              errorMessage += "A mensagem contém palavras inadequadas. Por favor, insira um texto apropriado.\n";
              showIcon("message", "messageIcon", false); // Ícone vermelho
              isValid = false;
              break;
            }
          }
          if (isValid) showIcon("message", "messageIcon", true); // Ícone verde
        }

        // Se houver erros, exibe o alerta
        if (!isValid) {
          alert("Erros encontrados:\n" + errorMessage); // Exibe os erros no alerta
          event.preventDefault(); // Impede o envio do formulário
        } else {
          alert(successMessage); // Exibe a mensagem de sucesso se não houver erros
        }
      });
    });
