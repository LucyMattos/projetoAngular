import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../services/fornecedor.service';
import { Fornecedor } from '../models/fornecedor';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  public fornecedores!: Fornecedor[];
  errorMessage!: string;

  constructor(private fornecedorService: FornecedorService,
    public spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    this.spinner.show();

    this.fornecedorService.obterTodos()
      .subscribe(
        fornecedores => this.fornecedores = fornecedores,
        error => this.errorMessage);

        setTimeout(() => {
        this.spinner.hide();
        }, 1000);
  }
  
}
