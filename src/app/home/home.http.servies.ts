import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RestService {

    constructor(private http: HttpClient) {

    }

    public GetConfigrations(): Observable<any[]> {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        return this.http.get<any[]>(url)
    }
}