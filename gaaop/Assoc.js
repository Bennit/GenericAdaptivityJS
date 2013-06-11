function Assoc() {
  this.properties = {};
}

Assoc.prototype.get = function(p) {
  return this.properties[p];
}

Assoc.prototype.set = function(p,v) {
  this.properties[p] = v;
}
