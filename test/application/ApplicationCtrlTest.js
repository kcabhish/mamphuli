describe("Test for Application Controller",function(){
    it("has a dummy spec to test 2+2",function(){
        expect(2+2).toEqual(4);
    });
    it("has to be true test",function(){
        expect(true).toBeTruthy();
    });
    it("has string 'world' ",function(){
        expect("hello world").toContain("world");
    });
    it("has to be not true test",function(){
        expect(!true).toBeFalsy();
    });
    it("has to be not true test",function(){
        expect(!true).toBeFalsy();
    });
});

