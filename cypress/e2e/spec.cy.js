describe('MY STORE', () =>{
  beforeEach(() =>{
      cy.visit('/')
  })
context('Users are able to search for an item using the search bar', () =>{
  it('allows a user search for items', () =>{
    cy.get('#search_query_top').type("dress")
    cy.get('#searchbox > .btn').click()
    cy.url().and('eq','http://automationpractice.com/index.php?controller=search&orderby=position&orderway=desc&search_query=dress&submit_search=')
    cy.get('.page-heading').should("exist")
    cy.get('.heading-counter').contains("7 results have been found.")
  })
})
 context('Users are able to filter search results under Women category by Color and Category', () =>{
  it.only('allows users filter through women category', () =>{
    cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()
    cy.url().and('eq', "http://automationpractice.com/index.php?id_category=3&controller=category")
    cy.get('#layered_category_4').check()
    cy.get(':nth-child(4) > .layered_color > a').click()
    
  })
 })
context('Users are able to view the details of any clothing item from the POPULAR section and add them to the cart', ()=>{
  it('allows users to view details of the popular section and add to cart', ()=>{
    cy.get('.active > .homefeatured').and("contain.text", "POPULAR")
      //.find("")
  })
})
})