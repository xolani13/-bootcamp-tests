describe('this test', function () {
    it('should show you how to use MochaJS', function () {
        var regNoString = 'CL 900,CJ 678 543 , CJ 678 543, CA 34567, CJ 67890, CN 7864';
        var regNumbersForPaarl = allPaarl(regNoString);
        assert.equal(3, regNumbersForPaarl.length);
        
    });
    
});