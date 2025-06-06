function identificarBandeira(numero) {
  const n = numero.replace(/\D/g, ''); // Remove caracteres não numéricos

  // Nubank: 6370 (Visa) ou 5529 (Mastercard, exemplo)
  if (/^6370/.test(n) || /^5529/.test(n)) return 'Nubank';

  // Neon: 6277
  if (/^6277/.test(n)) return 'Neon';

  // MAIS: 5090
  if (/^5090/.test(n)) return 'MAIS';

  // JCB: começa com 35
  if (/^35/.test(n)) return 'JCB';

  // Aura: 5078
  if (/^5078/.test(n)) return 'Aura';

  // Visa: começa com 4
  if (/^4/.test(n)) return 'Visa';

  // MasterCard: 51-55 ou 2221-2720
  if (/^5[1-5]/.test(n) || /^2(2[2-9][1-9]|2[3-9]\d{2}|[3-6]\d{3}|7[01]\d{2}|720)/.test(n)) {
    return 'MasterCard';
  }

  // Elo: vários intervalos conhecidos
  if (/^(4011|4312|4389)/.test(n)) return 'Elo';

  // American Express: 34 ou 37
  if (/^3[47]/.test(n)) return 'American Express';

  // Discover: 6011, 65, 644-649
  if (/^6011/.test(n) || /^65/.test(n) || /^64[4-9]/.test(n)) return 'Discover';

  // Hipercard: 6062
  if (/^6062/.test(n)) return 'Hipercard';

  return 'Bandeira desconhecida';
}

// Exemplos de uso:
console.log(identificarBandeira('6370123412341234')); // Nubank
console.log(identificarBandeira('6277123412341234')); // Neon
console.log(identificarBandeira('5090123412341234')); // MAIS
console.log(identificarBandeira('3512341234123412')); // JCB
console.log(identificarBandeira('5078123412341234')); // Aura
console.log(identificarBandeira('4111111111111111')); // Visa
console.log(identificarBandeira('5500000000000004')); // MasterCard
console.log(identificarBandeira('4011780000000000')); // Elo
console.log(identificarBandeira('371449635398431'));  // American Express
console.log(identificarBandeira('6011111111111117')); // Discover
console.log(identificarBandeira('6062825624254001')); // Hipercardfunction 
// identificarBandeira(numero) 
{
  const n = numero.replace(/\D/g, ''); // Remove caracteres não numéricos

  // Visa: começa com 4
  if (/^4/.test(n)) return 'Visa';

  // MasterCard: 51-55 ou 2221-2720
  if (/^5[1-5]/.test(n) || /^2(2[2-9][1-9]|2[3-9]\d{2}|[3-6]\d{3}|7[01]\d{2}|720)/.test(n)) {
    return 'MasterCard';
  }

  // Elo: vários intervalos conhecidos
  if (/^(4011|4312|4389)/.test(n)) return 'Elo';

  // American Express: 34 ou 37
  if (/^3[47]/.test(n)) return 'American Express';

  // Discover: 6011, 65, 644-649
  if (/^6011/.test(n) || /^65/.test(n) || /^64[4-9]/.test(n)) return 'Discover';

  // Hipercard: 6062
  if (/^6062/.test(n)) return 'Hipercard';

  return 'Bandeira desconhecida';
}

// Exemplo de uso:
console.log(identificarBandeira('4111111111111111')); // Visa
console.log(identificarBandeira('5500000000000004')); // MasterCard
console.log(identificarBandeira('4011780000000000')); // Elo
console.log(identificarBandeira('371449635398431'));  // American Express
console.log(identificarBandeira('6011111111111117')); // Discover
console.log(identificarBandeira('6062825624254001')); // Hipercardz'