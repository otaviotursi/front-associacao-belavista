import { AfterViewInit, Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { UserService } from './services/user.service';
import { GerenciarLoginService } from './Usuario/gerenciar-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'associacao-belavista';
  constructor(
    library: FaIconLibrary,
    private userService: UserService,
    private gerenciarLoginService: GerenciarLoginService
  ) {
    library.addIcons(faBars);
  }

  ngAfterViewInit(): void {
    this.LiberarPermissoes();
  }

  VerificarAcessoUsuario() {
    let usuario = this.userService.exists();
    if (usuario != null) {
      return this.gerenciarLoginService.VerificarPermissao(usuario);
    }
    var listaVazia = new Array<number>();
    return listaVazia;
  }

  LiberarPermissoes() {
    console.log('LiberarPermissoes: ' + this.userService.exists());
    let elements = document.getElementsByName('libera-funcao');

    for (var i = 0; i < elements.length; i++) {
      var div = elements[i];
      div.hidden = true;

      // div.setAttribute('style', 'visibility: hidden;');
    }

    if (this.userService.exists() || this.userService.exists() != null) {
      let listaPermissao = this.VerificarAcessoUsuario();
      // listaPermissao = [1]; //se descomentar, vai deixar por padrão invisivel
      listaPermissao.forEach((element) => {
        if (element == 1) {
          //tipo admin

          let elements = document.getElementsByName('libera-funcao');

          for (var i = 0; i < elements.length; i++) {
            var div = elements[i];
            div.hidden = false;
            // div.setAttribute('style', 'visibility: visible;');
          }
        }
      });
    }
  }
}
