const chai = require ('chai')
var chaiHttp = require ('chai-http')
const should = chai.should()

var server = require ('../app')
chai.use(chaiHttp)

describe('get facebook access token',function(){
    it('should return access token',function(){
        chai.request(server)
        .get('/login/facebook')
        .end((err,res)=>{
            res.body.should.be.a('string')
        })
    })
})

describe('get user feed',function(){
    it('should return user feed',function(){
        chai.request(server)
        .get('/facebook/')
        .end((err,res)=>{
            res.body.should.be.a('array')
        })
    })
})