function MGApplySettings () {
  this.pc = new Pointcut(Game,"round");
  this.apply = function(cfg) {
    this.debug('Applying settings');
    operand.MAX = this.cfg().get("max");
  }
}
MGApplySettings.inheritsFrom(ApplySettingsAspect);
