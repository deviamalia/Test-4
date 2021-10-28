class CreateInvoiceProcess {
getFieldEmail(){return cy.get('[data-cy=identifier]')};
getLoginButton(){return cy.get('[data-cy=submit]')};
getFieldPassword(){return cy.get('[data-cy=password]')};
getConfirmPassword(){return cy.xpath('//button[normalize-space()="Masuk"]')};
getPenjualanMenu(){return cy.get('#sales_purchase_container > :nth-child(1) > .side-bar-title')}
getInvoicePenjualanSubMenu(){return cy.get(':nth-child(2) > .dropdown-item > span')};

inputEmail(email){
    return this.getFieldEmail()
    .type(`${email}`)
};

selectLoginButton(){
    return this.getLoginButton()
    .click()
};

inputPassword(password){
    return this.getFieldPassword()
    .type(`${password}`)
};

selectConfirmPassword(){
    return this.getConfirmPassword()
    .click()
};

selectPenjualanMenu(){
    return this.getPenjualanMenu()
    .click()
};

selectInvoicePenjualanSubMenu(){
    return this.getInvoicePenjualanSubMenu()
    .click()
};

}
export default CreateInvoiceProcess;