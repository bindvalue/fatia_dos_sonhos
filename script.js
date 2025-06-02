document.addEventListener('DOMContentLoaded', function() {
    // Efeito suave de scroll para âncoras (se você adicionar links internos no futuro)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Pequena animação nos cards de pizza ao carregar a página
    const pizzaItems = document.querySelectorAll('.pizza-item');
    pizzaItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100); // Efeito cascata
    });
});

 // Lógica para os botões "Pedir esta Pizza"
 const orderButtons = document.querySelectorAll('.order-pizza-btn');
 const whatsappNumber = "553183564132";

 orderButtons.forEach(button => {
     button.addEventListener('click', function() {
         const pizzaName = this.getAttribute('data-pizza-name');
         // Mensagem personalizada conforme seu exemplo:
         const message = `Olá, gostaria de fazer um pedido da pizza ${pizzaName}.`;
         const encodedMessage = encodeURIComponent(message); // Codifica a mensagem para URL
         const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

         // Abre o link do WhatsApp em uma nova aba
         window.open(whatsappURL, '_blank');
     });
 });