import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeedingTimes } from '../class/FeedingTimes';
@Injectable({
  providedIn: 'root',
})
export class FeedingTimesServies {
  constructor(public http: HttpClient) {}
  GetFeedingTimeByCodeAnimals( codeAnimals: number): Observable<Array<FeedingTimes>>{
    return this.http.get<Array<FeedingTimes>>(`https://localhost:7293/api/FeedingTimes/GetFeedingTimeByCodeAnimals/${codeAnimals}`);
  }
}
