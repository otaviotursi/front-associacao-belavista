export class UsuarioRequest{
    nome: string = "";
    senha: string = "";

    constructor(
        nome: string,
        senha: string,
        ){

        this.nome = nome;
        this.senha = senha;
    }
}

