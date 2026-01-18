export function generateReport(portfolio, value) {
  console.log("----- Portfolio Report -----");

  portfolio.forEach(token => {
    console.log("Token:", token.symbol, "Balance:", token.balance, "Price:", token.price);
  });

  console.log("Total Portfolio Value:", value);
  console.log("-----------------------------");
}
