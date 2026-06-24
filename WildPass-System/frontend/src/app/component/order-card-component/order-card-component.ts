import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VisitorsServies } from '../../servies/visitors-servies';
import { Visitors } from '../../class/Visitors';
import { Router } from '@angular/router';
import { Tickets } from '../../class/Tickets';
import { TicketsServies } from '../../servies/tickets-servies';


@Component({
  selector: 'app-order-card-component',
  standalone: false,
  templateUrl: './order-card-component.html',
  styleUrls: ['./order-card-component.css'], 
})
export class OrderCardComponent {
  constructor(public s: VisitorsServies, public r:Router, public t:TicketsServies) { }
  newF: FormGroup = new FormGroup({});
  visitor:Visitors = new Visitors();
  adultPrice = 50;
  childPrice = 30;
  totalPrice: number | null = null;
  showConfirmation = false;
 
  newVisitor: Visitors = new Visitors();
  newTicket: Tickets = new Tickets();

  private submitTicket(): void {
    this.t.AddTickets(this.newTicket).subscribe(
      _ => {
        this.s.setSession(this.newVisitor);
        this.r.navigate(['/PersonalArea'], { state: { visitor: this.newVisitor } });
      },
      err => {console.error(err)}
    );
  }


  ngOnInit(): void {
  this.newF = new FormGroup({
    idVisitors: new FormControl(this.s.v.idVisitors, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
    emailVisitors: new FormControl(this.s.v.emailVisitors, [Validators.required, Validators.email]),
    nameVisitors: new FormControl(this.s.v.nameVisitors, [Validators.required]),
    visitDate: new FormControl('', [Validators.required]),
    numAdult: new FormControl(1, [Validators.required, Validators.min(1)]),
    numChild: new FormControl(0, [Validators.required, Validators.min(0)])
  });
  
}
onSubmit(){
  
    this.totalPrice = (this.newF.value.numAdult * this.adultPrice) + (this.newF.value.numChild * this.childPrice);
    const total = (this.newF.value.numAdult * this.adultPrice) + (this.newF.value.numChild * this.childPrice);
    this.newVisitor = new Visitors(this.newF.value.idVisitors,this.newF.value.nameVisitors, this.newF.value.emailVisitors );
    this.newTicket = new Tickets(undefined, this.newF.value.idVisitors, this.newF.value.visitDate, this.newF.value.numAdult, this.newF.value.numChild, total);
    alert(`המחיר הכולל להזמנה הוא: ${this.totalPrice} ש"ח.   תודה שפנית אלינו😁👍😉`);
    if(!this.s.flag){
      this.s.AddVisitors(this.newVisitor).subscribe(
        _=>{
          this.s.setSession(this.newVisitor);
          this.submitTicket();
        },
        err=>{console.error(err)}
      );
      return;
    }
    this.submitTicket();
  }
}


