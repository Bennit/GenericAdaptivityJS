function MGRoundResetUserInit() {
  this.pc = new Pointcut(Game,"round");
  this.configure = function(user,cfg) {
    this.debug("Resetting user profile");
    user.set("questions",0);
    user.set("correct",0);
  };
}
MGRoundResetUserInit.inheritsFrom(ConfigurationAspect);
