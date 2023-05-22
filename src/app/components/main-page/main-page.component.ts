import { trigger, state, style, animate, transition } from '@angular/animations';
import { AfterContentInit, AfterViewInit, Component, ComponentRef, DoCheck, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    trigger('emergLogo',
      [
        transition(':enter', [
          style({transform: 'translateY(-50%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ])
      ]
    ),
    trigger('emergTitle',
      [
        transition(':enter', [
          style({transform: 'translateY(-20%)', opacity: 0}),
          animate('500ms 500ms', style({transform: 'translateX(0)', opacity: 1}))
        ])
      ]
    ),
    trigger('emergTime',
      [
        transition(':enter', [
          style({transform: 'translateY(-20%)', opacity: 0}),
          animate('500ms 900ms', style({transform: 'translateX(0)', opacity: 1}))
        ])
      ]
    ),
    trigger('emergEvent',
      [
        transition(':enter', [
          style({transform: 'translateY(-20%)', opacity: 0}),
          animate('500ms 1000ms', style({transform: 'translateX(0)', opacity: 1}))
        ])
      ]
    ),
    trigger('emergImg',
      [
        transition(':enter', [
          style({transform: 'translateY(-20%)', opacity: 0}),
          animate('500ms 500ms', style({transform: 'translateX(0)', opacity: 1}))
        ])
      ]
    )

  ]
})
export class MainPageComponent implements OnInit, DoCheck {
  public currentTime: Date;
  public deadlineTime = new Date(2023, 4, 30, 23, 59, 59);
  public time: Time;
  public isEmerg: boolean = false;
  public isLess: boolean;


  ngOnInit(): void {

    this.isEmerg = true;
    this.currentTime = new Date();
    this.time = this.calulationTime();
    setInterval(() => {
      this.currentTime = new Date();
      this.time = this.calulationTime();
    }, 1000)
  }

  ngDoCheck(): void {
    window.innerWidth < 1000 ? this.isLess = true : this.isLess = false;

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
    window.location.href = 'https://maxkorzh.live/';
  }



}

interface Time {
  Days: number,
  Hours: number,
  Minutes: number,
  Seconds: number
}
