var test = require('unit.js');
describe('learning unit testing with unit.js', function(){
    it('simple string testing', function(){
        test.string('hello')
            .startsWith('h');
    });
    
    it('assertion error', function(){
        var n = 10;
        test.assert(n == 10);
    });
    
    it('função somar dispara exceção', function(){
        var somar = function() {
            throw new Error('Not implemented yet');
        }
        test.function(somar)
            .throws(Error);
    });
    
    it('função somar correta', function(){
        var somar = function(a, b) {
            return a + b;
        }
        var a = 1;
        var b = 2;
        var c = somar(a, b);
        test.number(c)
            .isNot(5)
            .isBetween(1, 10)
            .is(3);
    });
    
    it('número está contido no array', function(){
        var N = [1, 2, 3, 4, 5];
        var n = 1;
        test.array(N).hasValue(n);
    });
});
