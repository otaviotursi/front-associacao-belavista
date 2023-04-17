import { Component, OnInit } from '@angular/core';
import { FeedBackService } from '../feed-back.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedBackRequest } from 'src/app/Model/Feedback';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Dict } from 'src/app/Model/Dict';

@Component({
  selector: 'app-escrever-feedback',
  templateUrl: './escrever-feedback.component.html',
  styleUrls: ['./escrever-feedback.component.scss']
})
export class EscreverFeedbackComponent implements OnInit {
  titulo = "Escreva o seu feedback para nós";

  form?: any;
  listaNota: Dict[] = [
    {chave: 0, valor: '0'},
    {chave: 1, valor: '1'},
    {chave: 2, valor: '2'},
    {chave: 3, valor: '3'},
    {chave: 4, valor: '4'},
    {chave: 5, valor: '5'},
    {chave: 6, valor: '6'},
    {chave: 7, valor: '7'},
    {chave: 8, valor: '8'},
    {chave: 9, valor: '9'},
    {chave: 10, valor: '10'},
  ];

  constructor(private feedBackService: FeedBackService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.BuildForm();
  }

  BuildForm(): void {
    this.form = this.formBuilder.group({
      nome: [''],
      data: ['', Validators.required],
      nota: [0, Validators.required],
      descricao: ['', Validators.required],
    });
  }

  InserirFeedback(){
    var feedback = new FeedBackRequest(this.form.value.nome, this.form.value.descricao, this.form.value.nota, this.form.value.data);
    this.feedBackService.InserirFeedBack(feedback).subscribe(response => this.openSnackBar(response, 'OK'));
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
