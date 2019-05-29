import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CadastroUsuarioComponent} from './cadastro-usuario/cadastro-usuario.component';

export const ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroUsuarioComponent},
  {path: '', redirectTo: 'cadastro', pathMatch: 'full'}
];
