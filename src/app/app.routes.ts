import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path:'home', component: HomeComponent},
    {path: 'pokemon',component:PokemonComponent }

];
