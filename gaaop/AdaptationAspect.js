function AdaptationAspect () {
  // this.pc = null; // pointcut
  // this.adapt = function(user,cfg) { /* ... */ }; // before advice
  // this.threshold = function(user) { return true/false; };
}
AdaptationAspect.inheritsFrom(AdaptivityBaseAspect);

AdaptationAspect.prototype._apply = function() {
  var aspect = this;
  aop.advise(this.pc.obj,this.pc.pattern,{before:function() {
    if(aspect.threshold(aspect.user())) {
      aspect.adapt(aspect.user(),aspect.cfg());
    }
  }});
};
