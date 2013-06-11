function ConfigurationAspect() {
  // this.pc = null; // pointcut
  // this.configure = function(user,cfg) { /* ... */ }
}
ConfigurationAspect.inheritsFrom(AdaptivityBaseAspect);

ConfigurationAspect.prototype._apply = function() {
  var aspect = this;
  aop.advise(this.pc.obj,this.pc.pattern,{before:function() {
    aspect.configure(aspect.user(),aspect.cfg());
  }});
};

ConfigurationAspect.prototype.initialize_json = function(assoc,json) {
  $.extend(assoc,json);
};
