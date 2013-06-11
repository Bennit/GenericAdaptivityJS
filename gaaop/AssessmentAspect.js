function AssessmentAspect() {
  // this.pc // pointcut
  // this.advice // aspect advice
}
AssessmentAspect.inheritsFrom(AdaptivityBaseAspect);

AssessmentAspect.prototype.plusOne = function(p) {
  this.user().set(p,this.user().get(p)+1);
}

AssessmentAspect.prototype.minusOne = function(p) {
  this.user().set(p,this.user().get(p)-1);
}

AssessmentAspect.prototype._apply = function() {
  aop.advise(this.pc.obj,this.pc.pattern,this.advice);
}
