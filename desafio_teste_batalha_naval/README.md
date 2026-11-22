# Desafio de Teste — Batalha Naval

Casos de teste em **JavaScript** para validar posicionamentos e tiros em um tabuleiro de **Batalha Naval 10 x 10**.

## Colaborador

- **Daniel Mitsuo Tsuyama**

## Especificação do desafio

- Tabuleiro de 10 x 10.
- 1 Porta-aviões (5 casas).
- 1 Encouraçado (4 casas).
- 1 Submarino (3 casas).
- 1 Destroier (2 casas).
- Casos de teste em JavaScript para testar JavaScript.

### Regras implementadas

- Validação de posições horizontais e verticais.
- Rejeição de posicionamentos diagonais, descontínuos ou fora do tabuleiro.
- Validação da frota com os tamanhos especificados.
- Rejeição de sobreposição entre navios.
- Verificação de tiro acertado ou perdido.

## Como executar

```bash
npm test
```

Requer Node.js 18 ou superior. Os testes utilizam o módulo nativo `node:test`, sem dependências externas.

## Estrutura

```text
index.js     # regras de posicionamento e validação
test.js      # casos de teste automatizados
package.json # comando de execução
```

## Funcionamento dos casos de teste

| Grupo | O que verifica |
|---|---|
| Posicionamento | Posicionamentos horizontais e verticais válidos. |
| Posições inválidas | Rejeição de diagonal, descontinuidade e coordenadas fora do tabuleiro. |
| Frota | Validação de todos os navios com tamanhos exigidos. |
| Integridade da frota | Rejeição de frota incompleta e sobreposição de navios. |
| Tiros | Identificação de tiros que acertam ou não atingem navios. |

**Observação:** o projeto implementa validações de posicionamento e tiro para testes, não uma partida completa de Batalha Naval.
