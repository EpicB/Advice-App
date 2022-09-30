import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdviceDetails } from './models/Advice';

@Injectable({
  providedIn: 'root',
})
export class AdvicecontainerService {
  constructor(private http: HttpClient) {}
  GetAdivceDetails(): Observable<AdviceDetails> {
    return this.http.get<AdviceDetails>('https://api.adviceslip.com/advice');
  }
}
