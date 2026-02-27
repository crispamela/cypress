import Login from '../pages/login'
import inventory from '../pages/inventory'
describe('login', () => {

  beforeEach(() => {
    Login.visitarPagina ()
  })
it ('Realizar login com sucesso', () => {
    //act
    Login.preencherCredenciaisValidas()

    inventory.validarAcessoAPagina()

    it.only('Realizar login informando credenciais inválidas', () => {
      //act
      Login.preencherCredenciaisInvalidas()

    cy.screenshot ('erro credenciais inválidas')
    //assert
    Login.validarErroCredenciais()

})
})
})