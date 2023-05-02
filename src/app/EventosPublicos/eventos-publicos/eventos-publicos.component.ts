import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe, Location } from '@angular/common';

import { FormBuilder, Validators } from '@angular/forms';
import { BackAcoesEventosPublicosService } from '../back-acoes-eventos-publicos.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EventosPublicosResponse } from 'src/app/Model/EventosPublicos';
import { TiposEventosService } from 'src/app/TiposEventos/tipos-eventos.service';
import { TipoEventoResponse } from 'src/app/Model/TipoEvento';

@Component({
  selector: 'app-eventos-publicos',
  templateUrl: './eventos-publicos.component.html',
  styleUrls: ['./eventos-publicos.component.scss'],
})
export class EventosPublicosComponent implements OnInit {
  titulo = 'Eventos da associação (próximos 30 dias)';
  datePipe = new DatePipe('en-US');

  diaInicio: any;
  diaFim: any;
  form: any;
  listaTipoEvento: TipoEventoResponse[];
  displayedColumns: string[] = [
    'id',
    'evento',
    'dataEvento',
    'diaSemana',
    'horaInicio',
    'horaFim',
  ];
  listaEventos: MatTableDataSource<EventosPublicosResponse>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private eventosPublicosService: BackAcoesEventosPublicosService,
    private tipoEventoService: TiposEventosService
  ) {
    this.listaEventos = new MatTableDataSource();
    this.sort = new MatSort();
    this.listaTipoEvento = new Array();
  }

  ngOnInit(): void {
    this.diaInicio = this.datePipe.transform(new Date(), 'yyyy-MM-dd', 'es-ES');

    var dataFim = new Date();
    dataFim.setDate(dataFim.getDate() + 30);
    this.diaFim = this.datePipe.transform(dataFim, 'yyyy-MM-dd', 'es-ES');

    this.BuildForm();
    this.BuscarTipoEventos();
    this.BuscarTodosEventos();
  }
  BuscarTipoEventos() {
    this.tipoEventoService.SelecionarTodosTiposEventos().subscribe((data) => {
      this.listaTipoEvento = data;
    });
  }
  BuildForm() {
    this.form = this.formBuilder.group({
      dataInicial: [this.diaInicio, Validators.required],
      dataFinal: [this.diaFim, Validators.required],
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listaEventos.filter = filterValue.trim().toLowerCase();

    if (this.listaEventos.paginator) {
      this.listaEventos.paginator.firstPage();
    }
  }

  VoltarPagina(): void {
    this.location.back();
  }

  BuscarTodosEventos(): void {
    this.eventosPublicosService.BuscarTodosEventosPorData(this.diaInicio, this.diaFim).subscribe((data) => {
      this.listaEventos = new MatTableDataSource(data);
      this.listaEventos.sort = this.sort;
      this.listaEventos.paginator = this.paginator;
    });
  }

  ObtemNomeDoEvento(idTipoEvento: number): string{
    let filtrado = this.listaTipoEvento.find(e => e.id == idTipoEvento)?.nome;
    return filtrado == null ? "" : filtrado;
  }

  ObtemDiaDaSemana(diaSemana: number): string {
    switch (diaSemana) {
      case 1:
        return 'Domingo';
      case 2:
        return 'Segunda-Feira';
      case 3:
        return 'Terça-Feira';
      case 4:
        return 'Quarta-Feira';
      case 5:
        return 'Quinta-Feira';
      case 6:
        return 'Sexta-Feira';
      case 7:
        return 'Sabado';
      default:
        return '';
    }
  }
}
