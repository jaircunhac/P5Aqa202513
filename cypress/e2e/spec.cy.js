describe('template spec', () => {
  it('passes', () => {
    // Lógica para a busca de um Jogo com conteúdo sensível na Steam
    cy.visit('https://store.steampowered.com')
    cy.get('#store_nav_search_term').click()
    cy.get('#store_nav_search_term').type('Helldivers 2')
    cy.get('#store_search_link > img').click()
    
    // cy.get('[href="https://store.steampowered.com/app/960090/Bloons_TD_6/?snr=1_7_7_151_150_1"] > .search_capsule > img').click()
    
    cy.get('[href="https://store.steampowered.com/app/553850/HELLDIVERS_2/?snr=1_7_7_151_150_1"] > .search_capsule > img').click()

    // Só se faz necessário caso o jogo possua restrição de idade
    cy.get('#ageDay').select('6')
    cy.get('#ageMonth').select('julho')
    cy.get('#ageYear').select('2005')
    cy.get('#view_product_page_btn > span').click()

    // Lógica para a busca de um Jogo sem conteúdo sensível na Steam
    
    // cy.get('#store_nav_search_term').click()
    // cy.get('#store_nav_search_term').type('Bloons TD 6')
    // cy.get('#store_search_link > img').click()
    // cy.get('[href="https://store.steampowered.com/app/960090/Bloons_TD_6/?snr=1_7_7_151_150_1"] > .search_capsule > img').click()
  })
})