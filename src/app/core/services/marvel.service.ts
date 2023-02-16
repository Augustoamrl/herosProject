import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MarvelResponse } from '../interfaces/marvel-response';
import { Character } from '../interfaces/character';
import { environment } from 'src/environments/environment';



@Injectable({
    providedIn: 'root'
})
export class MarvelService {

    private apiKey = environment.MARVEL_PUBLIC_KEY;
    private apiUrl = 'https://gateway.marvel.com/v1/public';

    constructor(private http: HttpClient) { }

    getCharacters(): Observable<MarvelResponse<Character>> {
        const url = `${this.apiUrl}/characters`;
        const params = new HttpParams().set('apikey', this.apiKey);
        return this.http.get<MarvelResponse<Character>>(url, { params });
    }
}