import { AfterViewInit, Component, ViewChild, OnInit, Inject } from '@angular/core';

import { TipoEventoRequest, TipoEventoResponse } from 'src/app/Model/TipoEvento';
import { TiposEventosService } from '../tipos-eventos.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Location } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-gerenciar-tipo-eventos',
  templateUrl: './gerenciar-tipo-eventos.component.html',
  styleUrls: ['./gerenciar-tipo-eventos.component.scss']
})
export class GerenciarTipoEventosComponent implements OnInit {

  titulo = "Lista de Tipos de eventos";
  displayedColumns: string[] = ['id', 'nomeEvento', 'status'];
  listaTipoEventos: MatTableDataSource<TipoEventoResponse>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  idSelecionado:number = 0;

  constructor(private tipoEventosService: TiposEventosService, private location: Location, public dialog: MatDialog) {
    this.listaTipoEventos = new MatTableDataSource();
   }
  
  ngAfterViewInit() {
  }

  ngOnInit(): void {
    this.SelecionarTodosTiposEventos();
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listaTipoEventos.filter = filterValue.trim().toLowerCase();

    if (this.listaTipoEventos.paginator) {
      this.listaTipoEventos.paginator.firstPage();
    }
  }

  SelecionarTodosTiposEventos(): void{
    this.tipoEventosService.SelecionarTodosTiposEventos().subscribe( data => {
      console.log(data);
      this.listaTipoEventos = new MatTableDataSource(data);
      this.listaTipoEventos.sort = this.sort;
      this.listaTipoEventos.paginator = this.paginator;
    }
    );
  }
  InserirTiposEventosDialog():void{
    const dialogRef = this.dialog.open(InserirTiposEventosDialog, {
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      this.SelecionarTodosTiposEventos();
    });
  }
  
  ExcluirTiposEventosDialog(id?: number):void{
    var item = id == null || undefined  ? this.idSelecionado : id; 
    console.log('item', item);
    const dialogRef = this.dialog.open(ExcluirTiposEventosDialog, {
      data: item,
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      this.SelecionarTodosTiposEventos();
    });
  }
  
  VoltarPagina(): void {
    this.location.back();
  }


}

@Component({
  selector: 'inserir-tipo-eventos-dialog',
  templateUrl: 'inserir-tipo-eventos-dialog.html',
})
export class InserirTiposEventosDialog {
  constructor(
    public dialogRef: MatDialogRef<InserirTiposEventosDialog>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'excluir-tipos-eventos-dialog',
  templateUrl: 'excluir-tipos-eventos-dialog.html',
})
export class ExcluirTiposEventosDialog {
  constructor(
    public dialogRef: MatDialogRef<ExcluirTiposEventosDialog>,
    @Inject(MAT_DIALOG_DATA) public data: number,

  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}