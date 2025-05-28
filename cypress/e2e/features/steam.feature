Feature: Interações básicas com a Steam Store

  Scenario: Buscar um jogo pelo nome
    Given que o usuário acessa o site da Steam Store
    When ele digita "HELLDIVERS™ 2" na barra de busca
    And clica no botão de buscar
    Then os resultados devem conter jogos relacionados a "HELLDIVERS™ 2"

  Scenario: Adicionar um jogo ao carrinho
    Given que o usuário acessa o site da Steam Store
    And busca por "Dark Souls:Remastered"
    When ele clica em um jogo da lista
    Then ele deve ser redirecionado para a página com os detalhes do jogo
    And deve visualizar o título do jogo e um botão de adicionar ao carrinho, clicar no botão de adicionar ao carrinho e depois ver o carrinho

   Scenario: Buscar por um jogo inexistente
    Given que o usuário acessa o site da Steam Store
    When ele digita "jogoInexistente123" na barra de busca
    And clica no botão de buscar
    Then deve ser exibida uma mensagem ou nenhum resultado encontrado

  Scenario: Navegar até a aba de jogos mais vendidos
    Given que o usuário acessa o site da Steam Store
    When ele clica em "Top Sellers"
    Then deve visualizar uma lista de jogos mais vendidos

  Scenario: Alterar o idioma do site
    Given que o usuário acessa o site da Steam Store
    When ele muda o idioma para "Português - Brasil"
    Then o conteúdo do site deve ser exibido em português