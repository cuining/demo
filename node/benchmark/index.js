const Benchmark = require('benchmark');

const suite = new Benchmark.Suite();

const int1 = function(str) {
  return +str;
};

const int2 = function(str) {
  return parseInt(str, 10);
};

const int3 = function(str) {
  return Number(str);
};

suite
  .add('+', () => int1('10'))
  .add('parseInt', () => int2('10'))
  .add('Number', () => int3('10'))
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ async: true });
