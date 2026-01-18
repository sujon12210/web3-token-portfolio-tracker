export function analyzePerformance(oldValue, newValue) {
  const change = ((newValue - oldValue) / oldValue) * 100;
  return change.toFixed(2) + "%";
}
