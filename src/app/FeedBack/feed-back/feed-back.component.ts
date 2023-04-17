import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FeedBackResponse } from 'src/app/Model/Feedback';
import { FeedBackService } from '../feed-back.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.scss']
})
export class FeedBackComponent implements OnInit {

  titulo = 'Lista de FeedBack';
  displayedColumns: string[] = [
    'id',
    'data',
    'nome',
    'nota',
    'descricao',
  ];
  listaFeedBack: MatTableDataSource<FeedBackResponse>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private feedBackService: FeedBackService, private location: Location, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
    
    this.listaFeedBack = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.SelecionarFeedBack()
  }

  SelecionarFeedBack(){
    this.feedBackService.BuscarFeedBack().subscribe(response => {
      this.listaFeedBack = new MatTableDataSource(response);
      this.listaFeedBack.sort = this.sort;
      this.listaFeedBack.paginator = this.paginator;
      this.openSnackBar("FeedBack encontrados", 'OK')});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listaFeedBack.filter = filterValue.trim().toLowerCase();

    if (this.listaFeedBack.paginator) {
      this.listaFeedBack.paginator.firstPage();
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  VoltarPagina(): void {
    this.location.back();
  }
}
