var Game = (function() {
  var m = {};

  m.qPerRound = 2;
  
  m.write = function(str) {
    var qE = document.getElementById('question');
    $(qE).append(str);
    qE.scrollTop = qE.scrollHeight;
  };

  m.writeln = function(str) {
    m.write(str+'<br />');
  };

  m.read = function() {
    var answer = $('#answer').val();
    $('#answer').val('');
    m.writeln(answer);
    return answer;
  };
  
  m.reader = function() {};
  m.noread = function() { m.reader = function() {} };

  m.askContinue = function(cb) {
    m.reader = function(str) {
      cb(str != 'n');
    }
    m.write("Do you want to go for another round (Y/n)? ");
  };

  m.question = function(nr,cb) {
    m.writeln('Question '+nr);
    var q = new question();
    m.write(q.computation + ' = ');
    m.reader = function(answer) {
      m.noread();
      if(q.check(answer)) {
        m.writeln("Your answer was correct!");
        cb(true);
      }
      else {
        m.writeln("Your answer was incorrect");
        cb(false);
      }
    }
  };

  m.round = function(nr,cb) {
    m.writeln("Round "+nr);
    var correct = 0;
    var correctplus = function(result) { if(result) correct ++; };
    var loop = function(i) {
      if(i == m.qPerRound) {
        m.writeln("Round grade: "+correct+"/"+m.qPerRound);
        cb();
      }
      else {
        m.question(i+1,function(result) {
          correctplus(result);
          loop(i+1);
        });
      }
    };
    // start the loop
    loop(0);
  };

  m.gameloop = function(i,cb) {
    m.round(i,function() {
      m.askContinue(function(cnt) {
        if(cnt) { m.gameloop(i+1,cb); }
        else { m.noread(); cb(); }
      })
    });
  };

  m.start = function() {
    // bind reader
    $('#answer').keypress(function(e) {
      if(e.which == 13) {
        m.reader(m.read());
      }
    });
    m.writeln("Welcome to MathGame!");
    m.writeln("Let's start counting.");
    m.gameloop(1,function() {
      m.writeln("Count-on!");
    });
  };

  return m;
  
})();
