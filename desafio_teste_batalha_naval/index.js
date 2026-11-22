const tamanhos = {
    porta_avioes: 5,
    encouracado: 4,
    submarino: 3,
    destroier: 2
};

function validarPosicao(coordenadas) {
    if (!Array.isArray(coordenadas) || coordenadas.length < 2) {
        return false;
    }

    const linhas = coordenadas.map(posicao => posicao[0]);
    const colunas = coordenadas.map(posicao => posicao[1]);

    if (coordenadas.some(([linha, coluna]) =>
        linha < 0 || linha > 9 || coluna < 0 || coluna > 9
    )) {
        return false;
    }

    const horizontal =
        linhas.every(linha => linha === linhas[0]) &&
        colunas.every((coluna, indice) =>
            indice === 0 || coluna === colunas[indice - 1] + 1
        );

    const vertical =
        colunas.every(coluna => coluna === colunas[0]) &&
        linhas.every((linha, indice) =>
            indice === 0 || linha === linhas[indice - 1] + 1
        );

    return horizontal || vertical;
}

function validarFrota(frota) {
    if (Object.keys(tamanhos).some(tipo =>
        !frota[tipo] || frota[tipo].length !== tamanhos[tipo]
    )) {
        return false;
    }

    const todasCoordenadas = Object.values(frota).flat();
    const coordenadasUnicas = new Set(
        todasCoordenadas.map(([linha, coluna]) => `${linha},${coluna}`)
    );

    if (todasCoordenadas.length !== 14 || coordenadasUnicas.size !== 14) {
        return false;
    }

    return Object.values(frota).every(validarPosicao);
}

function acertar(navio, coordenada) {
    return navio.some(([linha, coluna]) =>
        linha === coordenada[0] && coluna === coordenada[1]
    );
}

module.exports = {
    validarPosicao,
    validarFrota,
    acertar
};
