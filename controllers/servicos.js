const Servico = require('../models/servicos')

module.exports = app => {

    app.get('/servicos', (req, res) => res.send('Você está na rota de serviços e está realizando um GET'))

    app.post('/servicos', (req, res) => {
        const servicos = req.body

        Servico.adiciona(servicos)
        res.send('Post serviços')
    })
     
}




