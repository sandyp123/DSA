var maxProfit = function (prices) {
  if (!prices || prices.length === 0) return 0;
  let buyprice = prices[0];
  let maxProfit = 0;
  for (let i of prices) {
    buyprice = Math.min(i, buyprice);
    maxProfit = Math.max(maxProfit, i - buyprice);
  }
  return maxProfit;
};
