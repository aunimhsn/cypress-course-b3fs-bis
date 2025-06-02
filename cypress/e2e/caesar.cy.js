/// <reference types="cypress" />

describe('Caesar cipher', () => {
    beforeEach(() => {
        cy.visit('../../pages/caesar.html')
    })

    it('p should have text Hello World!', () => {
        cy.get('#cipher-key').type(6)
        cy.get('#cipher-message').type("Hello World!")
        cy.get('button[type="button"]').click()
        cy.get('p#result').should('have.text', 'Nkrru Cuxrj!')
    })
})
