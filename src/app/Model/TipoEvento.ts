export class TipoEventoRequest{
    nome: string = "";
    status: string = "";

    constructor(
        nome: string,
        status: string,
        ){

        this.nome = nome;
        this.status = status;
    }
}
export class TipoEventoResponse{
    id: number = 0;
    nome: string = "";
    status: string = "";
}