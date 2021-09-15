const conexao = require('../infraestrutura/conexao')



class Servico {
    adiciona(servicos) {
        const sql = 'INSERT INTO Servicos SET ?'

        conexao.query(sql, servicos, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
            
        })
    }
}

module.exports = new Servico