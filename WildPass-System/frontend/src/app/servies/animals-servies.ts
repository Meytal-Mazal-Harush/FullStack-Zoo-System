import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animals } from '../class/Animals ';

@Injectable({
  providedIn: 'root',
})
export class AnimalsServies {
  constructor(public http: HttpClient) {
  }
  GetAllAnimals(): Observable<Array<Animals>>{
      return this.http.get<Array<Animals>>('https://localhost:7293/api/Animals/GetAllAnimals');
    }
}
