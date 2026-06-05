// Seleciona todos os botões de compra
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Pega o nome do plano baseado no título dentro do card pai
        const planName = this.parentElement.querySelector('h3').innerText;
        
        // Efeito visual simples de clique
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
            this.style.transform = "scale(1.05)";
            alert(`Você escolheu o plano: ${planName}`);
        }, 100);
    });
});
