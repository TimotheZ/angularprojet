import { Component, OnInit } from '@angular/core';
import { MusiqueService } from 'src/app/services/musique.service';
import { Musique } from 'src/app/models/musique';



@Component({
  selector: 'app-playlist-musique',
  templateUrl: './playlist-musique.component.html',
  styleUrls: ['./playlist-musique.component.scss']
})
export class PlaylistMusiqueComponent implements OnInit {

  musiques: Musique[];

  constructor(private musiqueService: MusiqueService) { }

  ngOnInit() {
    this.getMusiques();
  }

  getMusiques() {
    this.musiqueService.getMusiques()
      .subscribe(musiques => (this.musiques = musiques));
  }
  delete(id) {
    this.musiqueService.deleteMusique(id)
      .subscribe(() => {
        this.musiques = this.musiques.filter(musique => musique.id != id)
      });
  }
}
