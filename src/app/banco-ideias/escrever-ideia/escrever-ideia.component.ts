import { Component, OnInit } from '@angular/core';
import { BancoIdeiasService } from '../banco-ideias.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IdeiasRequest } from 'src/app/Model/Ideias';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-escrever-ideia',
  templateUrl: './escrever-ideia.component.html',
  styleUrls: ['./escrever-ideia.component.scss']
})
export class EscreverIdeiaComponent implements OnInit {
  titulo = "Escreva a sua ideia para nós";

  form?: any;

  constructor(private bancoIdeiasService: BancoIdeiasService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.BuildForm();
  }

  BuildForm(): void {
    this.form = this.formBuilder.group({
      nomePessoa: [''],
      descIdeias: ['', Validators.required],
      emailPessoa: [''],
    });
  }

  InserirIdeias(){
    var ideias = new IdeiasRequest(this.form.value.nomePessoa, this.form.value.descIdeias, this.form.value.emailPessoa);
    this.bancoIdeiasService.InserirIdeias(ideias).subscribe(response => this.openSnackBar(response, 'OK'));
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
