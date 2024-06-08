describe('Cypress Test',() => {
  it ('unsuccesful login test(Password error)',() => {
    cy.fixture('login').then(data => {
        cy.log('Переxод на страницу авторизации')
        cy.visit(data.main_url)

        cy.log('Ввод существующего логина')
        cy.get('.form-input--text')
            .type(data.Studentlogin)
            

        cy.log('Ввод password')
        cy.get('.form-input--password')
            .type(data.pass)

          cy.wait(3000)
        cy.log('Клик по кнопке "Войти')
        cy.get('.form__buttons > :nth-child(3)')
            .click()
            
        cy.log('Ошибка')
        cy.get('.form-error > span')
            .should('exist')
    })
})
})