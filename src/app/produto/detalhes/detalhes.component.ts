import { Component } from '@angular/core';
import { Produto } from '../models/produto';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html'
})
export class DetalhesComponent {

  imagens: string = environment.imagensUrl;
  
  produto: Produto;

  constructor(private route: ActivatedRoute,
    public spinner: NgxSpinnerService,) {

    this.produto = this.route.snapshot.data['produto'];
  }

  ngOnInit(): void {
    this.spinner.show();

        setTimeout(() => {
          this.spinner.hide();
          }, 1000);
  }

}
