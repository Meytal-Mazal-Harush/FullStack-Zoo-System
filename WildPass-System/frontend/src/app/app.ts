import { Component, signal } from '@angular/core';
import { VisitorsServies } from './servies/visitors-servies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my_angular');
  constructor(public s: VisitorsServies, public r: Router) {}
  logout(){
    this.s.resetSession();
    this.r.navigate(['/HomePage']);
  }
   

}
