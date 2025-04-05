// filepath: c:\Users\josed\Desktop\zay-shop\script.js
document.addEventListener('DOMContentLoaded', () => {
    const buyButton = document.getElementById('buyButton');
    const paymentForm = document.getElementById('paymentForm');
    const paymentDetails = document.getElementById('paymentDetails');

    buyButton.addEventListener('click', () => {
        // Mostrar el formulario de pago
        paymentForm.style.display = 'block';
    });

    paymentDetails.addEventListener('submit', (event) => {
        event.preventDefault();
        // Obtener los datos del formulario
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const card = document.getElementById('card').value;

        // Aquí puedes agregar la lógica para procesar el pago
        console.log('Procesando pago para:', name, address, card);

        // Ocultar el formulario de pago después de enviar
        paymentForm.style.display = 'none';
        alert('Pago realizado con éxito');
    });
});