/// <reference types="cypress" />

var id = 'test' + makeid(5) + '@test.com'

class SignUp {

    fillTheForm(name, lastName, mail, pass) {
        cy  .getByPlaceholder("Required - Name").type(name)
            .getByPlaceholder("Required - Last name").type(lastName)
            .getByPlaceholder("Required - Email").type(id)
            .getByPlaceholder("Required -Enter email one more time").type(mail)
            .getByPlaceholder("Required - Password").type(pass)
        cy.fillForm()
    }

}


function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export default SignUp

export { id };