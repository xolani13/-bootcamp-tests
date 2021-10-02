//console.log(regCheck("452 542 GP","GP")) // This should return true

//console.log(regCheck("452 542 EC","GP")) // This should return false

describe('This test', function () {
    it('should pass', function () {
        assert.equal(true, regCheck("452 542 GP", "GP"));
    });

    it('should fail', function () {
        assert.equal(true, regCheck('123 EC', 'MP'));
    });

});