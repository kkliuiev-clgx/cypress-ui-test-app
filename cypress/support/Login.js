/* eslint-disable prettier/prettier */
Cypress.Commands.add('login', (username = 'Snow', password = '12345Qwert!', type = "LOGIN") => {
  cy.request({
    method: "POST",
    url: "http://localhost:3001/login",
    headers: {
      "Set-cookie": "connect.sid=s:auevEiRaZ_w2VN8AMSKObxptVhPuk5Ls.BfYbCjAgcgXzkiOwLtTp7loqrZa5ClA4NwdI8nLtv1g; Path=/; HttpOnly"
    },
  })
   cy.visit('/')
});
