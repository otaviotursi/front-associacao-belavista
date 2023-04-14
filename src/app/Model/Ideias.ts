export class IdeiasRequest{
    nome: string = "";
    descricao: string = "";
    email: string = "";

    constructor(
        nome: string,
        descricao: string,
        email: string
        ){

        this.nome = nome;
        this.descricao = descricao;
        this.email = email;
    }
}
export class IdeiasResponse{
    id: number = 0;
    nome: string = "";
    descricao: string = "";
    email: string = "";

}