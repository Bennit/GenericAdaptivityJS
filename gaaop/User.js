function User() {
  this.features = {};
};
User.inheritsFrom(Assoc);

User.prototype.compute = function(ft) {
  var feature = this.features[ft];
  return feature(this);
}

User.prototype.addFeature = function(name,ft) {
  this.features[name] = ft;
}
