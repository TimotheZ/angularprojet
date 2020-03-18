import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusiqueService } from 'src/app/services/musique.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-playlist-ajouter',
  templateUrl: './playlist-ajouter.component.html',
  styleUrls: ['./playlist-ajouter.component.scss']
})
export class PlaylistAjouterComponent implements OnInit {

  constructor(private musiqueService: MusiqueService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const genre = form.value.genre;
    const auteur = form.value.auteur;
    const titre = form.value.titre;

    this.musiqueService.addMusique(genre, auteur, titre);
    document.getElementById('message').textContent = 'Votre musique a été ajouter';
    setTimeout(() => {
      document.getElementById('message').textContent = '';
      this.router.navigate(['accueil']);
    }, 1000);
  }
}
