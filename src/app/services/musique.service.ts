import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Musique } from '../models/musique';
import { HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MusiqueService {

  apiUrl = 'http://localhost:3000/musiques';

  constructor(private http: HttpClient) { }

  getMusiques() {
    return this.http.get<Musique[]>(this.apiUrl);
  }

  deleteMusique(id: number) { // DELETE musiques/id comme dans rested
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  addMusique(genre, auteur, titre) {
    const musique = {
        genre: '',
        auteur: '',
        titre: ''
    };
    musique.genre = genre;
    musique.auteur = auteur;
    musique.titre = titre;
    this.http.post(this.apiUrl, musique).toPromise().then((data:any) => {
      return data;
    });
  }
}
