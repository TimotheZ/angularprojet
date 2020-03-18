import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { PlaylistToolbarComponent } from './components/playlist-toolbar/playlist-toolbar.component';
import { PlaylistSidenavComponent } from './components/playlist-sidenav/playlist-sidenav.component';
import { PlaylistMusiqueComponent } from './components/playlist-musique/playlist-musique.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PlaylistAjouterComponent } from './components/playlist-ajouter/playlist-ajouter.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PopUpComponent, PopUpOverview } from './components/pop-up/pop-up.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';




@NgModule({
  declarations: [
    AppComponent,
    PlaylistToolbarComponent,
    PlaylistSidenavComponent,
    PlaylistMusiqueComponent,
    PlaylistAjouterComponent,
    NotFoundComponent,
    PopUpComponent,
    PopUpOverview
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatBottomSheetModule
  ],
  entryComponents: [PopUpComponent, PopUpOverview],
  providers: [],
  bootstrap: [AppComponent, PopUpComponent]
})
export class AppModule { }
