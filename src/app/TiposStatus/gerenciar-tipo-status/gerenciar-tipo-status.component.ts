import { AfterViewInit, Component, ViewChild, OnInit, Inject } from '@angular/core';

import { TipoStatusRequest, TipoStatusResponse } from 'src/app/Model/TipoStatus';
import { TiposStatusService } from '../tipos-status.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Location } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-gerenciar-tipo-status',
  templateUrl: './gerenciar-tipo-status.component.html',
  styleUrls: ['./gerenciar-tipo-status.component.scss']
})
export class GerenciarTipoStatusComponent implements OnInit {

  titulo = "Lista de Tipos de Status";
  displayedColumns: string[] = ['id', 'status'];
  listaTipoStatus: MatTableDataSource<TipoStatusResponse>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  idSelecionado:number = 0;

  constructor(private tipoStatusService: TiposStatusService, private location: Location, public dialog: MatDialog) {
    this.listaTipoStatus = new MatTableDataSource();
   }
  
  ngAfterViewInit() {
  }

  ngOnInit(): void {
    this.SelecionarTodosTiposStatus();
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listaTipoStatus.filter = filterValue.trim().toLowerCase();

    if (this.listaTipoStatus.paginator) {
      this.listaTipoStatus.paginator.firstPage();
    }
  }

  SelecionarTodosTiposStatus(): void{
    this.tipoStatusService.SelecionarTodosTiposStatus().subscribe( data => {
      console.log(data);
      this.listaTipoStatus = new MatTableDataSource(data);
      this.listaTipoStatus.sort = this.sort;
      this.listaTipoStatus.paginator = this.paginator;
    }
    );
  }
  InserirTiposStatusDialog():void{
    const dialogRef = this.dialog.open(InserirTiposStatusDialog, {
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      this.SelecionarTodosTiposStatus();
    });
  }
  
  ExcluirTiposStatusDialog(id?: number):void{
    var item = id == null || undefined  ? this.idSelecionado : id; 
    console.log('item', item);
    const dialogRef = this.dialog.open(ExcluirTiposStatusDialog, {
      data: item,
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      this.SelecionarTodosTiposStatus();
    });
  }
  
  VoltarPagina(): void {
    this.location.back();
  }


}

@Component({
  selector: 'inserir-tipo-status-dialog',
  templateUrl: 'inserir-tipo-status-dialog.html',
})
export class InserirTiposStatusDialog {
  constructor(
    public dialogRef: MatDialogRef<InserirTiposStatusDialog>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'excluir-tipos-status-dialog',
  templateUrl: 'excluir-tipos-status-dialog.html',
})
export class ExcluirTiposStatusDialog {
  constructor(
    public dialogRef: MatDialogRef<ExcluirTiposStatusDialog>,
    @Inject(MAT_DIALOG_DATA) public data: number,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}