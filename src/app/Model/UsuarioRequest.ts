export class UsuarioRequest{
    login: string = "";
    senha: string = "";

    constructor(
        login: string,
        senha: string,
        ){

        this.login = login;
        this.senha = senha;
    }
}

