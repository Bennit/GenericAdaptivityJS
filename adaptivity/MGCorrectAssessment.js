function MGCorrectAssessment() {
  this.pc = new Pointcut(question,"check");
  var aspect = this;
  this.advice = {around:function() {
    var answer = aop.proceed(arguments[0]);
    if(answer) {
      aspect.debug("Attempt correct");
      aspect.plusOne("correct");
    } else {
      aspect.debug("Attempt incorrect");
    }
    return answer;
  }};
}
MGCorrectAssessment.inheritsFrom(AssessmentAspect);
