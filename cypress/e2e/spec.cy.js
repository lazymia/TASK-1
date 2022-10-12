describe('MY STORE', () =>{
  beforeEach(() =>{
      cy.visit('/')
  })
context('Users are able to search for an item using the search bar', () =>{
  it('allows a user search for items', () =>{
    cy.get('#search_query_top').type("dress") // targets the search input field and types on dress
    cy.get('#searchbox > .btn').click() // finds the search button and clicks on it
    cy.url().and('eq','http://automationpractice.com/index.php?controller=search&orderby=position&orderway=desc&search_query=dress&submit_search=') //asserts that the url has changed
    cy.get('.page-heading').should("exist") //confirms that the search has been filtered
    cy.get('.heading-counter').contains("7 results have been found.") //shows result of filtered search
  })
})
 context('Users are able to filter search results under Women category by Color and Category', () =>{
  it('allows users filter through women category', () =>{
    cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click() //clicks on the women button
    cy.url().and('eq', "http://automationpractice.com/index.php?id_category=3&controller=category") // assert that we are indeed in the women category
    cy.get(':nth-child(1) > .layered_subtitle_heading > .layered_subtitle').should("contain.text", "Categories")  // confirmation that the categories section is available  
    cy.get('#layered_category_4').check() //checking off the blouses
    cy.get(':nth-child(3) > .layered_subtitle_heading > .layered_subtitle').should("exist") //checking that color section exist
    cy.get(':nth-child(1) > .layered_color > a').click() //clicking on choiced color
    cy.get('.last-item-of-tablet-line').should('be.visible').and('contain.text', 'blouse') //verifying that selections have been correctly filtered
  })
 })
context('Users are able to view the details of any clothing item from the POPULAR section and add them to the cart', ()=>{
  it('allows users to view details of the popular section and add to cart', ()=>{
    cy.get('.active > .homefeatured').should("exist")
    cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
    cy.get('#layer_cart > .clearfix').should('exist')
      .within(()=>{
          cy.get('.layer_cart_product > h2').should('exist')
          cy.get('h2 > .ajax_cart_product_txt_s').should('exist')
          cy.get('[title="View my shopping cart"]').trigger({force:true})
    })
    
  })
})
})