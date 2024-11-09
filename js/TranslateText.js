import { Google } from "./Google.js";

document.addEventListener("DOMContentLoaded", function () {
    const translateButton = document.getElementById("translateS");
    const inputField = document.getElementById("inputText");
    const outputLabel = document.getElementById("outputText");

    translateButton.addEventListener("click", function (event) {
        event.preventDefault(); // Evita o envio do formulário

        const content = inputField.value;

        outputLabel.textContent = "Aguardando...";

        // Chama a função Google para traduzir
        Google("en", "pt", content)
            .then(result => {
                outputLabel.textContent = result;
            })
            .catch(error => {
                console.error("Erro ao traduzir:", error);
                outputLabel.textContent = "Erro ao traduzir.";
            });
    });
});
