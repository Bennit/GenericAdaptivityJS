function ApplySettingsAspect () {
  // this.pc // pointcut
  // this.apply(cfg,jp) // before advice
}
ApplySettingsAspect.inheritsFrom(AdaptivityBaseAspect);

ApplySettingsAspect.prototype._apply = function() {
  var aspect = this;
  aop.advise(this.pc.obj,this.pc.pattern,{before:function() {
    aspect.apply(aspect.cfg(),aop.getContext().joinPoint);
  }});
};
