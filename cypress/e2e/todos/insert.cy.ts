import {getFormInput, getFormError, getError} from '../getElements'


describe('Users', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/todos')
        cy.wait(1000)

        getItem()
            .should('have.length', 1)
        getError()
            .should('have.length', 0)
    })

    it('insert empty', () => {
        cy.get('button')
            .trigger('click')

        getFormError('title')
            .should('have.text', 'Value is required')
    })

    it('insert success', () => {
        const text = 'Second'
        getFormInput('title')
            .type('Second')

        cy.get('button')
            .trigger('click')

        getFormError('title')
            .should('have.length', 0)

        getItem()
            .should('have.length', 2)
            .last()
            .should('have.text', text)

        getFormInput('title')
            .should('have.text', '')
    })

    function getItem() {
        return cy.get('.todos__item')
    }
})
