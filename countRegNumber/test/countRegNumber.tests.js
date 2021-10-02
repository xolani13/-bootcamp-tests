//console.log(countRegNumber(('CA 182736,CY 523519,CJ 812328, CK 547562'))) // This should return 4
//console.log(countRegNumber('')) // 

//console.log(regCheck("452 542 EC","GP")) // This should return false

describe('This test', function () {
    it('should pass', function () {
        assert.equal(4, countRegNumber('CA 182736,CY 523519,CJ 812328, CK 547562'));
   });

   it('fail', function () {
    assert.equal(1, countRegNumber('CY 25, CK 24'));
});

});