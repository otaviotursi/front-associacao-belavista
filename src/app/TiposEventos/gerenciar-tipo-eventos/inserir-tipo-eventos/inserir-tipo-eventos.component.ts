import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TiposEventosService } from '../../tipos-eventos.service';
import { TipoEventoRequest } from 'src/app/Model/TipoEvento';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TipoStatusResponse } from 'src/app/Model/TipoStatus';
import { TiposStatusService } from 'src/app/TiposStatus/tipos-status.service';

@Component({
  selector: 'app-inserir-tipo-eventos',
  templateUrl: './inserir-tipo-eventos.component.html',
  styleUrls: ['./inserir-tipo-eventos.component.scss']
})
export class InserirTipoEventosComponent implements OnInit {

  titulo = "Inserir Evento";
  form?: any;
  listaTipoStatus!: TipoStatusResponse[];

  constructor(private tipoEventosService: TiposEventosService, private tipoStatusService: TiposStatusService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.BuildForm();
  }

  BuildForm(): void {
    this.form = this.formBuilder.group({
      nomeEvento: ['', Validators.required],
      tipoStatus: ['', Validators.required],
    });
  }
  
  BuscarStatusPorId(){
    
    this.tipoStatusService.SelecionarTodosTiposStatus().subscribe( data => {
      console.log(data);
      this.listaTipoStatus = data;
    }
    );
  }

  InserirEvento(): void{
    var infosPreenchidas = this.form.value;
    var novoEvento = new TipoEventoRequest(infosPreenchidas.nomeEvento,infosPreenchidas.tipoStatus );
    this.tipoEventosService.InserirEvento(novoEvento).subscribe(response => this.openSnackBar(response, 'OK'));
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
