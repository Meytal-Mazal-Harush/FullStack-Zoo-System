import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visitors } from '../class/Visitors';
import { Observable , throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
// ...existing code...

@Injectable({
  providedIn: 'root',
})
export class VisitorsServies {
   v:Visitors=new Visitors()
   flag:boolean=false;
   private baseUrl = 'https://localhost:7293/api/Visitors/AddVisitors';
    private readonly sessionKey = 'my_angular_visitor_session';

    constructor(public http: HttpClient) {
      this.restoreSession();
    }

    restoreSession(): void {
      const savedSession = localStorage.getItem(this.sessionKey);
      if (!savedSession) {
        return;
      }

      try {
        const parsedSession = JSON.parse(savedSession) as { v?: Visitors; flag?: boolean };
        this.v = parsedSession.v ? Object.assign(new Visitors(), parsedSession.v) : new Visitors();
        this.flag = Boolean(parsedSession.flag && this.v.idVisitors);
      } catch {
        this.resetSession();
      }
    }

    private persistSession(): void {
      localStorage.setItem(
        this.sessionKey,
        JSON.stringify({ v: this.v, flag: this.flag })
      );
    }

    setSession(visitor: Visitors): void {
      this.v = Object.assign(new Visitors(), visitor);
      this.flag = true;
      this.persistSession();
    }

    resetSession(): void {
      this.v = new Visitors();
      this.flag = false;
      localStorage.removeItem(this.sessionKey);
    }

    GetVisitorsByIdAndMail(idVisitors: string,emailVisitors: string): Observable<Visitors> {
      debugger
      return this.http.get<Visitors>(`https://localhost:7293/api/Visitors/GetVisitorsByIdAndMail/${idVisitors}/${emailVisitors}`);
    }

    AddVisitors(visitors: Visitors): Observable<boolean> {
      return this.http.post<boolean>('https://localhost:7293/api/Visitors/AddVisitors', visitors);
    }

    createOrder(order: Visitors | any): Observable<any> {
    console.log('createOrder payload:', order);
    return this.http.post<any>(this.baseUrl, order).pipe(
      tap(res => console.log('createOrder response:', res)),
      catchError(err => {
        console.error('createOrder error:', err);
        return throwError(() => err);
      })
       );
  }
}