import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioRequest } from 'src/app/Model/UsuarioRequest';
import { GerenciarLoginService } from '../gerenciar-login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerencia-login',
  templateUrl: './gerencia-login.component.html',
  styleUrls: ['./gerencia-login.component.scss'],
})
export class GerenciaLoginComponent implements OnInit {
  titulo = 'Login para gerenciamento';
  habilitaLogin = false;
  form?: any;
  hide = true;
  constructor(
    private gerenciarLoginService: GerenciarLoginService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private userService: UserService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.BuildForm();
  }
  BuildForm(): void {
    this.form = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }
  AutenticarUsuario(): void {
    let usuario = this.form.value.usuario;
    let usuarioRequest = new UsuarioRequest(
      this.form.value.usuario,
      this.form.value.senha
    );

    this.gerenciarLoginService
      .AutenticarUsuario(usuarioRequest)
      .subscribe((response) => {
        console.log(response);
        if (response == true) {
          this.gerenciarLoginService
            .VerificarPermissao(usuario)
            .subscribe((response) => {
              console.log(response);
              this.userService.SalvarSessaoLogin(usuario);
              this.router.navigate(['']);
            });
        }
      });
  }
  
}
