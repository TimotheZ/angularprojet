import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistAjouterComponent } from './components/playlist-ajouter/playlist-ajouter.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlaylistMusiqueComponent } from './components/playlist-musique/playlist-musique.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';


const routes: Routes = [
  { path: 'ajout', component: PlaylistAjouterComponent},
  {
    path: 'accueil',
    component: PlaylistMusiqueComponent
  },
  {
    path: 'informations',
    component: PopUpComponent
  },
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
