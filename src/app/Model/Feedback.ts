export class FeedBackRequest{
    nome: string = "";
    descricao: string = "";
    nota: number = 0;
    data?: Date;

    constructor(
        nome: string,
        descricao: string,
        nota: number,
        data: Date,
        ){

        this.nome = nome;
        this.descricao = descricao;
        this.nota = nota;
        this.data = data;
    }
}
export class FeedBackResponse{
    id: number = 0;
    nome: string = "";
    descricao: string = "";
    nota: number = 0;
    data?: string = "";
}