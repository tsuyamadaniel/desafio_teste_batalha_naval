const test = require('node:test');
const assert = require('node:assert/strict');

const {
    validarPosicao,
    validarFrota,
    acertar
} = require('./index');

const frota = {
    porta_avioes: [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]],
    encouracado: [[2, 0], [2, 1], [2, 2], [2, 3]],
    submarino: [[4, 0], [4, 1], [4, 2]],
    destroier: [[6, 0], [6, 1]]
};

test('Posicionamento horizontal/vertical válido', () => {
    assert.equal(validarPosicao([[1, 1], [1, 2], [1, 3]]), true);
    assert.equal(validarPosicao([[1, 1], [2, 1]]), true);
});

test('Posição inválida por diagonal, salto ou limite', () => {
    assert.equal(validarPosicao([[1, 1], [2, 2]]), false);
    assert.equal(validarPosicao([[1, 1], [1, 3]]), false);
    assert.equal(validarPosicao([[9, 9], [9, 10]]), false);
});

test('Frota completa no tabuleiro 10x10', () => {
    assert.equal(validarFrota(frota), true);
});

test('Rejeita frota incompleta ou sobreposição', () => {
    const frotaIncompleta = { ...frota };
    delete frotaIncompleta.destroier;

    assert.equal(validarFrota(frotaIncompleta), false);

    const frotaSobreposta = {
        ...frota,
        destroier: [[0, 0], [0, 1]]
    };

    assert.equal(validarFrota(frotaSobreposta), false);
});

test('Verifica tiro acertado e perdido', () => {
    assert.equal(acertar(frota.submarino, [4, 1]), true);
    assert.equal(acertar(frota.submarino, [9, 9]), false);
});
