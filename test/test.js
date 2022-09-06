
const expect =  require("chai").expect;
const request =  require("request")

describe("Add two number test", () => {
    url = "http://localhost:3001/addNumber/2/3"
    it("API works", (done)=>{
        request(url, function(err,res,body) {
            console.log({res})
            expect(res.statusCode).to.equal(200)
            done();
        })
    })
})