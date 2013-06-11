function MGHarderAdaptation() {
  var limit = 0.1;
  var factor = 100.0;
  var first = true;

  this.pc = new Pointcut(Game,"round");
  this.threshold = function(user) {
    if(first) { first = false; return false; }
    this.debug("Running threshold function for harder: "+user.compute("accuracy")+" > "+limit);
    return user.compute("accuracy") > limit;
  };
  this.adapt = function(user,cfg) {
    this.debug("Making the game harder");
    var max = cfg.get("max");
    cfg.set("max", Math.ceil(max*factor));
    this.debug('NewMax='+cfg.get('max'));
  };
}
MGHarderAdaptation.inheritsFrom(AdaptationAspect);
