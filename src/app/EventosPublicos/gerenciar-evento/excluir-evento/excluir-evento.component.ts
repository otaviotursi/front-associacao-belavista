import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BackAcoesEventosPublicosService } from '../../back-acoes-eventos-publicos.service';

@Component({
  selector: 'app-excluir-evento',
  templateUrl: './excluir-evento.component.html',
  styleUrls: ['./excluir-evento.component.scss']
})
export class ExcluirEventoComponent implements OnInit {

  titulo = "Excluir Tipo Evento";
  listaId!: number[];
  form?: any;
  @Input() id = 0; 

  constructor(private eventosService: BackAcoesEventosPublicosService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.BuildForm();
    this.CarregarService();
  }

  BuildForm(): void {
    this.form = this.formBuilder.group({
      idItem: [this.id, Validators.required],
    });
  }
  
  CarregarService():void{
    this.SelecionarTodosEventos();
  }
  
  SelecionarTodosEventos(): void{
    this.eventosService.BuscarTodosEventos().subscribe( data => {
      console.log('this.listaId', data);
      this.listaId = data.map(e => e.id); 
    }
    );
  }

  
  ExcluirEvento(): void{
    var infosPreenchidas = this.form.value;
    this.eventosService.ExcluirEvento(infosPreenchidas.idItem).subscribe(response => this.openSnackBar(response?.mensagem, 'OK'));
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
