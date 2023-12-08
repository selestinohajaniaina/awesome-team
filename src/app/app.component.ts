import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CalendarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'station';

  public data:  [{
    nbr: number,
    title: string,
    text: string,
    time: string,
    chat: number,
    img: null
  }] = [
    {
      nbr: 3,
    title: 'Europe Project',
    text: 'Create a Prototype for the mobile App for Get Notifications in Principale',
    time: 'Dec 1',
    chat: 3,
    img: null
    },
  ];

  ngOnInit() {
    for(let i = 0; i < 5; i++){
      this.data.push({
        nbr: 3,
      title: 'Europe Project',
      text: 'Create a Prototype for the mobile App for Get Notifications in Principale',
      time: 'Dec 1',
      chat: 3,
      img: null
      })
    }
  }

  getRange(start: number, end: number): number[] {
    const range = [];
    for (let i = start; i <= end; i ++) {
      range.push(i);
    }
    return range;
  }

}
