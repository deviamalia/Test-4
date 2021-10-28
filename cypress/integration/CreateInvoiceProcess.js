class CreateInvoiceProcess {
getFieldEmail(){return cy.get('[data-cy=identifier]')};
getLoginButton(){return cy.get('[data-cy=submit]')};
getFieldPassword(){return cy.get('[data-cy=password]')};
getConfirmPassword(){return cy.xpath('//button[normalize-space()="Masuk"]')};
getPenjualanMenu(){return cy.get('#sales_purchase_container > :nth-child(1) > .side-bar-title')};
getInvoicePenjualanSubMenu(){return cy.get(':nth-child(2) > .dropdown-item > span')};
getCloseButton(){return cy.xpath('//*[@id="close-button"]')};
getButtonCreate(){return cy.get('.paper-button')};
getButtonInputInvoice(){return cy.get('#btn_product_list_modal')};
getProductCodeInvoice(){return cy.get('.p-datatable-tbody > tr.ng-tns-c344-29 > :nth-child(2)')};
getButtonSimpanProduct(){return cy.get('.footer-body > .green-button')};
getButtonSimpanInvoice(){return cy.get('div.ng-star-inserted > .btn-group > #single-button')};
getButtonSimpanDanKonfirmasi(){return cy.get('.btn-group > .dropdown-menu > :nth-child(2) > .dropdown-item')};

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

selectCloseButton(){
    return this.getCloseButton()
    .click({force: true})
};

selectCreateButton(){
    return this.getButtonCreate()
    .click({force: true})
};

selectButtonInputInvoice(){
    return this.getButtonInputInvoice()
    .click({force: true})
};

selectProductInvoice(){
    return this.getProductCodeInvoice()
    .click({force: true})
}

selectButtonSimpanProduct(){
    return this.getButtonSimpanProduct()
    .click({force: true})
};

selectButtonSimpanInvoice(){
    return this.getButtonSimpanInvoice()
    .click({force: true})
};

selectButtonSimpanDanKonfirmasi(){
    return this.getButtonSimpanDanKonfirmasi()
    .click({force: true})
};

}
export default CreateInvoiceProcess;