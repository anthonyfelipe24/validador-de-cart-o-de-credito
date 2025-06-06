# validador-de-cart-o-de-credito
Criando um Validador de Bandeiras de Cartão de Crédito com o GitHub Copilot
# Projeto: Identificação de Bandeira de Cartão

Este projeto tem como objetivo identificar a bandeira de um cartão de crédito a partir do número informado, utilizando regras baseadas nos prefixos mais comuns de cada operadora.

## Como funciona

A função `identificarBandeira(numero)` recebe um número de cartão (como string ou número) e retorna uma string com a bandeira identificada. O código remove todos os caracteres não numéricos e verifica o início do número conforme os padrões de cada bandeira.

### Bandeiras suportadas

- **Nubank:** Prefixos 6370 (Visa) ou 5529 (Mastercard, exemplo)
- **Neon:** Prefixo 6277
- **MAIS:** Prefixo 5090
- **JCB:** Prefixo 35
- **Aura:** Prefixo 5078
- **Visa:** Começa com 4
- **MasterCard:** Começa com 51-55 ou entre 2221 e 2720
- **Elo:** Prefixos 4011, 4312, 4389
- **American Express:** Começa com 34 ou 37
- **Discover:** Começa com 6011, 65 ou faixa de 644 a 649
- **Hipercard:** Prefixo 6062

Caso o número não corresponda a nenhum padrão conhecido, retorna "Bandeira desconhecida".

## Exemplo de uso

```javascript
console.log(identificarBandeira('4111111111111111')); // Visa
console.log(identificarBandeira('5500000000000004')); // MasterCard
console.log(identificarBandeira('6370123412341234')); // Nubank
console.log(identificarBandeira('6277123412341234')); // Neon
console.log(identificarBandeira('5090123412341234')); // MAIS
console.log(identificarBandeira('3512341234123412')); // JCB
console.log(identificarBandeira('5078123412341234')); // Aura
```

## Observações

- Os prefixos utilizados são os mais comuns, mas podem variar conforme o emissor do cartão.
- O projeto pode ser expandido para incluir mais bandeiras ou intervalos de prefixos conforme necessário.

---
```<!-- filepath: c:\Users\Flora\OneDrive\Área de Trabalho\projeto-bandeira-do-cartão\readme.md -->


