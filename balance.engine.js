export function updateBalances(portfolio) {
  console.log("Updating balances...");

  return portfolio.map(token => {
    const change = (Math.random() - 0.5) * 0.1 * token.balance;
    return {
      ...token,
      balance: Number((token.balance + change).toFixed(4))
    };
  });
}
