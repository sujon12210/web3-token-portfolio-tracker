import { connectRPC } from "./rpc.client.js";
import { loadPortfolio } from "./portfolio.registry.js";
import { updateBalances } from "./balance.engine.js";
import { calculateValue } from "./value.calculator.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Web3 Token Portfolio Tracker");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const portfolio = loadPortfolio();

const updated = updateBalances(portfolio);
const value = calculateValue(updated);

generateReport(updated, value);
