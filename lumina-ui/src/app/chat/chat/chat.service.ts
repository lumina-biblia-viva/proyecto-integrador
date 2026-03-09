import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ChatService {
    private apiUrl = 'http://localhost:8000/chat';

    constructor(private http: HttpClient){

    }

    public getAnswer(message: string): Observable<any> {
        const body = { message }
        return this.http.post<any>(this.apiUrl, body);
    }
}