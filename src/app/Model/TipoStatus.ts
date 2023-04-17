export class TipoStatusRequest{
    nome: string = "";

    constructor(
        nome: string,
        ){

        this.nome = nome;
    }
}
export class TipoStatusResponse{
    id: number = 0;
    nome: string = "";
}