const cypress = require("cypress");
const { beforeEach } = require("mocha");
const { describe } = require("mocha");

describe('hrm demo account', () =>{
    beforeEach(() =>{
        cy.visit('/')
    })
    context('login', () =>{
        it('allows a user to login with a valid email', ()=>{

        })
        it('does not allow a user to login with a valid email', ()=>{
        
        })
    })
    
})
