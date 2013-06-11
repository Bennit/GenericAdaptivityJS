Function.prototype.inheritsFrom = function( parentClassOrObject ){ 
  if ( parentClassOrObject.constructor == Function ) 
  { 
    //Normal Inheritance 
    this.prototype = new parentClassOrObject;
    this.prototype.constructor = this;
    this.prototype.parent = parentClassOrObject.prototype;
  } 
  else 
  { 
    //Pure Virtual Inheritance 
    this.prototype = parentClassOrObject;
    this.prototype.constructor = this;
    this.prototype.parent = parentClassOrObject;
  } 

  return this;
}

function Pointcut(obj,pattern) {
  this.obj = obj;
  this.pattern = pattern
}

var aop = null;
var adas = [];

function GAAOP(aspects,cb) {
  dojo.require("dojox.lang.aspect");
  dojo.ready(function() {    
    aop = dojox.lang.aspect;
    for(var i = 0; i < aspects.length; i++) {
      var aspect = new aspects[i]();

      if(aspect.hasOwnProperty('addFeatures')) {
        aspect.addFeatures();
      }
      aspect._apply();
      adas.push(aspect);
      console.log("loaded and applied "+aspect.constructor.name);
    }
    cb();
  });
}
