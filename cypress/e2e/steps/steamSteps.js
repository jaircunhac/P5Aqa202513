/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que o usuário acessa o site da Steam Store", () => {
  cy.visit("https://store.steampowered.com/?l=english");
  cy.get("body").should("be.visible");
});

When("ele digita {string} na barra de busca", (texto) => {
  cy.get("#store_nav_search_term").clear().type(texto);
});

When("clica no botão de buscar", () => {
  cy.get("#store_search_link > img").click();
});

Then("os resultados devem conter jogos relacionados a {string}", (jogo) => {
  cy.get(".search_result_row").should("contain.text", jogo);
});

When("busca por {string}", (jogo) => {
  cy.get("#store_nav_search_term").clear().type(jogo);
  cy.get("#store_search_link > img").click();
});

When("ele clica no jogo {string}", (jogo) => {
  cy.get(".search_result_row").contains(jogo).click();
});

Then("ele deve ser redirecionado para a página com os detalhes do jogo", () => {
  cy.get('body').then(($body) => {
    if ($body.find('#ageDay').length > 0) {
      cy.get('#ageDay').select('6')
      cy.get('#ageMonth').select('July')
      cy.get('#ageYear').select('2005')
      cy.get('#view_product_page_btn > span').click()
    }
  });
  cy.url().should("include", "/app/");
});

And("o nome do jogo {string} deve estar visível na página", (jogo) => {
  cy.get('#appHubAppName').should('be.visible').and('contain.text', jogo);
})

And("deve visualizar o botão de adicionar ao carrinho e clicar nele", () => {
  cy.contains("button, a", /Add.*Cart/i).should("exist").click()
});

And("deve visualizar o botão de ver o carrinho e clicar nele", () => {
  cy.contains("button, a", /View.*My Cart/i).should("exist").click();
});

Then("o usuário deve visualizar o carrinho", () => {
  cy.url().should("include", "/cart");
})

Then("deve ser exibida uma mensagem ou nenhum resultado encontrado", () => {
  cy.get(".search_results_count").should("contain.text", "0 results");
});

When("ele clica em {string}", (menu) => {
  cy.contains("a", menu).click({ force: true });
});

Then("deve visualizar uma lista de jogos mais vendidos", () => {
  cy.get('h2.pageheader.full').contains(/top sellers/i).should('be.visible')
  cy.get('#search_resultsRows').should('exist');
});

When("ele muda o idioma para {string}", (idioma) => {
  cy.get("#language_pulldown").click();
  cy.contains("a", idioma).click({ force: true });
});

Then("o conteúdo do site deve ser exibido em portugues", () => {
  cy.get('a.menuitem.supernav.supernav_active').should('contain.text', 'LOJA')
  cy.get('a.menuitem.supernav').should('contain.text', 'COMUNIDADE');
});
