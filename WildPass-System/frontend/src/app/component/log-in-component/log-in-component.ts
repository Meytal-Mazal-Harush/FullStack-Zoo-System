import { Component } from '@angular/core';
import { VisitorsServies } from '../../servies/visitors-servies';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in-component',
  standalone: false,
  templateUrl: './log-in-component.html',
  styleUrl: './log-in-component.css',
})
export class LogInComponent {
  constructor(public s:VisitorsServies, public r:Router){}

enter(){
  debugger
  this.s.GetVisitorsByIdAndMail(this.s.v.idVisitors!,this.s.v.emailVisitors!).subscribe(
    data => {debugger; this.s.setSession(data); this.r.navigate(['/PersonalArea'], { state: { visitor: data } });},
    error => {this.r.navigate(['/OrderCard'])}
  )
}


}
