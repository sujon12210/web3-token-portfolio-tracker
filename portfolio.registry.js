export function loadPortfolio() {
  console.log("Loading portfolio...");

  return [
    { symbol: "ETH", balance: 2, price: 2500 },
    { symbol: "USDC", balance: 1000, price: 1 },
    { symbol: "ARB", balance: 500, price: 1.5 }
  ];
}
