function sortPriceHighToLow(nums) {
  return nums.sort((a, b) => b.price - a.price);
}
console.log(
  sortPriceHighToLow([
    { id: 1, price: 550 },
    { id: 2, price: 30 },
    { id: 3, price: 60 },
    { id: 4, price: 10 },
  ])
);
