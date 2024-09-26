const botonGenerarFolio = document.getElementById('boton-generar-folio');
const folioGenerado = document.getElementById('folio-generado');

// Configuración del formato de folio
const formatoFolio = 'XXXX-XXXX-XXXX';
const longitudFolio = formatoFolio.length;
const caracteresPosibles = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

// Función para generar un folio aleatorio
function generarFolio() {
 let folio = '';
 for (let i = 0; i < longitudFolio; i++) {
 folio += caracteresPosibles.charAt(Math.floor(Math.random() * caracteresPosibles.length));
 if (formatoFolio[i] === '-') {
 folio += '-';
 }
 }
 return folio;
}

botonGenerarFolio.addEventListener('click', (e) => {
 e.preventDefault();
 const folio = generarFolio();
 folioGenerado.innerHTML = `
 <p>Folio generado: ${folio}</p>
 `;
});

