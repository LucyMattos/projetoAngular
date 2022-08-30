import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  imagens: string = environment.imagensUrl;
  
  public produtos!: Produto[];
  errorMessage!: string;

  imagemProduto;
  public url: SafeResourceUrl;

  constructor(private produtoService: ProdutoService,
    public spinner: NgxSpinnerService,
    private sanitizer: DomSanitizer) { 

      this.imagemProduto = this.sanitizer.bypassSecurityTrustUrl("https://localhost:44321/125b7045-4a44-428c-be96-3c129ee57da4_codigo.jpg")
      
    }

  ngOnInit(): void {
    this.spinner.show();

    this.produtoService.obterTodos()
      .subscribe(
        produtos => this.produtos = produtos,
        error => this.errorMessage);

        setTimeout(() => {
          this.spinner.hide();
          }, 1000);
  }
}

