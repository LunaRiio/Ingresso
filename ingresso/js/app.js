    function comprar() {
    let ingressoEscolhido = document.getElementById('tipo-ingresso').value;
    let quantidadeIngresso = parseInt(document.getElementById('qtd').value);
    if (ingressoEscolhido == 'inferior') {
        let elementoInferior = document.getElementById('qtd-inferior');
        let quantidadeDisponivelInf = parseInt(elementoInferior.textContent);
        if (quantidadeIngresso  < 0) {
            alert ('Insira uma quantidade válida!')
            return;
        }
        if (quantidadeIngresso > quantidadeDisponivelInf) {
            alert('Cadeiras Inferiores Indisponiveis');
        } else {
            elementoInferior.textContent = quantidadeDisponivelInf - quantidadeIngresso;
            alert('Compra realizada!');
        }
    }
    if (ingressoEscolhido == 'pista') {
        let elementoPista = document.getElementById('qtd-pista');
        let quantidadeDisponivelPista = parseInt(elementoPista.textContent);
         if (quantidadeIngresso  < 0) {
            alert ('Insira uma quantidade válida!')
            return;
        }
        if (quantidadeIngresso > quantidadeDisponivelPista) {
            alert('Pista Indisponível!');
        } else{
            elementoPista.textContent = quantidadeDisponivelPista - quantidadeIngresso;
            alert('Compra realizada!');
        }
    }
    if (ingressoEscolhido == 'superior') {
        let elementoSuperior = document.getElementById('qtd-superior');
        let quantidadeDisponivelSup = parseInt(elementoSuperior.textContent);
         if (quantidadeIngresso  < 0) {
            alert ('Insira uma quantidade válida!')
            return;
        }
        if (quantidadeIngresso > quantidadeDisponivelSup) {
            alert('Sem cadeiras superiores disponíveis!');
        } else {
            elementoSuperior.textContent = quantidadeDisponivelSup - quantidadeIngresso;
            alert('Compra realizada!'); 
        }

    }
}