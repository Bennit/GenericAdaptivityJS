function operand() {
  return operand.MIN + Math.floor(Math.random() * (operand.MAX - operand.MIN + 1));
}

operand.MIN = 0;
operand.MAX = 20;
