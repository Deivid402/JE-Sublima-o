// Exibe o botão "Voltar ao Topo" quando o usuário rolar a página
document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.createElement("button");
    backToTopButton.textContent = "⬆️";
    backToTopButton.style.position = "fixed";
    backToTopButton.style.bottom = "20px";
    backToTopButton.style.right = "20px";
    backToTopButton.style.padding = "10px";
    backToTopButton.style.border = "none";
    backToTopButton.style.borderRadius = "50%";
    backToTopButton.style.backgroundColor = "yellowgreen";
    backToTopButton.style.color = "white";
    backToTopButton.style.cursor = "pointer";
    backToTopButton.style.display = "none";
    backToTopButton.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.body.appendChild(backToTopButton);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });
});

// Rola suavemente até a seção clicada
document.querySelectorAll("header nav a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Validação do formulário
document.querySelector("#contato form").addEventListener("submit", event => {
    const nome = event.target.querySelector('input[placeholder="Seu Nome Aqui"]');
    const email = event.target.querySelector('input[placeholder="Seu Email Aqui"]');
    let valid = true;

    if (!nome.value.trim()) {
        alert("Por favor, preencha seu nome.");
        nome.focus();
        valid = false;
    } else if (!email.value.trim() || !email.value.includes("@")) {
        alert("Por favor, preencha um email válido.");
        email.focus();
        valid = false;
    }

    if (!valid) event.preventDefault();
});
