/// <reference types="cypress" />

import { id } from "./SignUp"

class LogIn {

    doLogin(pass) {
        cy.getByPlaceholder("Email").type(id)
            .getByPlaceholder("Password").type(pass)
        cy.access()
    }

}

export default LogIn