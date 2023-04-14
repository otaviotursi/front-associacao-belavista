import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { BackAcoesEventosPublicosService } from '../back-acoes-eventos-publicos.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EventosPublicos } from 'src/app/Model/EventosPublicos';

@Component({
  selector: 'app-eventos-publicos',
  templateUrl: './eventos-publicos.component.html',
  styleUrls: ['./eventos-publicos.component.scss'],
})
export class EventosPublicosComponent implements OnInit {
  title = 'Buscar eventos da associação';
  datePipe: any;
  diaHoje: any;
  form: any;
  displayedColumns: string[] = [
    'id',
    'nomeEvento',
    'diaEvento',
    'HoraInicio',
    'HoraFim',
  ];
  dataListaEventos: MatTableDataSource<EventosPublicos>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private eventosPublicosService: BackAcoesEventosPublicosService
  ) {
    this.dataListaEventos = new MatTableDataSource();
    this.sort = new MatSort();
  }

  ngOnInit(): void {
    this.diaHoje = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.BuildForm();
  }
  BuildForm() {
    this.form = this.formBuilder.group({
      dataInicial: [this.diaHoje, Validators.required],
      dataFinal: [this.diaHoje, Validators.required],
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataListaEventos.filter = filterValue.trim().toLowerCase();

    if (this.dataListaEventos.paginator) {
      this.dataListaEventos.paginator.firstPage();
    }
  }

  VoltarPagina(): void {
    this.location.back();
  }

  BuscarTodosEventos(): void {
    this.eventosPublicosService.BuscarTodosEventos().subscribe((data) => {
      console.log(data);
      this.dataListaEventos = new MatTableDataSource(data);
      this.dataListaEventos.sort = this.sort;
      this.dataListaEventos.paginator = this.paginator;
    });
  }
}
