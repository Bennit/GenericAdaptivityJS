function MGSettingsUserInit() {
  var first = true;
  this.pc = new Pointcut(Game,"gameloop");
  this.configure = function(user,cfg) {
    if(first) { first = false; }
    else { return; }
    this.debug("Setting max");
    cfg.set("max",operand.MAX);
  };
}
MGSettingsUserInit.inheritsFrom(ConfigurationAspect);
