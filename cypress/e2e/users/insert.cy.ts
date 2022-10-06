import {getFormInput, getFormError, getError} from '../getElements'

describe('Users', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/register')
        cy.wait(1000)

        getError()
            .should('have.length', 0)
    })

    it('insert empty', () => {
        cy.get('button')
            .trigger('click')

        getFormError('nickname')
            .should('have.text', 'Value is required')
        getFormError('email')
            .should('have.text', 'Value is required')
        getFormError('password')
            .should('have.text', 'Value is required')
    })

    it('insert with email error and password error', () => {
        getFormInput('nickname')
            .type('max_norin')
        getFormInput('email')
            .type('1234')
        getFormInput('password')
            .type('1234')

        cy.get('button')
            .trigger('click')

        getFormError('nickname')
            .should('have.length', 0)
        getFormError('email')
            .should('have.text', 'Value is not a valid email address')
        getFormError('password')
            .should('have.text', 'This field should be at least 8 characters long')
    })

    it('insert success', () => {
        getFormInput('nickname')
            .type('max_norin')
        getFormInput('email')
            .type('79068976350@yandex.ru')
        getFormInput('password')
            .type('12345678')

        cy.get('button')
            .trigger('click')

        getFormError('nickname')
            .should('have.length', 0)
        getFormError('email')
            .should('have.length', 0)
        getFormError('password')
            .should('have.length', 0)
    })
})
