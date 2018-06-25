var Benchmark = require('benchmark');
var tb = require('travis-benchmark');
var _ = require('lodash');
var global = require('global');

var suite = new Benchmark.Suite(`variables scope`);

(function() {
  var a = {
    c: 123,
    b: function() {
      this.c;
    }
  };
  suite.add('object this', function() {
    return a.b();
  });
})();

(function() {
  var x;
  global.y = 123;
  x = function() {
    return this.y;
  };
  suite.add('global this', function() {
    return x();
  });
})();

(function() {
  var x, y = 123;
  x = function() {
    return y;
  };
  suite.add('scope 1', function() {
    x();
  });
})();

(function() {
  var x, y = 123;;
  (function() {
    x = function() {
      return y;
    };
  })();
  suite.add('scope 2', function() {
    x();
  });
})();

(function() {
  var x, y = 123;;
  (function() {
    (function() {
      x = function() {
        return y;
      };
    })();
  })();
  suite.add('scope 3', function() {
    x();
  });
})();

(function() {
  var x, y = 123;;
  (function() {
    (function() {
      (function() {
        x = function() {
          return y;
        };
      })();
    })();
  })();
  suite.add('scope 4', function() {
    x();
  });
})();

(function() {
  var x, y = 123;;
  (function() {
    (function() {
      (function() {
        (function() {
          x = function() {
            return y;
          };
        })();
      })();
    })();
  })();
  suite.add('scope 5', function() {
    x();
  });
})();

(function() {
  var x, y = 123;;
  (function() {
    (function() {
      (function() {
        (function() {
          (function() {
            x = function() {
              return y;
            };
          })();
        })();
      })();
    })();
  })();
  suite.add('scope 6', function() {
    x();
  });
})();

(function() {
  var x, y = 123;;
  (function() {
    (function() {
      (function() {
        (function() {
          (function() {
            (function() {
              x = function() {
                return y;
              };
            })();
          })();
        })();
      })();
    })();
  })();
  suite.add('scope 7', function() {
    x();
  });
})();

(function() {
  var x, y = 123;;
  (function() {
    (function() {
      (function() {
        (function() {
          (function() {
            (function() {
              (function() {
                x = function() {
                  return y;
                };
              })();
            })();
          })();
        })();
      })();
    })();
  })();
  suite.add('scope 8', function() {
    x();
  });
})();

(function() {
  var x, y = 123;;
  (function() {
    (function() {
      (function() {
        (function() {
          (function() {
            (function() {
              (function() {
                (function() {
                  x = function() {
                    return y;
                  };
                })();
              })();
            })();
          })();
        })();
      })();
    })();
  })();
  suite.add('scope 9', function() {
    x();
  });
})();

(function() {
  var x, y = 123;;
  (function() {
    (function() {
      (function() {
        (function() {
          (function() {
            (function() {
              (function() {
                (function() {
                  (function() {
                    x = function() {
                      return y;
                    };
                  })();
                })();
              })();
            })();
          })();
        })();
      })();
    })();
  })();
  suite.add('scope 10', function() {
    x();
  });
})();

tb.wrapSuite(suite);
suite.run({ async: true });
