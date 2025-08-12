/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //  function findBestPrice(){
  //   let lowestPrice=prices[0]
  //   let indexOfSmallest=0
  //   for(let i=0;i<prices.length;i++){
  //     if(lowestPrice>prices[i]){
  //         lowestPrice=prices[i]
  //         indexOfSmallest=i
  //     }
  //   }
  //   let largestAfterSmallest=prices[indexOfSmallest+1]
  //   if(indexOfSmallest===prices.length-1){
  //     //this means samllest elemt is last
  // prices.splice(indexOfSmallest)
  //      findBestPrice()
  //   }
  //   for(let j=indexOfSmallest;j<prices.length;j++){
  //     if(largestAfterSmallest<prices[j]){
  //         largestAfterSmallest=prices[j]
  //     }
  //   }
  //   if(largestAfterSmallest>lowestPrice){
  //     return largestAfterSmallest-lowestPrice
  //   }else{
  //     //rmeove samllest adn find next smallest
  //      prices.splice(indexOfSmallest)
  //      findBestPrice()
  //   }
  //  }
  //  return findBestPrice()
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let price of prices) {
    if (minPrice > price) {
      minPrice = price;
    } else {
      let potentialProfit = price - minPrice;
      if (potentialProfit > maxProfit) {
        maxProfit = potentialProfit;
      }
    }
  }
  return maxProfit;
};
