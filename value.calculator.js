export function calculateValue(portfolio) {
  let total = 0;

  portfolio.forEach(token => {
    total += token.balance * token.price;
  });

  return total.toFixed(2);
}
