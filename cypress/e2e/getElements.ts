export function getFormInput(prop: string) {
    return cy.get(`input[name="${prop}"]`)
}

export function getFormError(prop: string) {
    return getFormInput(prop).siblings(`[role="alert"]`)
}

export function getError(prop: string) {
    return cy.get(`[role="alert"]`)
}
