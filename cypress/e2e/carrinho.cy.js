import login from '../pages/login'
import inventory from '../pages/inventory'
import Header from '../pages/header'
import Cart from '../pages/cart'

describe('Carrinho', () => {
    beforeEach (() =>{
    cy.visit('https://saucedemo.com/')
    
    login.visitarPagina()
    login.preencherCredenciaisValidas()

    })
    it('Adicionar produto ao carrinho com sucesso',() => {
    
    const qtdItensAdicionados = 1
    inventory.adicionarProduto('Sauce Labs Backpack')

    Header.validarQueCarrinhoPossuiItens(qtdItensAdicionados)

    Header.navegarParaCarrinho()

    Cart.ValidarProdutoPresenteNoCarrinho('Sauce Labs Backpack')


    })
    it('Remover produto do carrinho com sucesso', () => {
        
    inventory.adicionarProduto('Sauce Labs Backpack')

    //act

    inventory.removerProduto('Sauce Labs Backpack')
    
    Header.validarQueCarrinhoNaoPossuiItens()
    })
})