/// <reference types="cypress" />

describe('Caesar cipher', () => {
    beforeEach(() => {
        cy.visit('../../pages/caesar.html')
    })

    it('p should have text Hello World!', () => {
        cy.dataCy('cipher-key').type(6)
        cy.dataCy('cipher-message').type("Hello World!")
        cy.dataCy('cipher-button').click()
        cy.dataCy('cipher-result').should('have.text', 'Nkrru Cuxrj!')
    })
})
