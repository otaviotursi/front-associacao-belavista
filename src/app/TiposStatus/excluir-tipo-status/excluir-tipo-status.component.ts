import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TiposStatusService } from '../tipos-status.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-excluir-tipo-status',
  templateUrl: './excluir-tipo-status.component.html',
  styleUrls: ['./excluir-tipo-status.component.scss']
})
export class ExcluirTipoStatusComponent implements OnInit {

  titulo = "Excluir Tipo Status";
  listaId!: number[];
  form?: any;
  @Input() id = 0; 

  constructor(private tipoStatusService: TiposStatusService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

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
    this.SelecionarTodosTiposStatus();
  }
  
  SelecionarTodosTiposStatus(): void{
    this.tipoStatusService.SelecionarTodosTiposStatus().subscribe( data => {
      console.log('this.listaId', data);
      this.listaId = data.map(e => e.id); 
    }
    );
  }

  ExcluirStatus(): void{
    var infosPreenchidas = this.form.value;
    this.tipoStatusService.ExcluirStatus(infosPreenchidas.idItem).subscribe(response => this.openSnackBar(response, 'OK'));
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
