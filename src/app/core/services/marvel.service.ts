import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MarvelResponse } from '../interfaces/marvel-response';

import { environment } from 'src/environments/environment';
import { Personagem } from '../interfaces/personagem';



@Injectable({
    providedIn: 'root'
})
export class MarvelService {

    private apiKey = environment.MARVEL_PUBLIC_KEY;
    private apiUrl = 'https://gateway.marvel.com/v1/public';

    constructor(private http: HttpClient) { }

    getPersonagem(): Observable<MarvelResponse<Personagem>> {
        const url = `${this.apiUrl}/characters`;
        const params = new HttpParams().set('apikey', this.apiKey);
        return this.http.get<MarvelResponse<Personagem>>(url, { params });
    }
}