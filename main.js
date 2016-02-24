var test = require('unit.js');
describe('learning unit testing with unit.js', function(){
    it('simple string testing', function(){
        test.string('hello')
            .startsWith('h');
    });
    
    it('assertion error', function(){
        var n = 10;
        test.assert(n == 1);
    });
});
