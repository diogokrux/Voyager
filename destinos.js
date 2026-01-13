function redirectDestinos() {
    document.getElementById('destinos').scrollIntoView({ behavior: 'smooth' });
}

function redirect(destino) {
    window.location.href = window.location.pathname + '?destino=' + destino;
}

function carregarDestino() {
    const params = new URLSearchParams(window.location.search);
    const destino = params.get('destino');
    if (!destino) return;

    const dados = {
    paris: { titulo: 'Paris', texto: 'Descobre a cidade da luz, famosa pela sua arte, cultura e gastronomia única.', imagem: 'imagens/paris.jpg' },
    maldivas: { titulo: 'Maldivas', texto: 'Um paraíso tropical com águas cristalinas, praias de areia branca e total tranquilidade.', imagem: 'imagens/maldivas.jpg' },
    novaiorque: { titulo: 'Nova Iorque', texto: 'A cidade que nunca dorme, repleta de energia, arranha-céus icónicos e diversidade cultural.', imagem: 'imagens/novayork.jpg' }
    };

    const d = dados[destino];
    if (!d) return;

    document.getElementById("destinos").innerHTML = `
        <img src="${d.imagem}" style="width:100%;max-height:350px;object-fit:cover" />
        <h2 style="margin-top:40px">${d.titulo}</h2>
        <p style="max-width:600px;margin:20px auto">${d.texto}</p>

        <form onsubmit="return validarFormulario()" style="max-width:400px;margin:40px auto;text-align:left">
        <label>Nome</label>
        <input id="nome" style="width:100%;padding:10px;margin-bottom:15px" />

        <label>Email</label>
        <input id="email" style="width:100%;padding:10px;margin-bottom:15px" />

        <button class="btn" type="submit">Pedir informações</button>
        </form>`;
}

function validarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();

    if (nome.length < 3) {
    alert('Por favor, insere um nome válido.');
    return false;
    }

    if (!email.includes('@') || !email.includes('.')) {
    alert('Por favor, insere um email válido.');
    return false;
    }

    alert('Pedido enviado com sucesso!');
    reset();
    return false;
}
carregarDestino();