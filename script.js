const formulario = document.getElementById('formulario-pago');
const metodoPago = document.getElementById('metodo-pago');
const detallesPago = document.getElementById('detalles-pago');
const botonPagar = document.getElementById('boton-pagar');

formulario.addEventListener('change', (e) => {
 if (metodoPago.value === 'tarjeta-credito') {
 detallesPago.innerHTML = `
 <label for="numero-tarjeta">Número de tarjeta:</label>
 <input type="text" id="numero-tarjeta" placeholder="XXXX-XXXX-XXXX-XXXX">
 <label for="fecha-vencimiento">Fecha de vencimiento:</label>
 <input type="date" id="fecha-vencimiento">
 <label for="codigo-seguridad">Código de seguridad:</label>
 <input type="text" id="codigo-seguridad" placeholder="XXX">
 `;
 } else if (metodoPago.value === 'paypal') {
 detallesPago.innerHTML = `
 <label for="correo-paypal">Correo electrónico de PayPal:</label>
 <input type="email" id="correo-paypal" placeholder="example@example.com">
 `;
 } else if (metodoPago.value === 'transferencia-bancaria') {
 detallesPago.innerHTML = `
 <label for="numero-cuenta">Número de cuenta:</label>
 <input type="text" id="numero-cuenta" placeholder="XXXX-XXXX-XXXX-XXXX">
 <label for="banco">Banco:</label>
 <select id="banco">
 <option value="banco1">Banco 1</option>
 <option value="banco2">Banco 2</option>
 </select>
 `;
 }
});

botonPagar.addEventListener('click', (e) => {
 e.preventDefault();
 alert('Pago simulado con éxito!');
 // Aquí se procesaría el pago real
});





