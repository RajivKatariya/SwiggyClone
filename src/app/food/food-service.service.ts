import { Injectable } from '@angular/core';
import {foods} from '../food';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {
  private baseApiUrl='http://localhost:3000/food';

  constructor(private http:HttpClient) { }

  getData(): Observable<foods[]> {
    return this.http.get<foods[]>(`${this.baseApiUrl}`);
  }

  addFood(food: foods): Observable<foods> {
    const url = `${this.baseApiUrl}`;
    return this.http.post<foods>(url, food, httpOptions);
  }
}
