describe('Cypress Test',() => {
  it ('unsuccesful add role(wrong_year_to)',() => {
    cy.fixture('login').then(data => {
        cy.log('Переxод на страницу авторизации')
        cy.visit(data.main_url)

        cy.log('Ввод существующего логина')
        cy.get('.form-input--text')
            .type(data.login)
            

        cy.log('Ввод password')
        cy.get('.form-input--password')
            .type(data.passw)

          cy.wait(3000)
        cy.log('Клик по кнопке "Войти')
        cy.get('.form__buttons > :nth-child(3)')
            .click()

        cy.get('.page-nav__role-block > .button')
            .click()

        cy.get('.select-role-form > :nth-child(3)')
            .click()

        cy.get('.message-student > .button')
           .click()

        cy.get('.desktop-modal__content > .student-form > .choose-institution > :nth-child(1) > [data-v-40f88df4=""] > .search-input > div.search-input__field > .form-input--text')
          .type(data.coledge)
          .wait(1000)

        cy.get('.desktop-modal__content > .student-form > .choose-institution > :nth-child(1) > [data-v-40f88df4=""] > .search-input > div.search-input__wrapper-result > :nth-child(1)')
          .click()

        cy.get('.desktop-modal__content > .student-form > .choose-specialty > [data-v-0dbb9e5f=""] > .search-input > div.search-input__field > .form-input--text')
          .type(data.speciality)
          .wait(1000)

        cy.get('.desktop-modal__content > .student-form > .choose-specialty > [data-v-0dbb9e5f=""] > .search-input > div.search-input__wrapper-result > :nth-child(1)')
          .click()

        cy.get('.desktop-modal__content > .student-form > :nth-child(3) > .form-control--max > .form-input--text')
          .type(data.text)

        cy.get('.desktop-modal__content > .student-form > .student-form__courses > .courses-list > :nth-child(2)')
          .click()

        cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(1) > .form-control--max > .form-input--number')
          .type(data.from_year)

        cy.get('.desktop-modal__content > .student-form > .student-form__years > :nth-child(2) > .form-control--max > .form-input--number')
          .type(data.to_year_wrong)

        cy.get('.form-error > span')
          .should('exist')
          
        cy.get('.desktop-modal__content > .student-form > .button')
          .should('be.disabled')
    })
  })
})
