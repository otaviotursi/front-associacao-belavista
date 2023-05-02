import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TiposEventosService } from '../../tipos-eventos.service';

@Component({
  selector: 'app-excluir-tipo-evento',
  templateUrl: './excluir-tipo-evento.component.html',
  styleUrls: ['./excluir-tipo-evento.component.scss']
})
export class ExcluirTipoEventoComponent implements OnInit {

  titulo = "Excluir Tipo Evento";
  listaId!: number[];
  form?: any;
  @Input() id = 0; 

  constructor(private tipoEventosService: TiposEventosService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

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
    this.SelecionarTodosTiposEventos();
  }
  
  SelecionarTodosTiposEventos(): void{
    this.tipoEventosService.SelecionarTodosTiposEventos().subscribe( data => {
      console.log('this.listaId', data);
      this.listaId = data.map(e => e.id); 
    }
    );
  }

  
  ExcluirEvento(): void{
    var infosPreenchidas = this.form.value;
    this.tipoEventosService.ExcluirEvento(infosPreenchidas.idItem).subscribe(response => this.openSnackBar(response?.mensagem, 'OK'));
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
