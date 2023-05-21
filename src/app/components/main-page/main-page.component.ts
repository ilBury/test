import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public currentTime: Date;
  public deadlineTime = new Date(2023, 4, 30, 23, 59, 59);
  public time: Time;

  ngOnInit(): void {
    this.currentTime = new Date();
    this.time = this.calulationTime();
    setInterval(() => {
      this.currentTime = new Date();
      this.time = this.calulationTime();
    }, 1000)
  }

  calulationTime(): Time {
    return {
      Days: this.deadlineTime.getDate() - this.currentTime.getDate(),
      Hours: this.deadlineTime.getHours() - this.currentTime.getHours(),
      Minutes: this.deadlineTime.getMinutes() - this.currentTime.getMinutes(),
      Seconds: this.deadlineTime.getSeconds() - this.currentTime.getSeconds()
    }
  }

  forward() {
    /* window.location.href = 'https://maxkorzh.live/'; */
  }

}

interface Time {
  Days: number,
  Hours: number,
  Minutes: number,
  Seconds: number
}
