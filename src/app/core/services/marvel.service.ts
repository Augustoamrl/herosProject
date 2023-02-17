import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MarvelResponse } from '../interfaces/marvel-response';

import { environment } from 'src/environments/environment';
import { Personagem } from '../interfaces/personagem';
import { SerieByPersonagem } from '../interfaces/serie-by-personagem';



@Injectable({
    providedIn: 'root'
})
export class MarvelService {

    private apiKey = environment.MARVEL_PUBLIC_KEY;
    private apiUrl = 'https://gateway.marvel.com/v1/public';

    constructor(private http: HttpClient) { }

    getPersonagens(): Observable<MarvelResponse<Personagem>> {
        const url = `${this.apiUrl}/characters`;
        const params = new HttpParams().set('apikey', this.apiKey);
        return this.http.get<MarvelResponse<Personagem>>(url, { params });
    }

    getPersonagemById(personagemId: number): Observable<MarvelResponse<Personagem>> {
        const url = `${this.apiUrl}/characters/${personagemId}`;
        const params = new HttpParams().set('apikey', this.apiKey);
        return this.http.get<MarvelResponse<Personagem>>(url, { params });
    }

    getAllSeriesByPersonagemById(personagemId: number): Observable<MarvelResponse<SerieByPersonagem>> {
        const url = `${this.apiUrl}/characters/${personagemId}/series`;
        const params = new HttpParams().set('apikey', this.apiKey);
        return this.http.get<MarvelResponse<SerieByPersonagem>>(url, { params });
    }
    
}