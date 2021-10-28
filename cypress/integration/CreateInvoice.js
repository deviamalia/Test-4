import createInvoiceProcess from '../integration/CreateInvoiceProcess'
// import data from '../fixtures/testData.json'

const create = new createInvoiceProcess;
const data = '../fixtures/testData.json';

describe('user can create invoice penjualan', () => {
   it('user logged in on website', () => {
    cy.fixture('testdata').then((data) => {
        cy.visit('https://www.paper.id/webappv1/#/login');
        create.inputEmail(data.email);
        create.selectLoginButton();
        create.inputPassword(data.password);
        create.selectConfirmPassword();
        create.selectPenjualanMenu();
        create.selectInvoicePenjualanSubMenu();
    })
   })
})