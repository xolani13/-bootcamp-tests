console.log(totalPhoneBill('call, sms, call, sms, sms,sms , call'))

describe('', function () {
    it('This test should verify the total cost', function () {

        assert.equal("R10.85", totalPhoneBill("call, sms, call, sms, sms,sms , call"));

    });

});