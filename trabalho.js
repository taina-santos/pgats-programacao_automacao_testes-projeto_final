function geradorDeTagsDeIdentificacao(nomePet) {
    return nomePet.toUpperCase();
}

function verificarSePodeSerAdotado(idadePet, portePet) {
    if (idadePet >= 1)
        return portePet === 'M' ? true : false;
    else
        return false;
}

function calcularConsumoDeRacao(nomePet, idadePet, pesoPet) {
    return pesoPet * 300;
}

function decidirTipoDeAtividadePorPorte(portePet) {
    switch (portePet) {
        case 'pequeno':
            return `brincar dentro de casa`
        case 'médio':
            return `caminhada no quarteirão`
        case 'grande':
            return `correr no parque`
        default:
            return `porte inválido`;
    }
}

async function buscarDadoAsync() {
    const listaDeNomeDePets = ['Pipoca', 'Pantera', 'Pitoco'];
    for (let i = 0; i < listaDeNomeDePets.length; i++) {
        return listaDeNomeDePets[i];
    }
}

export{
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}