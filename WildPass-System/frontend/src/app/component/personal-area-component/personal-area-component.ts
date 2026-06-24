import { Component } from '@angular/core';
import { VisitorsServies } from '../../servies/visitors-servies';
import { TicketsServies } from '../../servies/tickets-servies';
import { Tickets } from '../../class/Tickets';
@Component({
  selector: 'app-personal-area-component',
  standalone: false,
  templateUrl: './personal-area-component.html',
  styleUrl: './personal-area-component.css',
})
export class PersonalAreaComponent {
constructor(public s:VisitorsServies , public t:TicketsServies) {}
tickets: Array<Tickets> = new Array<Tickets>();
ngOnInit(){
  const navigationVisitor = history.state?.visitor;
  if (!this.s.v.idVisitors && navigationVisitor) {
    this.s.setSession(navigationVisitor);
  }

  this.s.restoreSession();

  if (!this.s.v.idVisitors) {
    this.tickets = [];
    return;
  }

  this.t.GetTicketsByIdVisitors(this.s.v.idVisitors).subscribe(
    data => { this.tickets = data; },
    err => { alert("שגיאה בטעינת הכרטיסים"); }
  );
}

LogOut(){
  this.s.resetSession();
}

}
