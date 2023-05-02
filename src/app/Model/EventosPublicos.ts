import { Time } from "@angular/common";

export class EventosPublicosResponse{
    id: number = 0;
    iD_TIPO_EVENTO: number = 0;
    iD_TIPO_SEMANA: number = 0;
    diA_INICIO!: string;
    diA_FIM!: string;
    horA_INICIO!: Date;
    horA_FIM!: Date;
}
export class EventosPublicosRequest{
    id: number = 0;
    iD_TIPO_EVENTO: number = 0;
    iD_TIPO_SEMANA: number = 0;
    diA_INICIO!: Date;
    diA_FIM!: Date;
    horA_INICIO!: Date;
    horA_FIM!: Date;
}