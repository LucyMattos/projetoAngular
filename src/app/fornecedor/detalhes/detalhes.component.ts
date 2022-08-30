import { Component } from '@angular/core';
import { Fornecedor } from '../models/fornecedor';

import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html'
})
export class DetalhesComponent  {
  
  imagens: string = environment.imagensUrl;
  fornecedor: Fornecedor = new Fornecedor();

  constructor(
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
   ) {

    this.fornecedor = this.route.snapshot.data ['fornecedor'];
  }
  
  ngOnInit(): void {

    this.spinner.show();


        setTimeout(() => {
        this.spinner.hide();
        }, 1000);
  }
}
