import { LocalStorageUtils } from './../utils/localstorage';
import { Injectable } from "@angular/core";
import { CanActivate, CanDeactivate, Router } from "@angular/router";
import { CadastroComponent } from './../conta/cadastro/cadastro.component';

@Injectable()
export class ContaGuard implements CanDeactivate <CadastroComponent>, CanActivate {

LocalStorageUtils = new LocalStorageUtils();

constructor ( private router: Router) {}

    canDeactivate (component: CadastroComponent) {
        if (component.mudancasNaoSalvas) {
            return window.confirm (' Realmente deseja sair do formulário ?')
        }
        return true
    }

    canActivate() {
        if (this.LocalStorageUtils.obterTokenUsuario()) {
            this.router.navigate (['/home']);
        }
        return true;
    }
        
    }
    