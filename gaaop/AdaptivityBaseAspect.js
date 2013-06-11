function AdaptivityBaseAspect () { };

AdaptivityBaseAspect.prototype.debug = function(s) {
  console.log("[GAAOP] "+s);
};

AdaptivityBaseAspect.prototype.user = function() {
  return AdaptiveEngineAspect.user;
};

AdaptivityBaseAspect.prototype.cfg = function() {
  return AdaptiveEngineAspect.cfg;
};

AdaptivityBaseAspect.prototype._apply = function() {
  // override
  console.error("_apply not overriden for "+this.__proto__);
};
