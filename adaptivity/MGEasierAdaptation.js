function MGEasierAdaptation() {
  var limit = 0.6;
  var factor = 0.01;
  var first = true;

  this.pc = new Pointcut(Game,"round");
  this.threshold = function(user) {
    if(first) { first = false; return false; }
    this.debug("Running threshold function for easier: "+user.compute("accuracy")+" <= "+limit);
    return user.compute("accuracy") <= limit;
  };
  this.adapt = function(user,cfg) {
    this.debug("Making the game easier");
    var max = this.cfg().get("max");
    this.cfg().set("max", Math.ceil(max*factor));
    this.debug('NewMax='+this.cfg().get('max'));
  };
}
MGEasierAdaptation.inheritsFrom(AdaptationAspect);
