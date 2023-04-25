import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Dict } from 'src/app/Model/Dict';
import { TiposEventosService } from 'src/app/TiposEventos/tipos-eventos.service';
import { BackAcoesEventosPublicosService } from '../../back-acoes-eventos-publicos.service';
import { TipoEventoResponse } from 'src/app/Model/TipoEvento';
import { DatePipe, Location } from '@angular/common';
import { EventosPublicosResponse } from 'src/app/Model/EventosPublicos';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-inserir-evento',
  templateUrl: './inserir-evento.component.html',
  styleUrls: ['./inserir-evento.component.scss'],
})
export class InserirEventoComponent implements OnInit {
  listaDiasDaSemana: Dict[] = [
    { chave: 1, valor: 'domingo' },
    { chave: 2, valor: 'Segunda-Feira' },
    { chave: 3, valor: 'Terça-Feira' },
    { chave: 4, valor: 'Quarta-Feira' },
    { chave: 5, valor: 'Quinta-Feira' },
    { chave: 6, valor: 'Sexta-Feira' },
    { chave: 7, valor: 'Sabado' },
  ];
  listaTipoEvento: TipoEventoResponse[];
  form!: any;
  diaInicio: any;
  diaFim: any;
  titulo = 'Inserir evento';
  datePipe = new DatePipe('en-US');

  constructor(
    private formBuilder: FormBuilder,
    private eventosPublicosService: BackAcoesEventosPublicosService,
    private tipoEventoService: TiposEventosService,
    private _snackBar: MatSnackBar
  ) {
    this.listaTipoEvento = new Array();
  }

  ngOnInit(): void {
    var dataFim = new Date();
    dataFim.setDate(dataFim.getDate() + 30);
    this.diaInicio = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.diaFim = this.datePipe.transform(dataFim, 'yyyy-MM-dd');

    this.BuildForm();
  }

  BuildForm() {
    this.form = this.formBuilder.group({
      idTipoEvento: [0, Validators.required],
      idTipoSemana: ['', Validators.required],
      dataInicial: [this.diaInicio, Validators.required],
      dataFinal: [this.diaFim, Validators.required],
      horaInicio: ['', Validators.required],
      horaFim: ['', Validators.required],
    });
  }

  BuscarTipoEventos() {
    this.tipoEventoService.SelecionarTodosTiposEventos().subscribe((data) => {
      this.listaTipoEvento = data;
    });
  }
  InserirEvento() {
    var dados = new EventosPublicosResponse();
    dados.ID_TIPO_EVENTO = this.form.value.idTipoEvento;
    dados.ID_TIPO_SEMANA = this.form.value.idTipoSemana;
    dados.DIA_INICIO = this.form.value.dataInicial;
    dados.DIA_FIM = this.form.value.dataFinal;
    dados.HORA_INICIO = this.form.value.horaInicio;
    dados.HORA_FIM = this.form.value.horaFim;
    this.eventosPublicosService.InserirEvento(dados).subscribe((data) => {
      this.openSnackBar(data, 'OK');
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
