function operator(symbol,apply) {
  this.symbol = symbol;
  this.apply = apply;
};

operator.oprs = [
  new operator("+",function(a,b){return a+b;}),
  new operator("-",function(a,b){return a-b;})
];

operator.random = function() {
  return operator.oprs[Math.floor(Math.random()*operator.oprs.length)];
};
