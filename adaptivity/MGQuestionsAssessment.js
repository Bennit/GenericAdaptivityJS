function MGQuestionsAssessment() {
  this.pc = new Pointcut(Game,"question");
  var aspect = this;
  this.advice = {before:function() {
    aspect.debug("Question asked");
    aspect.plusOne("questions");
  }};
}
MGQuestionsAssessment.inheritsFrom(AssessmentAspect);
