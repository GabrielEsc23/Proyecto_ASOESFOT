const typedText = document.getElementById("typed");
const text = typedText.textContent; // Obtiene el texto original del título
typedText.textContent = ""; // Borra el texto original para que se escriba de nuevo

let i = 0;

function escribir() {
    if (i < text.length) {
        typedText.textContent += text.charAt(i); // Agrega un carácter al texto
        i++;
        setTimeout(escribir, 150); // Ajusta la velocidad de tipeo (150ms por letra)
    } else {
        setTimeout(() => {
            typedText.textContent = ""; // Limpia el texto
            i = 0; // Reinicia el índice
            escribir(); // Vuelve a iniciar la animación
        }, 1000); // Tiempo de pausa antes de reiniciar la animación
    }
}

escribir(); // Inicia la animación
