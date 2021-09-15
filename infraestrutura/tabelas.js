class Tabelas {
    init(conexao) {
        console.log('Tabelas foram chamadas')
        this.conexao = conexao   ///passando para dentro do escopo


        this.criarAtendimentos()    ///criação das tabelas
        this.criarServicos()
    }

    /// formato = nome tipo
    criarAtendimentos() {
        const sql = `      
        CREATE TABLE IF NOT EXISTS Atendimentos
        (id int NOT NULL AUTO_INCREMENT,
        cliente varchar(50) NOT NULL, 
        pet varchar(20), 
        servico varchar(20) NOT NULL,
        data datetime NOT NULL,
        dataCriacao datetime NOT NULL,
        status varchar(20) NOT NULL, 
        observacoes text, PRIMARY KEY(id))
        `
        
        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela criada com sucesso.')
            }
        })
    }

    criarServicos() {
        const sql = `
        CREATE TABLE IF NOT EXISTS Servicos
        (id int NOT NULL AUTO_INCREMENT,
        nome varchar(50) NOT NULL,
        preco int NOT NULL, PRIMARY KEY(id))`

        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela SERVIÇOS criada com sucesso.')
            }
        })

    }

}

module.exports = new Tabelas 