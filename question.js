function question() {
  this.lh = operand();
  this.rh = operand();
  this.op = operator.random();
  this.computation = this.lh+" "+this.op.symbol+" "+this.rh;
  this.answer = this.op.apply(this.lh,this.rh);
}

question.prototype.check = function(attempt) {
  return this.answer == attempt;
}
