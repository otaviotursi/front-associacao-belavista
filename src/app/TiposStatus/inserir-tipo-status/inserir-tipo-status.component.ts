import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TipoStatusRequest } from 'src/app/Model/TipoStatus';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TiposStatusService } from '../tipos-status.service';

@Component({
  selector: 'app-inserir-tipo-status',
  templateUrl: './inserir-tipo-status.component.html',
  styleUrls: ['./inserir-tipo-status.component.scss']
})
export class InserirTipoStatusComponent implements OnInit {

  titulo = "Inserir Status";
  form?: any;

  constructor(private tipoStatusService: TiposStatusService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.BuildForm();
  }

  BuildForm(): void {
    this.form = this.formBuilder.group({
      nomeStatus: ['', Validators.required],
    });
  }

  InserirStatus(): void{
    var infosPreenchidas = this.form.value;
    var novoStatus = new TipoStatusRequest(infosPreenchidas.nomeStatus);
    this.tipoStatusService.InserirStatus(novoStatus).subscribe(response => this.openSnackBar(response?.mensagem, 'OK'));
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
