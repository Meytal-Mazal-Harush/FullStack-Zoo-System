import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tickets } from '../class/Tickets';
@Injectable({
  providedIn: 'root',
})
export class TicketsServies {
    constructor(public http: HttpClient) {}
    GetTicketsByIdVisitors(idVisitors: string): Observable<Array<Tickets>> {
      return this.http.get<Array<Tickets>>(`https://localhost:7293/api/Tickets/GetTicketsByIdVisitors/${idVisitors}`);
    }

    AddTickets(tickets: Tickets): Observable<Tickets> {
      return this.http.post<Tickets>(`https://localhost:7293/api/Tickets/AddTickets`, tickets);
    }

    UpdateTickets(tickets: Tickets): Observable<Array<Tickets>> {
      return this.http.put<Array<Tickets>>(`https://localhost:7293/api/Tickets/UpdateTickets/${tickets.codeTickets}`, tickets);
    }

    DeleteTicketsToVisitors(codeTickets: number): Observable<boolean> {
      return this.http.delete<boolean>(`https://localhost:7293/api/Tickets/DeleteTickets/${codeTickets}`);
    }

  }
