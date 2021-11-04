describe('DevFinnance', () => {

    it('Adicionar uma nova transação de entrada', () => {
    
        //visitar a página
        cy.visit('https://devfinance-agilizei.netlify.app/#')
        var i=1;
        for(i<=1; i<=5; i++){
        //clicar, adicionar
        cy.get('a[onclick*=open]').click() //clica no link
        cy.get('#description').type('freela') //adiciona o texto "freela"
        cy.get('#amount').type('12') //adiciona o número "12"
        cy.get('#date').type('2021-11-03') //adiciona a data
        cy.contains('Button', 'Salvar').click() //clica no botão salvar
        }
        cy.wait(3000)
        cy.get('a[onclick*=open]').click() //clica no link
        cy.get('#description').type('Saída') //adiciona o texto "freela"
        cy.get('#amount').type('-30') //adiciona o valor "-30"
        cy.get('#date').type('2021-11-03') //adiciona a data
        cy.contains('Button', 'Salvar').click() //clica no botão salvar

        cy.wait(3000)

        cy.get('[onclick="Transaction.remove(5)"]').click() //clica no botão para deletar a saída

        cy.get('table tbody tr').should('have.length', 5) //faz um expect se há 5 linhas na tabela

    });
}); 