import { Component, OnInit} from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'produto-app-root',
  template: '<router-outlet></router-outlet>'
})
export class ProdutoAppComponent implements OnInit {  
  constructor(   private router: Router,) {

  }
  ngOnInit(): void {
    this.router.navigate(['/produtos/listar-todos'])
  }
}
