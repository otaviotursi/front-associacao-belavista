import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EventosPublicosResponse } from 'src/app/Model/EventosPublicos';
import { TipoEventoResponse } from 'src/app/Model/TipoEvento';
import { TiposEventosService } from 'src/app/TiposEventos/tipos-eventos.service';
import { BackAcoesEventosPublicosService } from '../back-acoes-eventos-publicos.service';
import { Location } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Dict } from 'src/app/Model/Dict';

@Component({
  selector: 'app-gerenciar-evento',
  templateUrl: './gerenciar-evento.component.html',
  styleUrls: ['./gerenciar-evento.component.scss'],
})
export class GerenciarEventoComponent implements OnInit {
  titulo = 'Gerenciar eventos da associação';
  datePipe: any;
  diaInicio: any;
  diaFim: any;
  form: any;
  listaTipoEvento: TipoEventoResponse[];
  idSelecionado:number = 0;

  displayedColumns: string[] = [
    'id',
    'evento',
    'diaSemana',
    'horaInicio',
    'horaFim',
    'Gerenciar',
  ];
  listaEventos: MatTableDataSource<EventosPublicosResponse>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private eventosPublicosService: BackAcoesEventosPublicosService,
    private tipoEventoService: TiposEventosService,
    public dialog: MatDialog
  ) {
    this.listaEventos = new MatTableDataSource();
    this.sort = new MatSort();
    this.listaTipoEvento = new Array();
  }

  ngOnInit(): void {
    var dataFim = new Date();
    dataFim.setDate(dataFim.getDate() + 30);
    this.diaInicio = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.diaFim = this.datePipe.transform(dataFim, 'yyyy-MM-dd');
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
    this.eventosPublicosService
      .BuscarTodosEventosPorData(this.diaInicio, this.diaFim)
      .subscribe((data) => {
        this.listaEventos = new MatTableDataSource(data);
        this.listaEventos.sort = this.sort;
        this.listaEventos.paginator = this.paginator;
      });
  }

  ObtemNomeDoEvento(idTipoEvento: number): string {
    let filtrado = this.listaTipoEvento.find((e) => e.id == idTipoEvento)?.nome;
    return filtrado == null ? '' : filtrado;
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

  InserirEventosDialog(): void {
    const dialogRef = this.dialog.open(InserirEventosDialog, {});

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      this.BuscarTipoEventos();
    });
  }

  AlterarEventosDialog(id?: number): void {
    var item = id == null || undefined ? this.idSelecionado : id;
    console.log('item', item);
    const dialogRef = this.dialog.open(ExcluirEventosDialog, {
      data: item,
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      this.BuscarTipoEventos();
    });
  }
  ExcluirEventosDialog(id?: number): void {
    var item = id == null || undefined ? this.idSelecionado : id;
    console.log('item', item);
    const dialogRef = this.dialog.open(ExcluirEventosDialog, {
      data: item,
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      this.BuscarTipoEventos();
    });
  }
}

@Component({
  selector: 'inserir-eventos-dialog',
  templateUrl: 'inserir-eventos-dialog.html',
})
export class InserirEventosDialog {
  constructor(
    public dialogRef: MatDialogRef<InserirEventosDialog>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'excluir-eventos-dialog',
  templateUrl: 'excluir-eventos-dialog.html',
})
export class ExcluirEventosDialog {
  constructor(
    public dialogRef: MatDialogRef<ExcluirEventosDialog>,
    @Inject(MAT_DIALOG_DATA) public data: number,

  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'alterar-eventos-dialog',
  templateUrl: 'alterar-eventos-dialog.html',
})
export class AlterarEventosDialog {
  constructor(
    public dialogRef: MatDialogRef<AlterarEventosDialog>,
    @Inject(MAT_DIALOG_DATA) public data: number,

  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}