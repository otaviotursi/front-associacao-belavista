export class TipoStatusRequest{
    status: string = "";

    constructor(
        status: string,
        ){

        this.status = status;
    }
}
export class TipoStatusResponse{
    id: number = 0;
    status: string = "";
}