import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'fornecedor-app-root',
  template: '<router-outlet></router-outlet>'
})
export class FornecedorAppComponent implements OnInit {

  constructor(   private router: Router,) {

  }
  ngOnInit(): void {
    this.router.navigate(['/fornecedores/listar-todos'])
  }
} 
