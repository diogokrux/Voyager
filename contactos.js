function validarContacto() {
    const nome = document.getElementById('contacto-nome').value.trim();
    const email = document.getElementById('contacto-email').value.trim();
    const mensagem = document.getElementById('contacto-mensagem').value.trim();

    if (nome.length < 3) { alert('Por favor, indica um nome válido.'); return false; }
    if (!email.includes('@') || !email.includes('.')) { alert('Por favor, indica um email válido.'); return false; }
    if (mensagem.length < 10) { alert('A mensagem deve ter pelo menos 10 caracteres.'); return false; }
    alert('Mensagem enviada com sucesso! Entraremos em contacto brevemente.');
    return false;
}