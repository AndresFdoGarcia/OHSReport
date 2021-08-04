import { Component, NgModule } from "@angular/core";
import { Routes , RouterModule } from '@angular/router';

//Components
import { EmployeeComponent } from "./components/employee/employee.component";
import { SigninComponent } from "./components/signin/signin.component";
import { FormularioComponent } from "./components/formulario/formulario.component"
import { Role } from "./models/Role";

import { AuthGuard } from './auth.guard'
import { InicioComponent } from "./components/inicio/inicio.component";

const routes: Routes = [
    {
        path: 'signin',
        component : SigninComponent
    },
    {
        path: 'employee',
        component: EmployeeComponent,
        canActivate: [AuthGuard],
        data : { role : 'SST'}
    },
    {
        path: 'formulario',
        component: FormularioComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'inicio',
        component : InicioComponent
    },
    { 
        path: '**', 
        component: InicioComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }