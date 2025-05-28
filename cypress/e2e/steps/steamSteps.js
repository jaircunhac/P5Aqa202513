/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que o usuário acessa o site da Steam Store", () => {
  cy.visit("https://store.steampowered.com/");
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

When("ele clica em um jogo da lista", () => {
  cy.get(".search_result_row").first().click();
});

Then("ele deve ser redirecionado para a página com os detalhes do jogo", () => {
  cy.url().should("include", "/app/");
});

Then("deve visualizar o título do jogo e um botão de adicionar ao carrinho, clicar no botão de adicionar ao carrinho e depois ver o carrinho", () => {
  cy.get(".apphub_AppName").should("be.visible");
  cy.contains("button, a", /Add.*Cart/i).should("exist").click()
  cy.contains("button, a", /View.*My Cart/i).should("exist").click();
});

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

Then("o conteúdo do site deve ser exibido em português", () => {
  cy.get('a.menuitem.supernav.supernav_active').should('contain.text', 'LOJA')
  cy.get('a.menuitem.supernav').should('contain.text', 'COMUNIDADE');
});
