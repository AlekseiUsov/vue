
describe("My First Test", () => {
  it("visit site", () => {
    cy.visit("https://lerinskaya.github.io/VueJS-TodoApp/");
  });

  it("correct header", () => {
    cy.contains('h1', 'to do list')
  });

  it('create some tasks add clear input', () => {
    cy.get('input[type="text"]')
      .type('task 1').should('have.value', 'task 1');

    cy.get('input[type="text"]')
      .type('{enter}')
      .should('have.value', '')

    cy.get('input[type="text"]')
      .type('task 2').should('have.value', 'task 2');

    cy.get('input[type="text"]')
      .type('{enter}').should('have.value', '')

    cy.get('input[type="text"]')
      .type('task 3').should('have.value', 'task 3');

    cy.get('input[type="text"]')
      .type('{enter}').should('have.value', '')

    cy.get('input[type="text"]')
      .type('task 4').should('have.value', 'task 4');

    cy.get('input[type="text"]')
      .type('{enter}').should('have.value', '')
  });

  it("delete a task ", () => {
    cy.get('[data-cy="delete"]').eq(3).click()
    cy.get('[data-cy="delete"]').should('have.length', 3)
  });

  it("check checkbox ", () => {
    cy.get('input[type="checkbox"]').eq(1).click({ force: true })
    cy.get('input[type="checkbox"]').eq(1).should('have.checked')
  });


  it("test footer tabs", () => {
    cy.get('[data-cy="tab__title"]').eq(1).click()
    cy.get('[data-cy="tab__title"]').eq(1).contains('Active')
    cy.get('[data-cy="task__title"]').should('have.length', 2)

    cy.get('[data-cy="tab__title"]').eq(2).click()
    cy.get('[data-cy="tab__title"]').eq(2).contains('Completed')
    cy.get('[data-cy="task__title"]').should('have.length', 1)

    cy.get('[data-cy="tab__title"]').eq(0).click()
    cy.get('[data-cy="tab__title"]').eq(0).contains('All')
    cy.get('[data-cy="task__title"]').should('have.length', 3)
  });


  it("test footer tabs", () => {
    cy.get('footer p').contains('2/3 left')

    cy.get('input[type="text"]')
      .type('task 4').should('have.value', 'task 4');

    cy.get('input[type="text"]')
      .type('{enter}')
      .should('have.value', '')

    cy.get('footer p').contains('3/4 left')

    cy.get('input[type="checkbox"]').eq(2).click({ force: true })
    cy.get('footer p').contains('2/4 left')
  });





});