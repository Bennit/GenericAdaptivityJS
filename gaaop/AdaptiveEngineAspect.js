function AdaptiveEngineAspect() {
  AdaptiveEngineAspect.user = new User();
  AdaptiveEngineAspect.cfg = new Assoc();

  //this.init = null; // pointcut
  //this.doInit = function() { }; // before init pc advice

  //this.cleanup = null; // pointcut
  //this.doCleanup = function() { }; // before cleanup pc advice

  //this.addFeatures = function() { };
}
AdaptiveEngineAspect.inheritsFrom(AdaptivityBaseAspect);

AdaptiveEngineAspect.prototype._apply = function() {
  var aspect = this;
  aop.advise(this.init.obj,this.init.pattern,{before: function() {
    aspect.doInit(aop.getContext().joinPoint);}});
  aop.advise(this.cleanup.obj,this.cleanup.pattern,{after: function() {
    aspect.doCleanup(aop.getContext().joinPoint);}});
}
