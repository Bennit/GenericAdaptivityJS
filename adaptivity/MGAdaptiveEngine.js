function MGAdaptiveEngine() {
  
  this.init = new Pointcut(Game,"start");
  this.doInit = function(jp) {
    this.debug("MGAdaptiveEngine init");
    // nothing to do
  };

  this.cleanup = new Pointcut(Game,"start");
  this.doCleanup = function(jp) {
    this.debug("MGAdaptiveEngine cleanup");
    // nothing to do
  };

  this.addFeatures = function() {
    this.user().addFeature("accuracy",MGAccuracyFeature);
  };
}
MGAdaptiveEngine.inheritsFrom(AdaptiveEngineAspect);
