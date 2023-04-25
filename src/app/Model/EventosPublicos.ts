import { Time } from "@angular/common";

export class EventosPublicosResponse{
    id: number = 0;
    ID_TIPO_EVENTO: number = 0;
    ID_TIPO_SEMANA: number = 0;
    DIA_INICIO!: Date;
    DIA_FIM!: Date;
    HORA_INICIO!: Time;
    HORA_FIM!: Time;
}