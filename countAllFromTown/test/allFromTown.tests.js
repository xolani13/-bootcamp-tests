//console.log(countAllFromTown('CL 124,CY 567, CL 345, CJ 456,CL 341','CY'))
//console.log(countAllFromTown('CY 124,CY 567, CK 345, CJ 456,CL 341','CO'))

describe('' , function(){
    it('This test verifies the number of reg numbers from CY' , function(){
        assert.equal(2,countAllFromTown('CY 124,CY 567, CK 345, CJ 456,CL 341','CY'));

    });

});