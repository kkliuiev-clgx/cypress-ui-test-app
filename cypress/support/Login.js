/* eslint-disable prettier/prettier */
Cypress.Commands.add('login', (username = 'Snow', password = '12345Qwert!', type = "LOGIN") => {
  cy.request({
    method: "POST",
    url: "http://localhost:3001/login",
    body: {
      "username": username,
      "password": password,
    },
  }).then((resp) => {
    window.localStorage.setItem("connect.sid", resp.Cookies);
  });
});
