import { Component, OnInit, ViewChild } from '@angular/core';
import { BancoIdeiasService } from '../banco-ideias.service';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IdeiasResponse } from 'src/app/Model/Ideias';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Location } from '@angular/common';

@Component({
  selector: 'app-banco-ideias',
  templateUrl: './banco-ideias.component.html',
  styleUrls: ['./banco-ideias.component.scss']
})
export class BancoIdeiasComponent implements OnInit {

  titulo = 'Lista do banco de ideias';
  displayedColumns: string[] = [
    'id',
    'nome',
    'email',
    'descricao',
  ];
  listaIdeias: MatTableDataSource<IdeiasResponse>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  form?: any;
  
  constructor(private bancoIdeiasService: BancoIdeiasService, private location: Location, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
    
    this.listaIdeias = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.BuildForm();
  }

  BuildForm(): void {
    this.form = this.formBuilder.group({
    });
  }


  SelecionarIdeias(){
    this.bancoIdeiasService.BuscarIdeias().subscribe(response => {
      this.listaIdeias = new MatTableDataSource(response);
      this.listaIdeias.sort = this.sort;
      this.listaIdeias.paginator = this.paginator;
      this.openSnackBar("Ideias encontradas", 'OK')});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listaIdeias.filter = filterValue.trim().toLowerCase();

    if (this.listaIdeias.paginator) {
      this.listaIdeias.paginator.firstPage();
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  VoltarPagina(): void {
    this.location.back();
  }
}
