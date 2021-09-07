/// <reference types="cypress" />

const uuid = () => Cypress._.random(0, 50)
const id = uuid()
const testname = `testname${id}`;


context('Teste Celcoin - QA', () =>{


    describe('CT01 - Criando uma conta de usuário', ()=>{
         
         it('Acessar o site',()=>{
             cy.visit(Cypress.env('url'))
         })
 
         it('Acessar aba criar conta',()=>{
             cy.get('.login').click()
             cy.get('#email_create')
             .type(id + Cypress.env('email'))
             .should('have.value',id+Cypress.env('email'))
             cy.get('#SubmitCreate > span').click()
         })
 
         it('Cadastro dados pessoais',()=>{
             cy.get('#id_gender1').click()
             cy.get('#customer_firstname').type('Anthony')
             cy.get('#customer_lastname').type('Moreira')
             cy.get('#passwd').type('12345')
             .should('have.value','12345')
             cy.wait(2000)
             cy.get('#days').select('14')
             .should('have.value','14')
             cy.get('#months').select('May')
             cy.get('#years').select('1992')
 
         })
 
         it('Cadastro de endereço,',()=>{
             cy.get('#firstname').should('have.value','Anthony')
             cy.get('#lastname').should('have.value','Moreira')
             cy.get('#company').type('Teste').should('have.value','Teste')
             cy.get('#address1').type('Rua teste 151, bairro centro').should('have.value','Rua teste 151, bairro centro')
             cy.get('#city').type('Fortaleza').should('have.value','Fortaleza')
             cy.get('#id_state').select('Kansas')
             cy.get('#postcode').type('00000')
             cy.get('#phone_mobile').type('859823121')
             cy.get('#alias').should('have.value','My address')
             cy.get('#submitAccount > span').click()
             cy.wait(3000)
             cy.get('.logout').click()
         })
 
     }) 
     
     describe('CT02 - Logar na conta', ()=>{
         
         it('Acessar pagina de login',() =>{
           //  cy.get('.login').click()
             cy.get('#email').type(Cypress.env('email_2'))
             cy.get('#passwd').type(Cypress.env('senha'))
             cy.get('#SubmitLogin > span').click()
             
 
         })
     }) 
 
     describe('CT03 - Escolher um produto e colocar no carrinho', ()=>{
         it('Escolher um produto e validar',()=>{
             cy.get('.sf-menu > :nth-child(3) > a').click()
             cy.get('.ajax_add_to_cart_button > span').click()
             cy.wait(1000)
             cy.get('.continue > span').click()
             cy.get('.button-container > .button-medium > span').click()
             cy.get('.cart_description > .product-name > a').should('have.text','Faded Short Sleeve T-shirts')
         })
         
     }) 
     
 })