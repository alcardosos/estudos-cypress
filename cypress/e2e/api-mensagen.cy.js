describe('API Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjZjZjY2VjOS05YzRiLTQzYTktOTgxMy01ZmExOGUzMzhkNjUiLCJhZG9wdGVyTmFtZSI6IkFsYW4gQ2FyZG9zbyIsImlhdCI6MTcyOTg4NDYxNSwiZXhwIjoxNzMwMTQzODE1fQ.jvUkTdkS6vX2Mv_1dYDsDbV-zvK3zeGHDUBIWVNLr-g`

    it('Mensagem da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/cf6ccec9-9c4b-43a9-9813-5fa18e338d65',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })

    it.only('Nome do perfil', () => {
        cy.request({
            method: 'GET' ,
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/cf6ccec9-9c4b-43a9-9813-5fa18e338d65',
            headers: { authorization }
           
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('perfil')
            expect(res.body.perfil.nome).to.be.equal('Alan Cardoso')
        })
    })
})