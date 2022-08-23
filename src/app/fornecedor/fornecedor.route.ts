
import { FornecedorResolve } from './services/fornecedor.resolve';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FornecedorAppComponent } from './fornecedor.app.component';
import { NovoComponent } from './novo/novo.component';
import { ListaComponent } from './lista/lista.component';
import { EditarComponent } from './editar/editar.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { FornecedorGuard } from './services/fornecedor.guard';

const fornecedorRouterConfig: Routes = [
    {
        path: '', component: FornecedorAppComponent,
        children: [
            {
                path: 'listar-todos', component: ListaComponent,
            },
            {
                path: 'adicionar-novo', component: NovoComponent,
                canDeactivate: [FornecedorGuard],
                canActivate: [FornecedorGuard],
                data: [{ claim: { nome: 'Fornecedor', valor: 'Adicionar' } }]
            },
            {
                path: 'editar/:id', component: EditarComponent,
                resolve: { fornecedor: FornecedorResolve },
                canActivate: [FornecedorGuard],
                data: [{ claim: { nome: 'Fornecedor', valor: 'Atualizar' } }]
            },

            {
                path: 'detalhes/:id', component: DetalhesComponent, resolve: { fornecedor: FornecedorResolve }
            },
            {
                path: 'excluir/:id', component: ExcluirComponent,
                resolve: { fornecedor: FornecedorResolve },
                canActivate: [FornecedorGuard],
                data: [{ claim: { nome: 'Fornecedor', valor: 'Excluir' } }]
            },


            // {
            //     path: '', component: FornecedorAppComponent,
            //     children: [
            //         { path: 'listar-todos', component: ListaComponent },
            //         { path: 'adicionar-novo', component: NovoComponent },
            //         { path: 'editar/:id', component: EditarComponent },
            //         { path: 'detalhes/:id', component: DetalhesComponent },
            //         { path: 'excluir/:id', component: ExcluirComponent }
            //     ]
            // }

        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(fornecedorRouterConfig)
    ],
    exports: [RouterModule]
})
export class FornecedorRoutingModule { }